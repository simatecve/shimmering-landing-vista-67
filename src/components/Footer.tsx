
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ema-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Company Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/969aed98-6687-442f-8183-ae236f43690a.png" 
                  alt="EMA SALUD Logo" 
                  className="w-12 h-12"
                />
                <span className="text-2xl font-bold">EMA SALUD</span>
              </div>
              
              <p className="text-ema-blue-100 leading-relaxed max-w-md">
                Somos la empresa que tiene los medios y el compromiso en cuidarte, 
                a vos y tu familia. Tu salud es nuestra prioridad.
              </p>
              
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-ema-blue-700 rounded-full flex items-center justify-center hover:bg-ema-blue-600 transition-colors duration-300 cursor-pointer">
                  <Heart className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-ema-blue-700 rounded-full flex items-center justify-center hover:bg-ema-blue-600 transition-colors duration-300 cursor-pointer">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-ema-blue-700 rounded-full flex items-center justify-center hover:bg-ema-blue-600 transition-colors duration-300 cursor-pointer">
                  <Mail className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-ema-blue-300 mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <a href="mailto:info@ema-salud.com.ar" className="text-ema-blue-100 hover:text-white transition-colors duration-300 block">
                      info@ema-salud.com.ar
                    </a>
                    <a href="mailto:contacto@ema-salud.com.ar" className="text-ema-blue-100 hover:text-white transition-colors duration-300 block">
                      contacto@ema-salud.com.ar
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-ema-blue-300 mt-1 flex-shrink-0" />
                  <span className="text-ema-blue-100">Libertador 457 ESTE</span>
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Servicios</h3>
              
              <div className="space-y-2">
                <p className="text-ema-blue-100 hover:text-white transition-colors duration-300 cursor-pointer">
                  Empleados Monotributista
                </p>
                <p className="text-ema-blue-100 hover:text-white transition-colors duration-300 cursor-pointer">
                  Monotributista Sociales
                </p>
                <p className="text-ema-blue-100 hover:text-white transition-colors duration-300 cursor-pointer">
                  Personal de Servicio Doméstico
                </p>
                <p className="text-ema-blue-100 hover:text-white transition-colors duration-300 cursor-pointer">
                  Afiliaciones
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-ema-blue-700 mt-12 pt-8 text-center">
            <p className="text-ema-blue-200">
              © 2024 EMA SALUD. Todos los derechos reservados. | 
              <span className="ml-2">Tu salud es nuestra prioridad</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
