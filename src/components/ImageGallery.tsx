
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { X, ZoomIn } from "lucide-react";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      alt: "Doctor consultando con paciente en consultorio médico",
      category: "Consultas"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop",
      alt: "Sala de espera moderna de clínica médica",
      category: "Instalaciones"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      alt: "Médico revisando paciente con estetoscopio",
      category: "Atención"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=800&h=600&fit=crop",
      alt: "Equipo médico colaborando en diagnóstico",
      category: "Equipo"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=600&fit=crop",
      alt: "Consultorio médico con equipamiento moderno",
      category: "Instalaciones"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
      alt: "Doctora explicando tratamiento a paciente",
      category: "Consultas"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      alt: "Recepción de clínica con personal atendiendo",
      category: "Servicios"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800&h=600&fit=crop",
      alt: "Médico utilizando tecnología médica avanzada",
      category: "Tecnología"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=600&fit=crop",
      alt: "Paciente sonriendo después de consulta exitosa",
      category: "Atención"
    }
  ];

  const categories = ["Todos", "Consultas", "Instalaciones", "Atención", "Equipo", "Servicios", "Tecnología"];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredImages = activeCategory === "Todos" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-ema-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-ema-blue-700 hover:bg-ema-blue-100 border border-ema-blue-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
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
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full mb-2">
                        {image.category}
                      </span>
                      <p className="text-white font-medium">{image.alt}</p>
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
                          <span className="inline-block px-3 py-1 bg-ema-blue-600 text-white text-sm rounded-full mb-2">
                            {image.category}
                          </span>
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
