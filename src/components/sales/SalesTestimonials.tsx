
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export const SalesTestimonials = () => {
  const testimonials = [
    {
      name: "Dr. Rafael Monteiro",
      specialty: "Cardiologista - Hospital Sírio-Libanês",
      location: "São Paulo, SP",
      rating: 5,
      comment: "Trabalho há 15 anos na área e nunca vi um sistema tão completo e fácil de usar. O Salus eliminou completamente os conflitos de agenda da minha clínica. Agora consigo atender 30% mais pacientes por dia sem estresse.",
      highlight: "30% mais pacientes",
      initials: "RM",
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dra. Fernanda Silva",
      specialty: "Pediatra - Clínica Infantil Crescer",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      comment: "Como mãe e pediatra, sei o valor do tempo. O Salus me devolveu 3 horas por dia que eu perdia com burocracia. Os pais adoram receber os lembretes automáticos e eu amo ter todos os dados organizados. Revolucionou minha prática!",
      highlight: "3h por dia economizadas",
      initials: "FS",
      photo: "https://images.unsplash.com/photo-1594824694996-8c184e7893a7?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Carlos Eduardo",
      specialty: "Ortopedista - Grupo Médico Movimento",
      location: "Brasília, DF",
      rating: 5,
      comment: "Administro 4 clínicas e o Salus sincroniza tudo perfeitamente. Acabaram os conflitos de agenda e as consultas perdidas. O relatório financeiro me mostrou onde eu estava perdendo dinheiro. Resultado: 40% de aumento no faturamento!",
      highlight: "40% mais faturamento",
      initials: "CE",
      photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dra. Patricia Oliveira",
      specialty: "Dermatologista - Estética Avançada",
      location: "Belo Horizonte, MG",
      rating: 5,
      comment: "Migrei de um sistema caríssimo para o Salus e economizo R$ 2.000 por mês. Além de mais barato, é infinitamente melhor. Meus pacientes elogiam o agendamento online e eu tenho controle total da agenda. Não troco mais!",
      highlight: "R$ 2.000 economizados/mês",
      initials: "PO",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Anderson Santos",
      specialty: "Clínico Geral - UBS Saúde Para Todos",
      location: "Salvador, BA",
      rating: 5,
      comment: "Uso o Salus em uma UBS com 12 médicos. O sistema suporta nossa demanda sem travamento e a triagem Manchester automatizada agilizou nossos atendimentos em 60%. O suporte técnico é nota 10 - sempre disponível quando precisamos.",
      highlight: "60% mais agilidade",
      initials: "AS",
      photo: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dra. Mariana Costa",
      specialty: "Ginecologista - Centro Médico Feminino",
      location: "Porto Alegre, RS",
      rating: 5,
      comment: "Sou ginecologista há 20 anos e sempre tive dificuldade com sistemas complexos. O Salus é diferente - intuitivo e poderoso. As pacientes adoram o portal exclusivo e eu tenho histórico completo na palma da mão. Transformou minha rotina!",
      highlight: "20 anos de experiência",
      initials: "MC",
      photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-32 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-gray-900 mb-8">
            Médicos Reais, Resultados Reais
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-medium">
            Veja como o Salus está transformando clínicas em todo o Brasil
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white transform hover:-translate-y-2">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4 mb-6">
                  <Avatar className="w-20 h-20 border-4 border-blue-100">
                    <AvatarImage 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold text-lg">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900 font-bold">{testimonial.name}</CardTitle>
                    <CardDescription className="text-gray-600 font-medium text-base">{testimonial.specialty}</CardDescription>
                    <p className="text-sm text-gray-500 mt-1">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                    {testimonial.highlight}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-12 text-center border-2 border-slate-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Números que Comprovam a Qualidade
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5.000+</div>
              <p className="text-gray-700 font-semibold">Médicos confiam no Salus</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
              <p className="text-gray-700 font-semibold">Nota de satisfação</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <p className="text-gray-700 font-semibold">Disponibilidade</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <p className="text-gray-700 font-semibold">Suporte especializado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
