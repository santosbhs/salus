
import React from 'react';
import { Calendar, FileText, Users, TrendingUp, Shield, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const SalesFeatures = () => {
  const features = [
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description: "Sistema automatizado de agendamento com confirmação por SMS e WhatsApp"
    },
    {
      icon: FileText,
      title: "Prontuário Digital",
      description: "Histórico médico completo, prescrições digitais e laudos integrados"
    },
    {
      icon: Users,
      title: "Gestão de Pacientes",
      description: "Cadastro completo com foto, documentos e histórico de consultas"
    },
    {
      icon: TrendingUp,
      title: "Relatórios Gerenciais",
      description: "Dashboard completo com métricas de performance e faturamento"
    },
    {
      icon: Shield,
      title: "Segurança LGPD",
      description: "Dados criptografados e conformidade total com a Lei Geral de Proteção de Dados"
    },
    {
      icon: Heart,
      title: "Telemedicina",
      description: "Consultas online integradas com prescrição digital"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tudo que sua clínica precisa em um só lugar
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Funcionalidades completas para revolucionar sua gestão médica
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border hover:border-green-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-green-700" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
