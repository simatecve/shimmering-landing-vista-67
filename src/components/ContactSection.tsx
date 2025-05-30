
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-ema-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <Phone className="h-16 w-16 text-ema-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-ema-blue-900 mb-6">
              Contacto
            </h2>
            <p className="text-xl text-ema-blue-700 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta 
              o información que necesites.
            </p>
            <div className="w-24 h-1 bg-ema-blue-600 mx-auto mt-6"></div>
          </div>
          
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Email Contact */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:bg-gradient-to-br hover:from-ema-blue-50 hover:to-white animate-fade-in-left">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-ema-blue-100 to-ema-blue-200 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-10 w-10 text-ema-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-ema-blue-900 mb-6">
                  MAIL DE CONTACTO:
                </h3>
                
                <div className="space-y-3">
                  <a 
                    href="mailto:info@ema-salud.com.ar"
                    className="block text-lg text-ema-blue-700 hover:text-ema-blue-600 transition-colors duration-300 font-medium"
                  >
                    info@ema-salud.com.ar
                  </a>
                  <a 
                    href="mailto:contacto@ema-salud.com.ar"
                    className="block text-lg text-ema-blue-700 hover:text-ema-blue-600 transition-colors duration-300 font-medium"
                  >
                    contacto@ema-salud.com.ar
                  </a>
                </div>
              </CardContent>
            </Card>
            
            {/* Address */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:bg-gradient-to-br hover:from-ema-blue-50 hover:to-white animate-fade-in-right">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-ema-blue-100 to-ema-blue-200 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-10 w-10 text-ema-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-ema-blue-900 mb-6">
                  DIRECCIÓN:
                </h3>
                
                <p className="text-lg text-ema-blue-700 font-medium">
                  Libertador 457 ESTE
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Affiliations Section */}
          <div className="bg-gradient-to-br from-ema-blue-800 to-ema-blue-900 rounded-3xl p-8 md:p-12 text-center animate-scale-in">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                <Phone className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AFILIADOS:
            </h3>
            
            <p className="text-ema-blue-100 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
              Si querés afiliarte ingresá en nuestra web recolecta la información necesaria 
              y podés enviarla a
            </p>
            
            <a 
              href="mailto:afiliaciones@ema-salud.com.ar"
              className="inline-block bg-white text-ema-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-ema-blue-50 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              afiliaciones@ema-salud.com.ar
            </a>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <h4 className="text-xl font-semibold text-white mb-4">Tipos de Empleados:</h4>
              <div className="grid md:grid-cols-3 gap-4 text-ema-blue-100">
                <div className="bg-white/5 rounded-lg p-4">
                  <span className="font-medium">EMPLEADOS MONOTRIBUTISTA</span>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <span className="font-medium">MONOTRIBUTISTA SOCIALES</span>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <span className="font-medium">PERSONAL DE SERVICIO DOMÉSTICO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
