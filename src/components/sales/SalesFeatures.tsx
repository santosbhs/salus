
import React from 'react';
import { Calendar, FileText, Users, TrendingUp, Shield, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const SalesFeatures = () => {
  const features = [
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description: "Sistema automatizado de agendamento com confirmação por SMS e WhatsApp. Reduza faltas e otimize sua agenda.",
      color: "from-blue-500 to-cyan-500",
      benefits: ["Reduz 80% das faltas", "Confirmação automática", "Reagendamento fácil"]
    },
    {
      icon: FileText,
      title: "Prontuário Digital Completo",
      description: "Histórico médico seguro, prescrições digitais e laudos integrados. Acesso rápido a todo histórico do paciente.",
      color: "from-purple-500 to-pink-500",
      benefits: ["Prescrições digitais", "Histórico completo", "Busca inteligente"]
    },
    {
      icon: Users,
      title: "Gestão Inteligente de Pacientes",
      description: "Cadastro completo com foto, documentos e histórico detalhado. Mantenha todos os dados organizados.",
      color: "from-orange-500 to-red-500",
      benefits: ["Cadastro completo", "Fotos e documentos", "Comunicação integrada"]
    },
    {
      icon: TrendingUp,
      title: "Relatórios e Analytics",
      description: "Dashboard completo com métricas de performance, faturamento e insights para crescer sua clínica.",
      color: "from-green-500 to-emerald-500",
      benefits: ["Métricas em tempo real", "Relatórios automáticos", "Insights de crescimento"]
    },
    {
      icon: Shield,
      title: "Segurança LGPD Garantida",
      description: "Dados criptografados e conformidade total com a Lei Geral de Proteção de Dados brasileira.",
      color: "from-indigo-500 to-purple-500",
      benefits: ["Criptografia avançada", "Compliance LGPD", "Backup automático"]
    },
    {
      icon: Heart,
      title: "Prescrições e Receitas",
      description: "Sistema completo para prescrições digitais, controle de medicamentos e impressão de receitas.",
      color: "from-pink-500 to-rose-500",
      benefits: ["Prescrições digitais", "Biblioteca de medicamentos", "Impressão profissional"]
    }
  ];

  return (
    <div className="container mx-auto max-w-7xl px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Funcionalidades que fazem a diferença
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Cada recurso foi pensado para otimizar sua rotina e melhorar o atendimento aos pacientes
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="group relative overflow-hidden border-2 border-slate-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-slate-50/0 group-hover:from-blue-50/50 group-hover:to-slate-50/30 transition-all duration-500"></div>
            
            <CardHeader className="text-center pb-4 relative z-10">
              <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-xl font-bold group-hover:text-blue-700 transition-colors duration-300">
                {feature.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="text-center space-y-6 relative z-10">
              <CardDescription className="text-slate-600 text-base leading-relaxed">
                {feature.description}
              </CardDescription>
              
              {/* Benefits list */}
              <div className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center justify-center space-x-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Pronto para transformar sua clínica?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Junte-se a milhares de profissionais que já otimizaram sua gestão médica
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300">
              Começar Teste Grátis
            </button>
            <button className="border border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-xl font-semibold transition-colors duration-300">
              Agendar Demonstração
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
