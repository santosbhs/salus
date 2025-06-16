
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export const SalesTestimonials = () => {
  const testimonials = [
    {
      name: "Dr. Rafael Monteiro",
      specialty: "Cardiologista",
      rating: 5,
      comment: "Depois de 15 anos organizando minha agenda no papel, o Salus foi uma revolução. Agora tenho mais tempo para focar no que realmente importa: cuidar dos meus pacientes. A integração com WhatsApp facilitou muito a comunicação.",
      initials: "RM",
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dra. Fernanda Silva",
      specialty: "Pediatra",
      rating: 5,
      comment: "Como mãe de dois filhos e pediatra, preciso de organização máxima. O Salus me deu isso. Os relatórios me ajudam a acompanhar o crescimento das crianças e os pais adoram receber lembretes automáticos das consultas.",
      initials: "FS",
      photo: "https://images.unsplash.com/photo-1594824694996-8c184e7893a7?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Carlos Eduardo",
      specialty: "Ortopedista",
      rating: 5,
      comment: "Trabalho em duas clínicas e o Salus sincroniza tudo perfeitamente. Não perco mais consultas por conflito de agenda. O prontuário eletrônico com anamnese SOAP economiza pelo menos 20 minutos por paciente.",
      initials: "CE",
      photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dra. Patricia Oliveira",
      specialty: "Dermatologista",
      rating: 5,
      comment: "O que mais me impressionou foi a facilidade de uso. Em 2 dias já estava dominando o sistema. Meus pacientes elogiam a praticidade do agendamento online e eu amo os relatórios financeiros detalhados.",
      initials: "PO",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Anderson Santos",
      specialty: "Clínico Geral",
      rating: 5,
      comment: "Migrei de outro sistema para o Salus e foi a melhor decisão. O suporte é excepcional - sempre respondem rapidamente. O sistema de triagem me ajuda a priorizar casos mais urgentes. Recomendo de olhos fechados!",
      initials: "AS",
      photo: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem sobre o Salus
          </h2>
          <p className="text-xl text-gray-600">
            Histórias reais de médicos que transformaram suas clínicas
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gradient-to-r from-green-700 to-emerald-700 text-white font-semibold text-lg">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg text-gray-900">{testimonial.name}</CardTitle>
                    <CardDescription className="text-gray-600">{testimonial.specialty}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Junte-se a mais de <span className="font-bold text-green-600">2.500+ médicos</span> que já confiam no Salus
          </p>
        </div>
      </div>
    </section>
  );
};
