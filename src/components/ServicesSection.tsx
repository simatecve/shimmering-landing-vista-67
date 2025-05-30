
import { Users, UserCheck, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: UserCheck,
      title: "EMPLEADOS MONOTRIBUTISTA",
      description: "Servicios especializados para empleados bajo régimen monotributista con atención personalizada y cobertura integral."
    },
    {
      icon: Users,
      title: "MONOTRIBUTISTA SOCIALES",
      description: "Cobertura social completa para monotributistas, garantizando acceso a servicios de salud de calidad."
    },
    {
      icon: Home,
      title: "PERSONAL DE SERVICIO DOMÉSTICO",
      description: "Atención especializada para personal de servicio doméstico con planes adaptados a sus necesidades específicas."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-ema-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-ema-blue-900 mb-6">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-ema-blue-700 max-w-3xl mx-auto">
              Ofrecemos servicios de salud especializados para diferentes tipos de empleados, 
              garantizando la mejor atención y cobertura para cada necesidad.
            </p>
            <div className="w-24 h-1 bg-ema-blue-600 mx-auto mt-6"></div>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:bg-gradient-to-br hover:from-ema-blue-50 hover:to-white animate-fade-in transform hover:-translate-y-2"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-ema-blue-100 to-ema-blue-200 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-10 w-10 text-ema-blue-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-ema-blue-900 mb-4 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-ema-blue-700 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-ema-blue-100">
                    <button className="text-ema-blue-600 font-semibold hover:text-ema-blue-800 transition-colors duration-300 group-hover:underline">
                      Conocer más →
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-r from-ema-blue-800 to-ema-blue-700 rounded-3xl p-8 md:p-12 text-center animate-scale-in">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Necesitas más información?
            </h3>
            <p className="text-ema-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Contactanos y te brindaremos toda la información 
              que necesites sobre nuestros servicios.
            </p>
            <button className="bg-white text-ema-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-ema-blue-50 transition-all duration-300 transform hover:scale-105">
              Contactar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
