
import { Button } from "@/components/ui/button";
import { ArrowDown, Heart, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-ema-blue-900 via-ema-blue-800 to-ema-blue-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ema-blue-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          {/* Logo */}
          <div className="mb-8 animate-scale-in">
            <img 
              src="/lovable-uploads/2ac461d3-26d6-45b2-864a-00c01331fd5f.png" 
              alt="EMA SALUD Logo" 
              className="w-48 h-48 md:w-64 md:h-64 mx-auto animate-float"
            />
          </div>
          
          {/* Hero Text */}
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Tu Salud es Nuestra
              <span className="block bg-gradient-to-r from-white to-ema-blue-200 bg-clip-text text-transparent">
                Prioridad
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-ema-blue-100 leading-relaxed max-w-3xl mx-auto">
              Somos la empresa que tiene los medios y el compromiso en cuidarte, 
              a vos y tu familia. Ponemos el acento en el afecto, el bienestar, 
              la salud, y en disfrutar cada instante.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-in-right">
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
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
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
                <ArrowDown className="h-8 w-8 text-white" />
              </div>
              <p className="text-ema-blue-100 font-medium">Respuesta Ágil</p>
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
