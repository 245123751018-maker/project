import {
  Bike,
  Droplets,
  Home,
  Leaf,
  Lightbulb,
  Recycle,
  ShoppingBag,
  Sprout,
  Sun,
  Wind,
} from 'lucide-react';

export default function Tips() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-emerald-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Tips & Environmental News
          </h1>
          <p className="text-xl text-gray-600">
            Stay informed and take action for a sustainable future
          </p>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white mb-12 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Climate Action Today</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">1.5°C</p>
              <p className="text-sm">Global warming target to prevent catastrophic climate change</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">2030</p>
              <p className="text-sm">Deadline to cut emissions by 45% to meet Paris Agreement goals</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">30%</p>
              <p className="text-sm">Potential reduction in footprint through lifestyle changes</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Recent Environmental News</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Sun className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Renewable Energy Growth
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Global renewable energy capacity increased by 50% in 2023, with solar and wind
                    leading the charge toward a cleaner future.
                  </p>
                  <span className="text-sm text-emerald-600 font-semibold">2 days ago</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Droplets className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Ocean Conservation Milestone
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Over 100 countries commit to protecting 30% of ocean areas by 2030, crucial
                    for marine biodiversity and carbon sequestration.
                  </p>
                  <span className="text-sm text-emerald-600 font-semibold">5 days ago</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <Sprout className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Reforestation Success Story
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Ethiopia plants 5 billion trees in nationwide campaign, demonstrating the power
                    of collective action in combating deforestation.
                  </p>
                  <span className="text-sm text-emerald-600 font-semibold">1 week ago</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-lg mr-4">
                  <Wind className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Clean Air Initiatives
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Major cities worldwide implement low-emission zones, reducing air pollution by
                    up to 40% and improving public health.
                  </p>
                  <span className="text-sm text-emerald-600 font-semibold">1 week ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Practical Tips for Daily Life</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Home className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">At Home</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  Switch to LED bulbs to save 75% energy
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  Unplug electronics when not in use
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  Install a programmable thermostat
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  Use cold water for laundry
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  Seal windows and doors to prevent drafts
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Bike className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Transportation</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Walk or bike for trips under 2 km
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Use public transportation regularly
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Carpool with colleagues or friends
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Maintain proper tire pressure
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Consider electric or hybrid vehicles
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Food & Diet</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  Try Meatless Mondays
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  Buy locally sourced produce
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  Reduce food waste by meal planning
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  Compost organic kitchen waste
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  Choose seasonal fruits and vegetables
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Recycle className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Waste Management</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  Follow proper recycling guidelines
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  Use reusable shopping bags
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  Avoid single-use plastics
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  Bring your own water bottle
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  Choose products with minimal packaging
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Droplets className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Water Conservation</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Take shorter showers (5 minutes max)
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Fix leaks immediately
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Install low-flow faucets and showerheads
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Collect rainwater for plants
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Only run full loads of laundry
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Conscious Consumption</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-rose-600 mr-2">✓</span>
                  Buy quality items that last longer
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-2">✓</span>
                  Shop second-hand when possible
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-2">✓</span>
                  Support sustainable brands
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-2">✓</span>
                  Repair items instead of replacing
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-2">✓</span>
                  Donate or sell unwanted items
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Monthly Challenges</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-lg p-6 text-center">
              <Lightbulb className="h-12 w-12 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Week 1</h4>
              <p className="text-sm">Switch all lights to LED</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-lg p-6 text-center">
              <Bike className="h-12 w-12 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Week 2</h4>
              <p className="text-sm">Walk or bike for short trips</p>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-lg p-6 text-center">
              <Leaf className="h-12 w-12 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Week 3</h4>
              <p className="text-sm">Try 3 plant-based meals</p>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-green-500 text-white rounded-lg p-6 text-center">
              <Recycle className="h-12 w-12 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Week 4</h4>
              <p className="text-sm">Start composting at home</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-200">
            <h3 className="text-xl font-bold text-emerald-800 mb-3">Think Long-Term</h3>
            <p className="text-gray-700 italic">
              "We do not inherit the earth from our ancestors; we borrow it from our children."
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Start Small</h3>
            <p className="text-gray-700 italic">
              "The journey of a thousand miles begins with a single step. Every eco-friendly choice matters."
            </p>
          </div>
          <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
            <h3 className="text-xl font-bold text-teal-800 mb-3">Inspire Others</h3>
            <p className="text-gray-700 italic">
              "Be the change you wish to see in the world. Your actions inspire those around you."
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Take Action Today</h3>
          <p className="text-lg mb-2">
            Remember: Every positive action, no matter how small, contributes to a healthier planet.
          </p>
          <p className="text-lg">
            Together, we can create lasting change for generations to come.
          </p>
        </div>
      </div>
    </div>
  );
}
