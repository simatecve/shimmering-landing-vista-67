import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Heart, Eye, Brain, Baby, Activity } from "lucide-react";

const SpecialtiesSection = () => {
  const specialties = [
    "Anatomía Patológica",
    "Clínica Médica", 
    "Cirugía Pediátrica",
    "Cirugía General",
    "Cirugía Reparadora",
    "Dermatología",
    "Ecografía",
    "Endocrinología y Diabetes",
    "Flebología",
    "Fonoaudiología",
    "Gastroenterología",
    "Infectología",
    "Ginecología y Obstetricia",
    "Hematología",
    "Kinesiología",
    "Neurología",
    "Neumonología",
    "Oftalmología",
    "Oncología",
    "Otorrinolaringología",
    "Pediatría/Neonatología",
    "Psicología",
    "Análisis Clínicos",
    "Radiología",
    "Urología",
    "Traumatología y Ortopedia",
    "Odontología",
    "Cardiología"
  ];

  const icons = [Stethoscope, Heart, Eye, Brain, Baby, Activity];

  return (
    <section id="especialidades" className="py-20 bg-gradient-to-b from-ema-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <Stethoscope className="h-16 w-16 text-ema-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-ema-blue-900 mb-6">
              Especialidades
            </h2>
            <p className="text-xl text-ema-blue-700 max-w-3xl mx-auto">
              Contamos con un amplio equipo de profesionales especializados en diversas áreas médicas 
              para brindarte la mejor atención integral.
            </p>
            <div className="w-24 h-1 bg-ema-blue-600 mx-auto mt-6"></div>
          </div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <Card 
                  key={specialty} 
                  className="group hover:shadow-xl transition-all duration-500 border-0 bg-white hover:bg-gradient-to-br hover:from-ema-blue-50 hover:to-white animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-ema-blue-100 to-ema-blue-200 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-ema-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold text-ema-blue-900 leading-tight">
                      {specialty}
                    </h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;