import { AlertTriangle, CheckCircle, Leaf, TrendingDown } from 'lucide-react';
import { CalculationResult } from '../utils/carbonCalculator';
import { getRecommendations } from '../utils/carbonCalculator';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';

interface ResultsProps {
  result: CalculationResult;
  onNavigate: (page: string) => void;
}

export default function Results({ result, onNavigate }: ResultsProps) {
  const recommendations = getRecommendations(result);

  const chartData = [
    {
      label: 'Electricity & Gas',
      value: result.electricity_emissions,
      color: '#10b981',
    },
    {
      label: 'Transportation',
      value: result.transport_emissions,
      color: '#3b82f6',
    },
    {
      label: 'Diet',
      value: result.diet_emissions,
      color: '#f59e0b',
    },
    {
      label: 'Waste',
      value: result.waste_emissions,
      color: '#14b8a6',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-emerald-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Carbon Footprint Results</h1>
          <p className="text-lg text-gray-600">Here's a detailed breakdown of your environmental impact</p>
        </div>

        <div className="mb-8">
          <div className={`rounded-2xl p-8 text-white shadow-xl ${
            result.isAboveAverage
              ? 'bg-gradient-to-r from-orange-500 to-red-500'
              : 'bg-gradient-to-r from-emerald-500 to-teal-500'
          }`}>
            <div className="flex items-center justify-center mb-4">
              {result.isAboveAverage ? (
                <AlertTriangle className="h-16 w-16" />
              ) : (
                <CheckCircle className="h-16 w-16" />
              )}
            </div>
            <h2 className="text-4xl font-bold text-center mb-2">
              {result.total_footprint_kg.toLocaleString()} kg CO₂
            </h2>
            <p className="text-center text-xl">
              Your Monthly Carbon Footprint
            </p>
            <div className="mt-4 text-center text-lg">
              {result.isAboveAverage ? (
                <p>
                  Your footprint is {Math.abs(result.comparedToAverage)}% above the average.
                  Don't worry, we have recommendations to help!
                </p>
              ) : (
                <p>
                  Great job! Your footprint is {Math.abs(result.comparedToAverage)}% below average.
                  Keep up the excellent work!
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Emissions Breakdown
            </h3>
            <PieChart data={chartData} size={300} />
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Category Comparison
            </h3>
            <BarChart data={chartData} />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-emerald-500">
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-2">Electricity & Gas</p>
              <p className="text-3xl font-bold text-emerald-600">
                {result.electricity_emissions}
              </p>
              <p className="text-gray-500 text-xs mt-1">kg CO₂/month</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-2">Transportation</p>
              <p className="text-3xl font-bold text-blue-600">
                {result.transport_emissions}
              </p>
              <p className="text-gray-500 text-xs mt-1">kg CO₂/month</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-amber-500">
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-2">Diet</p>
              <p className="text-3xl font-bold text-amber-600">
                {result.diet_emissions}
              </p>
              <p className="text-gray-500 text-xs mt-1">kg CO₂/month</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-teal-500">
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-2">Waste</p>
              <p className="text-3xl font-bold text-teal-600">
                {result.waste_emissions}
              </p>
              <p className="text-gray-500 text-xs mt-1">kg CO₂/month</p>
            </div>
          </div>
        </div>

        {result.isAboveAverage && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <TrendingDown className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Personalized Recommendations
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {recommendations.map((rec, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-amber-50 rounded-lg border border-amber-200"
                >
                  <Leaf className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{rec}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white mb-8">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Understanding Your Impact
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">
                {(result.total_footprint_kg * 12 / 1000).toFixed(1)}
              </p>
              <p className="text-sm">Tons of CO₂ per Year</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">
                {Math.round(result.total_footprint_kg * 12 / 21)}
              </p>
              <p className="text-sm">Trees Needed to Offset</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">
                {Math.round(result.total_footprint_kg * 12 / 411)}
              </p>
              <p className="text-sm">Average Car Miles Equivalent</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Quick Tips to Reduce Your Footprint
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-emerald-50 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-2">Energy Efficiency</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Switch to LED lighting</li>
                <li>• Use smart thermostats</li>
                <li>• Insulate your home</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Transportation</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Walk or bike for short trips</li>
                <li>• Use public transport</li>
                <li>• Consider carpooling</li>
              </ul>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Diet Choices</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Eat more plant-based meals</li>
                <li>• Buy local produce</li>
                <li>• Reduce food waste</li>
              </ul>
            </div>
            <div className="p-4 bg-teal-50 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-2">Waste Reduction</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Recycle properly</li>
                <li>• Compost organic waste</li>
                <li>• Use reusable products</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Water Conservation</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Fix leaky faucets</li>
                <li>• Take shorter showers</li>
                <li>• Use efficient appliances</li>
              </ul>
            </div>
            <div className="p-4 bg-rose-50 rounded-lg">
              <h4 className="font-semibold text-rose-800 mb-2">Shopping Habits</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Buy second-hand items</li>
                <li>• Choose sustainable brands</li>
                <li>• Avoid fast fashion</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => onNavigate('calculator')}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Calculate Again
          </button>
          <button
            onClick={() => onNavigate('tips')}
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-lg border-2 border-emerald-600"
          >
            Learn More Tips
          </button>
        </div>

        <div className="mt-8 text-center bg-emerald-50 rounded-lg p-6">
          <p className="text-lg text-emerald-900 italic font-medium">
            "The greatest danger to our planet is the belief that someone else will save it."
          </p>
          <p className="text-sm text-emerald-700 mt-2">- Robert Swan, Author & Explorer</p>
        </div>
      </div>
    </div>
  );
}
