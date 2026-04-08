export interface CalculationInput {
  electricity_kwh: number;
  natural_gas_therms: number;
  fuel_liters: number;
  num_vehicles: number;
  vehicle_km_per_month: number;
  diet_type: string;
  waste_kg_per_week: number;
  recycling_percentage: number;
}

export interface CalculationResult {
  total_footprint_kg: number;
  electricity_emissions: number;
  transport_emissions: number;
  diet_emissions: number;
  waste_emissions: number;
  breakdown: {
    electricity: number;
    transport: number;
    diet: number;
    waste: number;
  };
  isAboveAverage: boolean;
  comparedToAverage: number;
}

const EMISSION_FACTORS = {
  electricity: 0.5,
  naturalGas: 5.3,
  fuel: 2.31,
  vehicleKm: 0.24,
  diet: {
    'meat-heavy': 3.3,
    'balanced': 2.5,
    'vegetarian': 1.7,
    'vegan': 1.5,
  },
  waste: 0.5,
};

const AVERAGE_MONTHLY_FOOTPRINT = 1000;

export function calculateCarbonFootprint(input: CalculationInput): CalculationResult {
  const electricityEmissions = input.electricity_kwh * EMISSION_FACTORS.electricity;

  const naturalGasEmissions = input.natural_gas_therms * EMISSION_FACTORS.naturalGas;

  const fuelEmissions = input.fuel_liters * EMISSION_FACTORS.fuel;

  const vehicleEmissions = input.vehicle_km_per_month * EMISSION_FACTORS.vehicleKm;
  const transportEmissions = fuelEmissions + vehicleEmissions;

  const dietFactor = EMISSION_FACTORS.diet[input.diet_type as keyof typeof EMISSION_FACTORS.diet] || EMISSION_FACTORS.diet.balanced;
  const dietEmissions = dietFactor * 30;

  const recyclingFactor = 1 - (input.recycling_percentage / 100) * 0.5;
  const wasteEmissions = input.waste_kg_per_week * 4 * EMISSION_FACTORS.waste * recyclingFactor;

  const totalFootprint = electricityEmissions + naturalGasEmissions + transportEmissions + dietEmissions + wasteEmissions;

  const isAboveAverage = totalFootprint > AVERAGE_MONTHLY_FOOTPRINT;
  const comparedToAverage = ((totalFootprint - AVERAGE_MONTHLY_FOOTPRINT) / AVERAGE_MONTHLY_FOOTPRINT) * 100;

  return {
    total_footprint_kg: Math.round(totalFootprint),
    electricity_emissions: Math.round(electricityEmissions + naturalGasEmissions),
    transport_emissions: Math.round(transportEmissions),
    diet_emissions: Math.round(dietEmissions),
    waste_emissions: Math.round(wasteEmissions),
    breakdown: {
      electricity: Math.round(electricityEmissions + naturalGasEmissions),
      transport: Math.round(transportEmissions),
      diet: Math.round(dietEmissions),
      waste: Math.round(wasteEmissions),
    },
    isAboveAverage,
    comparedToAverage: Math.round(comparedToAverage),
  };
}

export function getRecommendations(result: CalculationResult): string[] {
  const recommendations: string[] = [];

  if (result.electricity_emissions > 300) {
    recommendations.push('Switch to LED bulbs and unplug devices when not in use');
    recommendations.push('Consider renewable energy options like solar panels');
    recommendations.push('Use energy-efficient appliances');
  }

  if (result.transport_emissions > 400) {
    recommendations.push('Use public transportation or carpool when possible');
    recommendations.push('Consider switching to an electric or hybrid vehicle');
    recommendations.push('Combine errands to reduce driving trips');
    recommendations.push('Walk or bike for short distances');
  }

  if (result.diet_emissions > 80) {
    recommendations.push('Try incorporating more plant-based meals into your diet');
    recommendations.push('Reduce red meat consumption');
    recommendations.push('Buy locally sourced food to reduce transportation emissions');
  }

  if (result.waste_emissions > 100) {
    recommendations.push('Increase your recycling efforts');
    recommendations.push('Compost organic waste');
    recommendations.push('Reduce single-use plastics');
    recommendations.push('Buy products with minimal packaging');
  }

  if (recommendations.length === 0) {
    recommendations.push('Great job! Keep up your eco-friendly lifestyle');
    recommendations.push('Share your sustainable practices with friends and family');
  }

  return recommendations;
}
