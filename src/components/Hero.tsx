
import { Button } from "@/components/ui/button";
import { ArrowDown, Heart, Shield, Stethoscope } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-ema-blue-900 via-ema-blue-800 to-ema-blue-700 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ema-blue-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content Side */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Tu Salud es Nuestra
              <span className="block bg-gradient-to-r from-white to-ema-blue-200 bg-clip-text text-transparent">
                Prioridad
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-ema-blue-100 leading-relaxed">
              Somos la empresa que tiene los medios y el compromiso en cuidarte, 
              a vos y tu familia. Ponemos el acento en el afecto, el bienestar, 
              la salud, y en disfrutar cada instante.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-ema-blue-800 hover:bg-ema-blue-50 px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Heart className="mr-2 h-5 w-5" />
                Conocer Servicios
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-ema-blue-800 px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                <Shield className="mr-2 h-5 w-5" />
                Contactar Ahora
              </Button>
            </div>
            
            {/* Features Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-all duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <p className="text-ema-blue-100 font-medium">Atención Personalizada</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-all duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <p className="text-ema-blue-100 font-medium">Calidad Garantizada</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-all duration-300">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <p className="text-ema-blue-100 font-medium">Profesionales Expertos</p>
              </div>
            </div>
          </div>
          
          {/* Mockup Side */}
          <div className="relative animate-fade-in-right hidden lg:block">
            <div className="relative">
              {/* Medical Device Mockup */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="bg-white rounded-2xl p-6 shadow-2xl">
                  {/* Tablet/Device Interface */}
                  <div className="bg-gradient-to-br from-ema-blue-50 to-ema-blue-100 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-ema-blue-600 rounded-full flex items-center justify-center">
                          <Heart className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-semibold text-ema-blue-800">EMA SALUD</span>
                      </div>
                      <div className="text-sm text-ema-blue-600 font-medium">Online</div>
                    </div>
                    
                    {/* Vital Signs Display */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white rounded-lg p-3">
                        <div className="text-xs text-gray-500">Presión Arterial</div>
                        <div className="text-lg font-bold text-ema-blue-800">120/80</div>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="text-xs text-gray-500">Frecuencia Cardíaca</div>
                        <div className="text-lg font-bold text-ema-blue-800">72 bpm</div>
                      </div>
                    </div>
                    
                    {/* Chart Mockup */}
                    <div className="bg-white rounded-lg p-3">
                      <div className="h-16 bg-gradient-to-r from-ema-blue-200 to-ema-blue-300 rounded opacity-60"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-ema-blue-400/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-white/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
