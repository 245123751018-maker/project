import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Calculator from './pages/Calculator';
import Results from './pages/Results';
import Tips from './pages/Tips';
import { CalculationResult } from './utils/carbonCalculator';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [resultsData, setResultsData] = useState<{ result: CalculationResult } | null>(null);

  const handleNavigate = (page: string, data?: any) => {
    if (page === 'results' && data) {
      setResultsData(data);
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
      {currentPage === 'about' && <About />}
      {currentPage === 'calculator' && <Calculator onNavigate={handleNavigate} />}
      {currentPage === 'results' && resultsData && (
        <Results result={resultsData.result} onNavigate={handleNavigate} />
      )}
      {currentPage === 'tips' && <Tips />}

      <footer className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">EcoCalc</h3>
            <p className="text-emerald-100 mb-4">
              Together for a sustainable future
            </p>
            <p className="text-sm text-emerald-200">
              Every action counts. Start making a difference today.
            </p>
            <div className="mt-4 text-xs text-emerald-300">
              Carbon calculations based on EPA and IPCC emission factors
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
