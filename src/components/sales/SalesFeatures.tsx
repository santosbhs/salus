
import React from 'react';
import { Calendar, FileText, Users, TrendingUp, Shield, Heart, Clock, Award, Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const SalesFeatures = () => {
  const features = [
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description: "Sistema avançado que elimina conflitos de horário e reduz faltas em 85%. Confirmações automáticas via SMS e WhatsApp.",
      benefits: ["Agenda sincronizada em tempo real", "Lembretes automáticos", "Reagendamento online"],
      highlight: "Reduz faltas em 85%"
    },
    {
      icon: FileText,
      title: "Prontuário Eletrônico Certificado",
      description: "Prontuário digital com certificação CFM, templates personalizáveis e backup automático na nuvem.",
      benefits: ["Certificação CFM oficial", "Assinatura digital válida", "Acesso de qualquer lugar"],
      highlight: "Certificado CFM"
    },
    {
      icon: Users,
      title: "Gestão Completa de Pacientes",
      description: "Ficha completa com histórico familiar, documentos digitais e portal exclusivo para pacientes.",
      benefits: ["Portal do paciente", "Histórico completo", "Documentos digitalizados"],
      highlight: "Portal exclusivo"
    },
    {
      icon: TrendingUp,
      title: "Relatórios que Fazem a Diferença",
      description: "Dashboard executivo com KPIs em tempo real, análise de faturamento e insights para crescimento.",
      benefits: ["Métricas em tempo real", "Análise de lucratividade", "Relatórios personalizados"],
      highlight: "Insights estratégicos"
    },
    {
      icon: Shield,
      title: "Segurança Máxima",
      description: "Infraestrutura com certificação ISO 27001, criptografia militar e conformidade total com LGPD.",
      benefits: ["Certificação ISO 27001", "Criptografia AES-256", "Backup automático"],
      highlight: "Máxima segurança"
    },
    {
      icon: Heart,
      title: "Prescrição Digital Válida",
      description: "Receituário eletrônico com certificação ICP-Brasil, base de medicamentos atualizada e controle de interações.",
      benefits: ["Válida em todo Brasil", "Base de medicamentos", "Controle de interações"],
      highlight: "ICP-Brasil"
    }
  ];

  return (
    <div className="bg-slate-50 py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mb-8">
            Recursos que Transformam sua Prática
          </h2>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Cada funcionalidade foi desenvolvida para resolver problemas reais do dia a dia médico
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-2 border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl bg-white transform hover:-translate-y-2"
            >
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="bg-gradient-to-r from-green-100 to-blue-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                    {feature.highlight}
                  </span>
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <CardDescription className="text-slate-600 text-lg leading-relaxed">
                  {feature.description}
                </CardDescription>
                
                <div className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-4xl font-bold mb-6">
              Pronto para Transformar sua Clínica?
            </h3>
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
              Junte-se a mais de 5.000 profissionais que já revolucionaram sua gestão médica
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all duration-300 shadow-lg transform hover:scale-105">
                Começar Teste Grátis
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-xl font-bold text-xl transition-all duration-300">
                Falar com Especialista
              </button>
            </div>
            
            <div className="flex justify-center items-center space-x-8 mt-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>30 dias grátis</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>Setup em 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>100% seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
