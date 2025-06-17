
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-purple-100/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">SA</span>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              SA Builders
            </h1>
            <p className="text-xs text-gray-500">Since 2017</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-105"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-105"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-105"
          >
            Portfolio
          </button>
          <Button 
            onClick={() => scrollToSection('quote')}
            className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-600 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get Quote
          </Button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-105"
          >
            About
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className={`h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/90 backdrop-blur-xl border-b border-white/20 md:hidden shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-purple-600 transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-purple-600 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left text-gray-700 hover:text-purple-600 transition-colors font-medium">Portfolio</button>
              <Button 
                onClick={() => scrollToSection('quote')} 
                className="w-fit bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white shadow-lg"
              >
                Get Quote
              </Button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-purple-600 transition-colors font-medium">About</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
