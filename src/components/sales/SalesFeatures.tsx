
import React from 'react';
import { Calendar, FileText, Users, TrendingUp, Shield, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const SalesFeatures = () => {
  const features = [
    {
      icon: Calendar,
      title: "Gestão de Agenda",
      description: "Sistema avançado de agendamento com confirmações automáticas, lembretes personalizados e controle de disponibilidade em tempo real.",
      benefits: ["Redução de 85% em faltas", "Confirmação automática via SMS/WhatsApp", "Integração com calendários externos"]
    },
    {
      icon: FileText,
      title: "Prontuário Eletrônico",
      description: "Prontuário digital certificado com histórico completo, templates personalizáveis e conformidade total com regulamentações médicas.",
      benefits: ["Certificação CFM", "Assinatura digital", "Backup automático em nuvem"]
    },
    {
      icon: Users,
      title: "Gestão de Pacientes",
      description: "Cadastro completo com histórico detalhado, documentos digitalizados e comunicação integrada para melhor relacionamento.",
      benefits: ["Ficha completa do paciente", "Histórico familiar", "Portal do paciente"]
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Dashboard executivo com indicadores de performance, análise de faturamento e insights estratégicos para crescimento.",
      benefits: ["KPIs em tempo real", "Relatórios personalizados", "Análise preditiva"]
    },
    {
      icon: Shield,
      title: "Segurança e Compliance",
      description: "Infraestrutura com certificação ISO 27001, criptografia militar e conformidade total com LGPD e regulamentações médicas.",
      benefits: ["Certificação ISO 27001", "Criptografia AES-256", "Auditoria completa"]
    },
    {
      icon: Heart,
      title: "Prescrição Digital",
      description: "Sistema completo para prescrições eletrônicas com biblioteca de medicamentos, interações medicamentosas e receituário digital.",
      benefits: ["Certificação digital ICP-Brasil", "Base de medicamentos atualizada", "Controle de receituário"]
    }
  ];

  return (
    <div className="container mx-auto max-w-7xl px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          Recursos Profissionais
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Funcionalidades desenvolvidas especificamente para otimizar a gestão médica e aumentar a produtividade clínica
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="group relative overflow-hidden border border-slate-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg bg-white"
          >
            <CardHeader className="pb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <feature.icon className="h-7 w-7 text-blue-600 group-hover:text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                {feature.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <CardDescription className="text-slate-600 text-base leading-relaxed">
                {feature.description}
              </CardDescription>
              
              <div className="space-y-3">
                {feature.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Professional CTA */}
      <div className="text-center mt-20">
        <div className="bg-slate-50 rounded-lg p-10 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Transforme sua Gestão Médica
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
            Junte-se a mais de 5.000 profissionais que já otimizaram seus processos clínicos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-sm">
              Iniciar Teste Gratuito
            </button>
            <button className="border border-slate-300 text-slate-700 hover:bg-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
