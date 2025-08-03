
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-white to-ema-blue-50">
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
                  <a 
                    href="mailto:gerencia@ema-salud.com.ar"
                    className="block text-lg text-ema-blue-700 hover:text-ema-blue-600 transition-colors duration-300 font-medium"
                  >
                    gerencia@ema-salud.com.ar
                  </a>
                  <a 
                    href="mailto:facturacion@ema-salud.com.ar"
                    className="block text-lg text-ema-blue-700 hover:text-ema-blue-600 transition-colors duration-300 font-medium"
                  >
                    facturacion@ema-salud.com.ar
                  </a>
                  <a 
                    href="mailto:direccion@ema-salud.com.ar"
                    className="block text-lg text-ema-blue-700 hover:text-ema-blue-600 transition-colors duration-300 font-medium"
                  >
                    direccion@ema-salud.com.ar
                  </a>
                  <a 
                    href="mailto:uaguero@ema-salud.com.ar"
                    className="block text-lg text-ema-blue-700 hover:text-ema-blue-600 transition-colors duration-300 font-medium"
                  >
                    uaguero@ema-salud.com.ar
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
                
                <a 
                  href="https://maps.app.goo.gl/CwaCApdktrej8p756?g_st=ipc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg text-ema-blue-700 hover:text-ema-blue-600 transition-colors duration-300 font-medium underline"
                >
                  Libertador 457 ESTE
                </a>
              </CardContent>
            </Card>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
