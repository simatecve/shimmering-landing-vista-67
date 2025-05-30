
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ZoomIn } from "lucide-react";

const ImageGallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      alt: "Doctor consultando con paciente en consultorio médico",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop",
      alt: "Sala de espera moderna de clínica médica",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      alt: "Médico revisando paciente con estetoscopio",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      alt: "Recepción de clínica con personal atendiendo",
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-ema-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ema-blue-900 mb-6">
            Nuestra Galería
          </h2>
          <p className="text-xl text-ema-blue-700 max-w-3xl mx-auto leading-relaxed">
            Conocé nuestras instalaciones, equipo profesional y el ambiente cálido 
            que caracteriza a EMA SALUD. Cada imagen refleja nuestro compromiso 
            con tu bienestar.
          </p>
        </div>

        {/* Gallery Grid - 4 images in horizontal layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <Card 
              key={image.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-md"
            >
              <CardContent className="p-0 relative">
                <AspectRatio ratio={4/3}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ema-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium text-sm">{image.alt}</p>
                    </div>
                  </div>

                  {/* Zoom Icon */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                        <ZoomIn className="h-5 w-5" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full p-0 border-0 bg-black/90">
                      <div className="relative">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto max-h-[85vh] object-contain mx-auto"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                          <p className="text-white text-lg font-medium">{image.alt}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </AspectRatio>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-ema-blue-900 mb-4">
              ¿Te gustaría conocer más?
            </h3>
            <p className="text-ema-blue-700 mb-6">
              Visitanos y descubrí personalmente nuestras instalaciones y servicios. 
              Estamos aquí para cuidarte.
            </p>
            <button className="bg-ema-blue-600 hover:bg-ema-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Agendar Visita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
