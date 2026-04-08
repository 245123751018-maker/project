import { Calculator, Globe, Leaf, TrendingDown } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-emerald-50">
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8)), url("https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to EcoCalc</h1>
          <p className="text-xl md:text-2xl mb-8">
            Measure Your Impact. Make a Difference.
          </p>
          <button
            onClick={() => onNavigate('calculator')}
            className="bg-white text-emerald-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Calculate Your Footprint
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Every Action Counts
          </h2>
          <p className="text-xl text-gray-600 italic">
            "The greatest threat to our planet is the belief that someone else will save it."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Calculator className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Easy Calculation</h3>
            <p className="text-gray-600">
              Simple and intuitive carbon footprint calculator with detailed breakdown
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Global Impact</h3>
            <p className="text-gray-600">
              Understand how your lifestyle affects the environment worldwide
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <TrendingDown className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Actionable Tips</h3>
            <p className="text-gray-600">
              Get personalized recommendations to reduce your carbon footprint
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Eco-Friendly</h3>
            <p className="text-gray-600">
              Join a community committed to sustainable living and climate action
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Did You Know?</h2>
            <div className="space-y-4 text-lg">
              <p>
                The average person generates about 4 tons of CO2 emissions per year
              </p>
              <p>
                Small changes in daily habits can reduce your footprint by up to 30%
              </p>
              <p>
                If everyone reduced their emissions by 20%, we could prevent 2°C of global warming
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-emerald-500">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Be the Change</h3>
            <p className="text-gray-600">
              Start today by calculating your carbon footprint and taking steps toward a greener future
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Think Globally</h3>
            <p className="text-gray-600">
              Your individual actions contribute to collective change for our planet's health
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-teal-500">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Act Locally</h3>
            <p className="text-gray-600">
              Small sustainable choices in your daily life create lasting environmental impact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
