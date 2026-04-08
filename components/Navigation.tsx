import { Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'calculator', label: 'Calculate' },
    { id: 'tips', label: 'Tips & News' },
  ];

  return (
    <nav className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <Leaf className="h-8 w-8" />
            <span className="text-2xl font-bold">EcoCalc</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => onNavigate(page.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === page.id
                    ? 'bg-white text-emerald-600'
                    : 'hover:bg-emerald-700'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-emerald-700"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-emerald-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  onNavigate(page.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === page.id
                    ? 'bg-white text-emerald-600'
                    : 'hover:bg-emerald-600'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
