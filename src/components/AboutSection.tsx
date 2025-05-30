import { Home, Users, Stethoscope } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-white to-ema-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <Home className="h-16 w-16 text-ema-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-ema-blue-900 mb-6">
              NOSOTROS
            </h2>
            <div className="w-24 h-1 bg-ema-blue-600 mx-auto"></div>
          </div>
          
          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div className="text-lg md:text-xl text-ema-blue-800 leading-relaxed space-y-6">
                <p>
                  Somos la empresa que tiene los medios y el compromiso en cuidarte, 
                  a vos y tu familia. Ponemos el acento en el afecto, el bienestar, 
                  la salud, y en disfrutar cada instante.
                </p>
                
                <p>
                  Pero por sobre todas las cosas estamos ahí cuando nos necesitas, 
                  para darte respuestas ágiles con la mejor calidad de atención y 
                  un servicio prestacional de excelencia.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-ema-blue-600 mb-2">15+</div>
                  <div className="text-ema-blue-700 font-medium">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-ema-blue-600 mb-2">100%</div>
                  <div className="text-ema-blue-700 font-medium">Compromiso</div>
                </div>
              </div>
            </div>
            
            {/* Visual Elements */}
            <div className="relative animate-fade-in-right">
              <div className="bg-gradient-to-br from-ema-blue-100 to-ema-blue-200 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-8 space-y-6 transform -rotate-3">
                  <div className="flex items-center space-x-4">
                    <Users className="h-8 w-8 text-ema-blue-600" />
                    <span className="text-ema-blue-800 font-semibold text-lg">Familia Primero</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Stethoscope className="h-8 w-8 text-ema-blue-600" />
                    <span className="text-ema-blue-800 font-semibold text-lg">Atención Integral</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Home className="h-8 w-8 text-ema-blue-600" />
                    <span className="text-ema-blue-800 font-semibold text-lg">Cercanía y Confianza</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-ema-blue-300 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-ema-blue-400 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
