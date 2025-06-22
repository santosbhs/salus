
import React from 'react';
import { Calendar, FileText, Users, TrendingUp, Shield, Heart, Clock, Award, Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const SalesFeatures = () => {
  const features = [
    {
      icon: Calendar,
      title: "Chega de Agenda Bagunçada",
      description: "Elimine conflitos de horário para sempre. Sistema inteligente que reduz faltas em 85% com lembretes automáticos no WhatsApp.",
      benefits: ["Agenda sincronizada em tempo real", "Lembretes automáticos via WhatsApp", "Reagendamento online pelos pacientes"],
      highlight: "85% menos faltas",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Prontuário que o CFM Aprova",
      description: "Pare de se preocupar com fiscalização. Prontuário digital com certificação CFM oficial e assinatura digital válida.",
      benefits: ["Certificação CFM oficial", "Assinatura digital válida", "Backup automático na nuvem"],
      highlight: "CFM Certificado",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Pacientes Mais Satisfeitos",
      description: "Ofereça experiência premium com portal exclusivo, histórico completo e atendimento mais ágil.",
      benefits: ["Portal do paciente exclusivo", "Histórico médico completo", "Documentos sempre organizados"],
      highlight: "Experiência premium",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Descubra Como Ganhar Mais",
      description: "Relatórios que mostram exatamente onde sua clínica pode crescer. Insights estratégicos para aumentar o faturamento.",
      benefits: ["Análise de lucratividade por procedimento", "Métricas de performance em tempo real", "Insights para crescimento"],
      highlight: "Aumente o faturamento",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Durma Tranquilo com a Segurança",
      description: "Seus dados protegidos com a mesma segurança dos bancos. Certificação ISO 27001 e conformidade total com LGPD.",
      benefits: ["Certificação ISO 27001", "Criptografia de nível bancário", "Conformidade LGPD total"],
      highlight: "Segurança bancária",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Heart,
      title: "Receitas Válidas em Todo Brasil",
      description: "Prescrições digitais com certificação ICP-Brasil. Seus pacientes podem usar em qualquer farmácia do país.",
      benefits: ["Válida em todas as farmácias", "Base completa de medicamentos", "Alertas de interações medicamentosas"],
      highlight: "ICP-Brasil válido",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-bold text-slate-900 mb-10">
            Pare de Sofrer com Problemas que o Salus Resolve
          </h2>
          <p className="text-3xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Cada funcionalidade foi criada para eliminar uma dor de cabeça do seu dia a dia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-2xl bg-white transition-all duration-500 hover:shadow-3xl transform hover:-translate-y-4"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`}></div>
              
              <CardHeader className="pb-8 pt-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-green-100 to-blue-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold shadow-sm">
                    {feature.highlight}
                  </span>
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-8 pb-8">
                <CardDescription className="text-slate-600 text-lg leading-relaxed font-medium">
                  {feature.description}
                </CardDescription>
                
                <div className="space-y-4">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-4 text-slate-700">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span className="font-semibold">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Social Proof Section */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-slate-100 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-slate-900 mb-6">
              Por que mais de 5.000 médicos confiam no Salus?
            </h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">5.000+</div>
              <p className="text-slate-700 font-semibold text-lg">Médicos Ativos</p>
              <p className="text-slate-500 text-sm mt-1">Em todo o Brasil</p>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-green-600 mb-3 group-hover:scale-110 transition-transform duration-300">500k+</div>
              <p className="text-slate-700 font-semibold text-lg">Pacientes Atendidos</p>
              <p className="text-slate-500 text-sm mt-1">Mensalmente</p>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-purple-600 mb-3 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <p className="text-slate-700 font-semibold text-lg">Disponibilidade</p>
              <p className="text-slate-500 text-sm mt-1">Sistema sempre online</p>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-orange-600 mb-3 group-hover:scale-110 transition-transform duration-300">4.9/5</div>
              <p className="text-slate-700 font-semibold text-lg">Satisfação</p>
              <p className="text-slate-500 text-sm mt-1">Avaliação dos usuários</p>
            </div>
          </div>
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-3xl p-16 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-5xl font-bold mb-8">
              Sua Clínica Merece o Melhor Sistema do Brasil
            </h3>
            <p className="text-2xl mb-12 max-w-4xl mx-auto opacity-90 font-medium">
              Junte-se a milhares de profissionais que já eliminaram o caos da gestão médica
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link to="/subscription">
                <button className="bg-white text-blue-600 px-16 py-6 rounded-2xl font-bold text-2xl hover:bg-blue-50 transition-all duration-300 shadow-2xl transform hover:scale-105">
                  Transformar Minha Clínica Agora
                </button>
              </Link>
              <button className="border-3 border-white text-white hover:bg-white hover:text-blue-600 px-16 py-6 rounded-2xl font-bold text-2xl transition-all duration-300">
                Falar com Especialista
              </button>
            </div>
            
            <div className="flex justify-center items-center space-x-12 mt-12 text-blue-100">
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6" />
                <span className="font-semibold">30 dias grátis</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="h-6 w-6" />
                <span className="font-semibold">Funcionando em 24h</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6" />
                <span className="font-semibold">100% seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
