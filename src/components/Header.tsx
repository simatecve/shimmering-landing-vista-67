
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Menu, X, Mail, Users, LogIn } from "lucide-react";
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
              src="/lovable-uploads/2ac461d3-26d6-45b2-864a-00c01331fd5f.png" 
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
            <a href="#galeria" className="text-ema-blue-800 hover:text-ema-blue-600 font-medium transition-colors duration-300">
              Galería
            </a>
            <a href="#contacto" className="text-ema-blue-800 hover:text-ema-blue-600 font-medium transition-colors duration-300">
              Contacto
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-ema-blue-600 hover:bg-ema-blue-700 text-white">
                  Acceso al Sistema
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-ema-blue-900 text-center mb-6">
                    Portal de Acceso EMA SALUD
                  </DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
                  {/* Emails Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <Mail className="h-5 w-5 text-ema-blue-600" />
                      <h3 className="text-lg font-semibold text-ema-blue-900">EMails:</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="p-3 bg-ema-blue-50 rounded-lg border border-ema-blue-200">
                        <p className="text-sm text-ema-blue-800">info@ema-salud.com.ar</p>
                      </div>
                      <div className="p-3 bg-ema-blue-50 rounded-lg border border-ema-blue-200">
                        <p className="text-sm text-ema-blue-800">contacto@ema-salud.com.ar</p>
                      </div>
                      <div className="p-3 bg-ema-blue-50 rounded-lg border border-ema-blue-200">
                        <p className="text-sm text-ema-blue-800">gerencia@ema-salud.com.ar</p>
                      </div>
                      <div className="p-3 bg-ema-blue-50 rounded-lg border border-ema-blue-200">
                        <p className="text-sm text-ema-blue-800">facturacion@ema-salud.com.ar</p>
                      </div>
                      <div className="p-3 bg-ema-blue-50 rounded-lg border border-ema-blue-200">
                        <p className="text-sm text-ema-blue-800">direccion@ema-salud.com.ar</p>
                      </div>
                    </div>
                  </div>

                  {/* Acceso Aliados Column */}
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <Users className="h-12 w-12 text-ema-blue-600" />
                    <h3 className="text-lg font-semibold text-ema-blue-900 text-center">Acceso Aliados</h3>
                    <a
                      href="https://dash.ema-salud.com.ar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full bg-ema-blue-600 hover:bg-ema-blue-700 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                        Acceso Aliados
                      </Button>
                    </a>
                  </div>

                  {/* Acceso al Sistema Column */}
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <LogIn className="h-12 w-12 text-ema-blue-600" />
                    <h3 className="text-lg font-semibold text-ema-blue-900 text-center">Sistema Principal</h3>
                    <a
                      href="https://dash.ema-salud.com.ar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full bg-ema-blue-600 hover:bg-ema-blue-700 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                        Acceso al Sistema
                      </Button>
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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
              <a href="#galeria" className="text-ema-blue-800 hover:text-ema-blue-600 font-medium transition-colors duration-300">
                Galería
              </a>
              <a href="#contacto" className="text-ema-blue-800 hover:text-ema-blue-600 font-medium transition-colors duration-300">
                Contacto
              </a>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-ema-blue-600 hover:bg-ema-blue-700 text-white w-full mt-4">
                    Acceso al Sistema
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-ema-blue-900 text-center mb-6">
                      Portal de Acceso EMA SALUD
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
                    {/* Emails Column */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <Mail className="h-5 w-5 text-ema-blue-600" />
                        <h3 className="text-lg font-semibold text-ema-blue-900">EMails:</h3>
                      </div>
                      <div className="space-y-2">
                        <div className="p-3 bg-ema-blue-50 rounded-lg border border-ema-blue-200">
                          <p className="text-sm text-ema-blue-800">info@ema-salud.com.ar</p>
                        </div>
                        <div className="p-3 bg-ema-blue-50 rounded-lg border border-ema-blue-200">
                          <p className="text-sm text-ema-blue-800">contacto@ema-salud.com.ar</p>
                        </div>
                        <div className="p-3 bg-ema-blue-50 rounded-lg border border-ema-blue-200">
                          <p className="text-sm text-ema-blue-800">gerencia@ema-salud.com.ar</p>
                        </div>
                        <div className="p-3 bg-ema-blue-50 rounded-lg border border-ema-blue-200">
                          <p className="text-sm text-ema-blue-800">facturacion@ema-salud.com.ar</p>
                        </div>
                        <div className="p-3 bg-ema-blue-50 rounded-lg border border-ema-blue-200">
                          <p className="text-sm text-ema-blue-800">direccion@ema-salud.com.ar</p>
                        </div>
                      </div>
                    </div>

                    {/* Acceso Aliados Column */}
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <Users className="h-12 w-12 text-ema-blue-600" />
                      <h3 className="text-lg font-semibold text-ema-blue-900 text-center">Acceso Aliados</h3>
                      <a
                        href="https://dash.ema-salud.com.ar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className="w-full bg-ema-blue-600 hover:bg-ema-blue-700 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                          Acceso Aliados
                        </Button>
                      </a>
                    </div>

                    {/* Acceso al Sistema Column */}
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <LogIn className="h-12 w-12 text-ema-blue-600" />
                      <h3 className="text-lg font-semibold text-ema-blue-900 text-center">Sistema Principal</h3>
                      <a
                        href="https://dash.ema-salud.com.ar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className="w-full bg-ema-blue-600 hover:bg-ema-blue-700 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                          Acceso al Sistema
                        </Button>
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
