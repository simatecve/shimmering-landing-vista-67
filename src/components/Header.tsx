
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/969aed98-6687-442f-8183-ae236f43690a.png" 
              alt="EMA SALUD Logo" 
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-ema-blue-900">EMA SALUD</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-ema-blue-800 hover:text-ema-blue-600 font-medium transition-colors duration-300">
              Inicio
            </a>
            <a href="#nosotros" className="text-ema-blue-800 hover:text-ema-blue-600 font-medium transition-colors duration-300">
              Nosotros
            </a>
            <a href="#servicios" className="text-ema-blue-800 hover:text-ema-blue-600 font-medium transition-colors duration-300">
              Servicios
            </a>
            <a href="#contacto" className="text-ema-blue-800 hover:text-ema-blue-600 font-medium transition-colors duration-300">
              Contacto
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-ema-blue-600 hover:bg-ema-blue-700 text-white">
              Contactar Ahora
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-ema-blue-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-ema-blue-800 hover:text-ema-blue-600 font-medium transition-colors duration-300">
                Inicio
              </a>
              <a href="#nosotros" className="text-ema-blue-800 hover:text-ema-blue-600 font-medium transition-colors duration-300">
                Nosotros
              </a>
              <a href="#servicios" className="text-ema-blue-800 hover:text-ema-blue-600 font-medium transition-colors duration-300">
                Servicios
              </a>
              <a href="#contacto" className="text-ema-blue-800 hover:text-ema-blue-600 font-medium transition-colors duration-300">
                Contacto
              </a>
              <Button className="bg-ema-blue-600 hover:bg-ema-blue-700 text-white w-full mt-4">
                Contactar Ahora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
