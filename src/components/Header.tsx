
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onAdminClick: () => void;
}

const Header = ({ onAdminClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">SA</span>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              SA Builders
            </h1>
            <p className="text-xs text-gray-600">Since 2017</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollToSection('quote')}
            className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
          >
            Get Quote
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
          >
            About
          </button>
          <Button 
            onClick={onAdminClick}
            variant="outline" 
            size="sm"
            className="border-orange-200 text-orange-600 hover:bg-orange-50"
          >
            Admin
          </Button>
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
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 md:hidden">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium">Portfolio</button>
              <button onClick={() => scrollToSection('quote')} className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium">Get Quote</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium">About</button>
              <Button onClick={onAdminClick} variant="outline" size="sm" className="w-fit border-orange-200 text-orange-600 hover:bg-orange-50">Admin</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
