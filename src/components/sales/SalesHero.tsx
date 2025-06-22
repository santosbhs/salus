
import React from 'react';
import { Check, ChevronRight, Calendar, FileText, MessageSquare, BarChart3, FileCheck, Shield, Zap, Star, Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const SalesHero = () => {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-white via-blue-50/20 to-green-50/20 overflow-hidden">
      {/* Professional grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left content */}
          <div className="space-y-10 animate-fade-in">
            {/* Logo/Brand Section */}
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
                <Zap className="text-white h-11 w-11" />
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">SALUS</h1>
                <p className="text-green-600 text-xl font-medium">Sistema de Gestão Médica</p>
              </div>
            </div>
            
            {/* Professional badge */}
            <Badge variant="outline" className="w-fit bg-gradient-to-r from-blue-50 to-green-50 border-blue-200 text-blue-700 px-6 py-3 text-base font-semibold rounded-full">
              <Star className="w-4 h-4 mr-2" />
              Mais de 5.000 médicos confiam no Salus
            </Badge>
            
            {/* Main headline - Updated */}
            <div className="space-y-8">
              <h2 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-slate-900 block">Organize sua</span>
                <span className="text-slate-900 block">Clínica,</span>
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent block">
                  Ganhe Tempo
                </span>
                <span className="text-slate-900 block">e Fidelize</span>
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent block">
                  Pacientes
                </span>
              </h2>
              
              <p className="text-2xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                Agenda, Prontuário e Relatórios – Tudo em um só lugar, fácil e online
              </p>
            </div>

            {/* Quick Benefits Section - New */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Por que mais de 5.000 médicos escolheram o Salus:</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Clock, text: "Menos burocracia", color: "text-green-600" },
                  { icon: Users, text: "Mais pacientes por dia", color: "text-blue-600" },
                  { icon: BarChart3, text: "Relatórios automáticos", color: "text-purple-600" },
                  { icon: MessageSquare, text: "Integração com WhatsApp", color: "text-emerald-600" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className={`w-8 h-8 ${benefit.color} bg-opacity-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className={`h-5 w-5 ${benefit.color}`} />
                    </div>
                    <span className="text-slate-700 font-semibold">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Link to="/subscription">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white text-xl px-12 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-bold transform hover:scale-105">
                  Começar Teste Grátis
                  <ChevronRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-slate-700 border-2 border-slate-300 hover:bg-slate-50 px-10 py-6 rounded-xl text-xl font-bold transition-all duration-300 hover:border-blue-400">
                Ver Demonstração
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-8 text-slate-600 pt-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Certificado LGPD</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span className="font-medium">Setup em 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-purple-600" />
                <span className="font-medium">30 dias grátis</span>
              </div>
            </div>
          </div>

          {/* Right content - Professional image */}
          <div className="relative animate-fade-in">
            <div className="relative bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 transform hover:scale-105 transition-transform duration-500">
              <img 
                src="/lovable-uploads/219bbfd9-3e57-4298-9273-871bf2bf1fe8.png" 
                alt="Profissional de saúde utilizando sistema SALUS" 
                className="w-full h-auto rounded-xl"
              />
              {/* Floating elements for visual appeal */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-gentle-bounce">
                Online
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Seguro
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature icons section */}
        <div className="mt-32">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-bold text-slate-900 mb-6">
              Módulos Integrados
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Solução completa para todas as necessidades da sua prática médica
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
            {[
              { icon: Calendar, name: "Agendamento", color: "bg-blue-100 text-blue-600" },
              { icon: FileText, name: "Prontuário", color: "bg-green-100 text-green-600" },
              { icon: MessageSquare, name: "Comunicação", color: "bg-purple-100 text-purple-600" },
              { icon: BarChart3, name: "Relatórios", color: "bg-orange-100 text-orange-600" },
              { icon: FileCheck, name: "Prescrições", color: "bg-indigo-100 text-indigo-600" },
              { icon: Shield, name: "Segurança", color: "bg-red-100 text-red-600" }
            ].map((feature, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`w-20 h-20 ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  <feature.icon className="h-10 w-10" />
                </div>
                <h4 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors duration-300">{feature.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
