
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ZoomIn } from "lucide-react";

const ImageGallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/045b0929-8382-4d22-a52e-e50a94ee86ff.png",
      alt: "Sala de espera del Centro Médico Libertador con servicios especializados",
    },
    {
      id: 2,
      src: "/lovable-uploads/7ab62e26-ac53-4790-912b-4e7d81e7ea8c.png",
      alt: "Área de recepción moderna con televisión y aire acondicionado",
    },
    {
      id: 3,
      src: "/lovable-uploads/a2969afb-d447-4c06-acff-f7a5d48f68d0.png",
      alt: "Sala de espera cómoda con sillas especializadas para pacientes",
    },
    {
      id: 4,
      src: "/lovable-uploads/04487e9a-e57d-452a-a9ce-67da27214de0.png",
      alt: "Cartel exterior de EMA SALUD - Centro Médico Libertador",
    },
    {
      id: 5,
      src: "/lovable-uploads/09fb3e19-47e5-4cf1-96f8-87f7689dfeb0.png",
      alt: "Fachada principal del Centro Médico Libertador",
    },
    {
      id: 6,
      src: "/lovable-uploads/9ba1f11d-d1b9-401b-bf13-d3812dd17ff0.png",
      alt: "Entrada lateral del Centro Médico Libertador",
    }
  ];

  return (
    <section id="galeria" className="py-16 md:py-20 bg-gradient-to-br from-ema-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ema-blue-900 mb-4 md:mb-6">
            Nuestra Galería
          </h2>
          <p className="text-lg md:text-xl text-ema-blue-700 max-w-4xl mx-auto leading-relaxed px-4">
            Conocé nuestras instalaciones del Centro Médico Libertador. Cada imagen 
            refleja nuestro compromiso con la excelencia médica y tu bienestar.
          </p>
        </div>

        {/* Grid Gallery */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image) => (
              <Card key={image.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-md bg-white">
                <CardContent className="p-0 relative">
                  <AspectRatio ratio={4/3}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ema-blue-900/90 via-ema-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                        <p className="text-white font-medium text-xs sm:text-sm leading-tight">
                          {image.alt}
                        </p>
                      </div>
                    </div>

                    {/* Zoom Icon */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button 
                          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                          aria-label={`Ver imagen completa: ${image.alt}`}
                        >
                          <ZoomIn className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 border-0 bg-black/95 overflow-hidden">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="max-w-full max-h-full object-contain"
                            loading="lazy"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6">
                            <p className="text-white text-base sm:text-lg font-medium text-center">
                              {image.alt}
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </AspectRatio>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-ema-blue-900 mb-3 sm:mb-4">
              ¿Te gustaría conocer más?
            </h3>
            <p className="text-ema-blue-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Visitanos en el Centro Médico Libertador y descubrí personalmente 
              nuestras instalaciones y servicios. Estamos aquí para cuidarte.
            </p>
            <button className="bg-ema-blue-600 hover:bg-ema-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-ema-blue-500 focus:ring-offset-2">
              Agendar Visita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
