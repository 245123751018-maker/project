import { AlertCircle, Calculator as CalcIcon, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { calculateCarbonFootprint, CalculationInput } from '../utils/carbonCalculator';
import { supabase } from '../lib/supabase';

interface CalculatorProps {
  onNavigate: (page: string, data?: any) => void;
}

export default function Calculator({ onNavigate }: CalculatorProps) {
  const [formData, setFormData] = useState<CalculationInput>({
    electricity_kwh: 0,
    natural_gas_therms: 0,
    fuel_liters: 0,
    num_vehicles: 0,
    vehicle_km_per_month: 0,
    diet_type: 'balanced',
    waste_kg_per_week: 0,
    recycling_percentage: 0,
  });

  const [inputValues, setInputValues] = useState({
    electricity_kwh: '',
    natural_gas_therms: '',
    fuel_liters: '',
    num_vehicles: '',
    vehicle_km_per_month: '',
    waste_kg_per_week: '',
    recycling_percentage: '',
  });

  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setInputValues((prev) => ({
      ...prev,
      [field]: value,
    }));

    const numValue = value === '' ? 0 : parseFloat(value);
    if (!isNaN(numValue)) {
      setFormData((prev) => ({
        ...prev,
        [field]: numValue,
      }));
    }
    setError('');
  };

  const validateForm = (): boolean => {
    if (formData.electricity_kwh < 0 || formData.natural_gas_therms < 0 || formData.fuel_liters < 0) {
      setError('Please enter valid positive numbers');
      return false;
    }
    if (formData.num_vehicles < 0 || formData.vehicle_km_per_month < 0) {
      setError('Vehicle information must be positive numbers');
      return false;
    }
    if (formData.waste_kg_per_week < 0 || formData.recycling_percentage < 0 || formData.recycling_percentage > 100) {
      setError('Please enter valid waste and recycling information');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const result = calculateCarbonFootprint(formData);

      const { error: dbError } = await supabase
        .from('carbon_calculations')
        .insert({
          user_name: userName || 'Anonymous',
          electricity_kwh: formData.electricity_kwh,
          natural_gas_therms: formData.natural_gas_therms,
          fuel_liters: formData.fuel_liters,
          num_vehicles: formData.num_vehicles,
          vehicle_km_per_month: formData.vehicle_km_per_month,
          diet_type: formData.diet_type,
          waste_kg_per_week: formData.waste_kg_per_week,
          recycling_percentage: formData.recycling_percentage,
          total_footprint_kg: result.total_footprint_kg,
          electricity_emissions: result.electricity_emissions,
          transport_emissions: result.transport_emissions,
          diet_emissions: result.diet_emissions,
          waste_emissions: result.waste_emissions,
        });

      if (dbError) {
        console.error('Database error:', dbError);
      }

      onNavigate('results', { result, formData });
    } catch (err) {
      setError('An error occurred while calculating. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-emerald-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-emerald-100 p-4 rounded-full">
              <CalcIcon className="h-12 w-12 text-emerald-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Calculate Your Carbon Footprint
          </h1>
          <p className="text-lg text-gray-600">
            Answer the questions below to discover your environmental impact
          </p>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
            <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
            <p className="text-red-800">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name (Optional)
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-emerald-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Energy Consumption</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Electricity Usage (kWh) *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    step="0.1"
                    value={inputValues.electricity_kwh}
                    onChange={(e) => handleInputChange('electricity_kwh', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="e.g., 500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Check your electricity bill for this information</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Natural Gas Usage (Therms)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={inputValues.natural_gas_therms}
                    onChange={(e) => handleInputChange('natural_gas_therms', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="e.g., 40"
                  />
                  <p className="text-xs text-gray-500 mt-1">Leave blank if you don't use natural gas</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Transportation</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Vehicles in Household *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    step="1"
                    value={inputValues.num_vehicles}
                    onChange={(e) => handleInputChange('num_vehicles', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="e.g., 2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Kilometers Driven per Month *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    step="1"
                    value={inputValues.vehicle_km_per_month}
                    onChange={(e) => handleInputChange('vehicle_km_per_month', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="e.g., 1000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Fuel Consumption (Liters) *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    step="0.1"
                    value={inputValues.fuel_liters}
                    onChange={(e) => handleInputChange('fuel_liters', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="e.g., 80"
                  />
                </div>
              </div>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Diet & Lifestyle</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dietary Preference *
                </label>
                <select
                  required
                  value={formData.diet_type}
                  onChange={(e) => handleInputChange('diet_type', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="vegan">Vegan</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="balanced">Balanced (Moderate Meat)</option>
                  <option value="meat-heavy">Meat Heavy</option>
                </select>
              </div>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Waste Management</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Weekly Waste Production (kg) *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    step="0.1"
                    value={inputValues.waste_kg_per_week}
                    onChange={(e) => handleInputChange('waste_kg_per_week', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="e.g., 15"
                  />
                  <p className="text-xs text-gray-500 mt-1">Average household produces 10-25 kg per week</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Recycling Percentage (%) *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    max="100"
                    step="1"
                    value={inputValues.recycling_percentage}
                    onChange={(e) => handleInputChange('recycling_percentage', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="e.g., 50"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-emerald-50 rounded-lg p-4">
            <p className="text-sm text-emerald-800 italic">
              "Small changes in your daily habits can lead to significant reductions in your carbon footprint."
            </p>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-5 w-5" />
                  Calculating...
                </>
              ) : (
                'Calculate My Footprint'
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            "Every journey begins with a single step. Start yours today!"
          </p>
        </div>
      </div>
    </div>
  );
}
