
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const SalesTestimonials = () => {
  const testimonials = [
    {
      name: "Dr. Rafael Monteiro",
      specialty: "Cardiologista",
      rating: 5,
      comment: "O Salus revolucionou minha clínica. Reduzi o tempo administrativo em 70% e meus pacientes adoram o agendamento online.",
      initials: "RM"
    },
    {
      name: "Dra. Fernanda Almeida",
      specialty: "Pediatra",
      rating: 5,
      comment: "Segurança dos dados e facilidade de uso excepcionais. Recomendo para todos os colegas médicos.",
      initials: "FA"
    },
    {
      name: "Dr. Bruno Carvalho",
      specialty: "Ortopedista",
      rating: 5,
      comment: "Interface intuitiva e suporte técnico fantástico. Minha produtividade aumentou significativamente.",
      initials: "BC"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Histórias reais de sucesso com o Salus
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-700 to-emerald-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{testimonial.initials}</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.specialty}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
