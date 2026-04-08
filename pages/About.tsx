import { Award, Heart, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About EcoCalc
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering individuals to understand and reduce their environmental impact through awareness and action
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            EcoCalc was created with a simple yet powerful mission: to make carbon footprint calculation accessible, understandable, and actionable for everyone. We believe that informed individuals make better environmental choices, and those choices collectively create meaningful change.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Climate change is one of the most pressing challenges of our time, but it can feel overwhelming. Our tool breaks down your environmental impact into clear, manageable categories, helping you understand where you stand and where you can improve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Target className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">What We Do</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                Calculate carbon footprints based on lifestyle factors
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                Provide personalized reduction recommendations
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                Track and visualize environmental impact
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                Share educational resources and climate news
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Why It Matters</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Individual actions collectively drive global change
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Awareness is the first step toward sustainable living
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Small changes create significant long-term impact
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Every ton of CO2 reduced helps our planet
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Input Data</h4>
              <p className="text-sm">Enter your lifestyle information</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Calculate</h4>
              <p className="text-sm">We process your carbon footprint</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Visualize</h4>
              <p className="text-sm">See your impact in clear charts</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Act</h4>
              <p className="text-sm">Get personalized recommendations</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-10 w-10 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Community</h3>
            <p className="text-gray-700">
              Join thousands of users committed to reducing their environmental impact
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Accuracy</h3>
            <p className="text-gray-700">
              Our calculations are based on scientific research and industry standards
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-10 w-10 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Impact</h3>
            <p className="text-gray-700">
              Together, we can make measurable progress toward a sustainable future
            </p>
          </div>
        </div>

        <div className="mt-12 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
          <p className="text-lg text-gray-800 italic">
            "The best time to plant a tree was 20 years ago. The second best time is now. The same applies to climate action."
          </p>
        </div>
      </div>
    </div>
  );
}
