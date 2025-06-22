
import React from 'react';
import { Check, ChevronRight, Calendar, FileText, MessageSquare, BarChart3, FileCheck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const SalesHero = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-white via-blue-50/30 to-slate-50/50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-green-100/40 to-emerald-200/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge variant="outline" className="w-fit bg-blue-50 border-blue-200 text-blue-700 px-4 py-2 text-sm font-medium">
              ✨ Plataforma #1 para Clínicas no Brasil
            </Badge>
            
            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent block">
                  Organize
                </span>
                <span className="text-slate-900 block">sua Clínica,</span>
                <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 bg-clip-text text-transparent block">
                  Ganhe Tempo
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                Tudo em uma única plataforma integrada. 
                <span className="text-slate-700 font-semibold"> Seus pacientes vão notar a diferença!</span>
              </p>
            </div>

            {/* Value proposition */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Elimine papelada, automatize agendamentos e tenha total controle da sua clínica com o SALUS.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Agenda online integrada",
                  "Prontuário eletrônico seguro", 
                  "Relatórios e controle financeiro",
                  "Suporte dedicado brasileiro"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/subscription">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-12 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Começar Teste Grátis
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-slate-700 border-slate-300 hover:bg-slate-50 px-8 py-4 rounded-xl text-lg font-semibold">
                Ver Demonstração
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-slate-600 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Ativação imediata</span>
              </div>
              <span>•</span>
              <span>Sem cartão de crédito</span>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-300/20 via-purple-300/20 to-green-300/20 rounded-3xl blur-2xl animate-pulse"></div>
              
              {/* Main image */}
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl border border-slate-200/50">
                <img 
                  src="/lovable-uploads/219bbfd9-3e57-4298-9273-871bf2bf1fe8.png" 
                  alt="Médica profissional usando laptop em consultório moderno" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-slate-100 animate-float">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg border border-slate-100 animate-float" style={{animationDelay: '1s'}}>
                <FileText className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature icons section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Funcionalidades completas para sua clínica
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Automatize processos, evite erros manuais e melhore a experiência do paciente
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {[
              { icon: Calendar, name: "Agenda Online", color: "from-blue-500 to-blue-600" },
              { icon: FileText, name: "Prontuário Digital", color: "from-green-500 to-green-600" },
              { icon: MessageSquare, name: "WhatsApp", color: "from-emerald-500 to-emerald-600" },
              { icon: BarChart3, name: "Relatórios", color: "from-purple-500 to-purple-600" },
              { icon: FileCheck, name: "Receitas", color: "from-orange-500 to-orange-600" },
              { icon: Shield, name: "Segurança", color: "from-indigo-500 to-indigo-600" }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">{feature.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
