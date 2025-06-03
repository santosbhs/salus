
import React from 'react';
import { Calendar, FileText, Users, TrendingUp, Shield, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const SalesFeatures = () => {
  const features = [
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description: "Sistema automatizado de agendamento com confirmação por SMS e WhatsApp",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "Prontuário Digital",
      description: "Histórico médico completo, prescrições digitais e laudos integrados",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Gestão de Pacientes",
      description: "Cadastro completo com foto, documentos e histórico de consultas",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Relatórios Gerenciais",
      description: "Dashboard completo com métricas de performance e faturamento",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Segurança LGPD",
      description: "Dados criptografados e conformidade total com a Lei Geral de Proteção de Dados",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Heart,
      title: "Gestão de Receitas",
      description: "Controle completo de prescrições e medicamentos",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full opacity-50 animate-gentle-pulse"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full opacity-30 animate-gentle-bounce"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-gentle-fade-in">
            Tudo que sua clínica precisa em um só lugar
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto animate-gentle-fade-in">
            Funcionalidades completas para revolucionar sua gestão médica
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border hover:border-green-200 transform hover:-translate-y-2 animate-gentle-fade-in">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-green-700 transition-colors duration-300">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-700 text-base leading-relaxed">
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
