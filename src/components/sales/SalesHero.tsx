
import React from 'react';
import { Check, ChevronRight, Calendar, FileText, MessageSquare, BarChart3, FileCheck, Shield, Zap, Star, Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const SalesHero = () => {
  return (
    <section className="relative py-40 px-6 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 overflow-hidden">
      {/* Professional grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left content */}
          <div className="space-y-12 animate-fade-in">
            {/* Professional badge with social proof */}
            <Badge variant="outline" className="w-fit bg-gradient-to-r from-blue-50 to-green-50 border-blue-200 text-blue-700 px-8 py-4 text-lg font-semibold rounded-full shadow-sm">
              <Star className="w-5 h-5 mr-3 text-yellow-500 fill-current" />
              Mais de 5.000 médicos já transformaram suas clínicas
            </Badge>
            
            {/* Main headline - More emotional and benefit-focused */}
            <div className="space-y-10">
              <h1 className="text-7xl md:text-8xl font-black leading-tight tracking-tight">
                <span className="text-slate-900 block font-black">Chega de</span>
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent block font-black">
                  Confusão
                </span>
                <span className="text-slate-900 block font-light text-6xl md:text-7xl mt-4">
                  na sua clínica
                </span>
              </h1>
              
              <p className="text-3xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                Controle seus atendimentos, prontuários e agenda <span className="font-bold text-slate-900">num só lugar</span> – 
                fácil, rápido e online
              </p>
            </div>

            {/* Quick Benefits Section - More persuasive */}
            <div className="bg-white rounded-3xl p-10 border-2 border-slate-100 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Mais de 5.000 médicos já eliminaram:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: Clock, text: "Agenda bagunçada", subtext: "Sem conflitos de horário", color: "text-red-600" },
                  { icon: FileText, text: "Prontuários perdidos", subtext: "Tudo digitalizado e seguro", color: "text-blue-600" },
                  { icon: Users, text: "Pacientes insatisfeitos", subtext: "Lembretes automáticos", color: "text-green-600" },
                  { icon: BarChart3, text: "Falta de controle financeiro", subtext: "Relatórios em tempo real", color: "text-purple-600" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className={`w-12 h-12 ${benefit.color} bg-opacity-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                    </div>
                    <div>
                      <span className="text-slate-900 font-bold text-lg block">{benefit.text}</span>
                      <span className="text-slate-600 font-medium">{benefit.subtext}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA */}
            <div className="flex flex-col sm:flex-row gap-8 pt-8">
              <Link to="/subscription">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white text-2xl px-16 py-8 rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 font-bold transform hover:scale-105">
                  Transformar Minha Clínica Agora
                  <ChevronRight className="ml-4 h-8 w-8" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-slate-700 border-3 border-slate-300 hover:bg-slate-50 px-12 py-8 rounded-2xl text-2xl font-bold transition-all duration-300 hover:border-blue-400 hover:shadow-lg">
                Ver Como Funciona
              </Button>
            </div>
            
            {/* Trust indicators with more credibility */}
            <div className="flex items-center space-x-12 text-slate-600 pt-8">
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">Certificado LGPD</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-green-600" />
                <span className="font-semibold">Funcionando em 24h</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-purple-600" />
                <span className="font-semibold">30 dias grátis</span>
              </div>
            </div>
          </div>

          {/* Right content - Better visual hierarchy */}
          <div className="relative animate-fade-in">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-slate-100 transform hover:scale-105 transition-transform duration-500">
              <img 
                src="/lovable-uploads/219bbfd9-3e57-4298-9273-871bf2bf1fe8.png" 
                alt="Médico utilizando o sistema SALUS" 
                className="w-full h-auto rounded-2xl"
              />
              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-2xl text-lg font-bold shadow-xl animate-gentle-bounce">
                ✅ Online
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-2xl text-lg font-bold shadow-xl">
                🔒 100% Seguro
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature icons section with better spacing */}
        <div className="mt-40">
          <div className="text-center mb-24">
            <h3 className="text-5xl font-bold text-slate-900 mb-8">
              Tudo que sua clínica precisa em um só sistema
            </h3>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto font-medium">
              Pare de usar 5 sistemas diferentes. O Salus centraliza tudo.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-12">
            {[
              { icon: Calendar, name: "Agenda Inteligente", color: "bg-blue-100 text-blue-600", description: "Zero conflitos" },
              { icon: FileText, name: "Prontuário Digital", color: "bg-green-100 text-green-600", description: "CFM Certificado" },
              { icon: MessageSquare, name: "WhatsApp", color: "bg-purple-100 text-purple-600", description: "Integração nativa" },
              { icon: BarChart3, name: "Relatórios", color: "bg-orange-100 text-orange-600", description: "Tempo real" },
              { icon: FileCheck, name: "Prescrições", color: "bg-indigo-100 text-indigo-600", description: "Válidas no Brasil" },
              { icon: Shield, name: "Segurança", color: "bg-red-100 text-red-600", description: "ISO 27001" }
            ].map((feature, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`w-24 h-24 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-2xl`}>
                  <feature.icon className="h-12 w-12" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors duration-300 mb-2">{feature.name}</h4>
                <p className="text-sm text-slate-600 font-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
