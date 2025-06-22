
import React from 'react';
import { Check, ChevronRight, Calendar, FileText, MessageSquare, BarChart3, FileCheck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const SalesHero = () => {
  return (
    <section className="relative py-20 px-6 bg-white overflow-hidden">
      {/* Professional grid background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/30"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Professional badge */}
            <Badge variant="outline" className="w-fit bg-blue-50 border-blue-200 text-blue-700 px-4 py-2 text-sm font-medium">
              Plataforma Líder em Gestão Médica
            </Badge>
            
            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-slate-900 block">Sistema Completo</span>
                <span className="text-slate-900 block">para</span>
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent block">
                  Gestão Médica
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Plataforma integrada para otimizar processos clínicos, aumentar eficiência operacional e melhorar a experiência do paciente.
              </p>
            </div>

            {/* Value proposition */}
            <div className="bg-white rounded-lg p-8 border border-slate-200 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Agenda integrada e automatizada",
                  "Prontuário eletrônico certificado", 
                  "Relatórios gerenciais completos",
                  "Suporte especializado 24/7"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link to="/subscription">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 font-semibold">
                  Iniciar Teste Gratuito
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-slate-700 border-slate-300 hover:bg-slate-50 px-8 py-4 rounded-lg text-lg font-semibold">
                Solicitar Demonstração
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-8 text-sm text-slate-600 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-blue-600" />
                <span>Certificado LGPD</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Setup em 24h</span>
              </div>
              <span>Sem taxa de adesão</span>
            </div>
          </div>

          {/* Right content - Professional image */}
          <div className="relative">
            <div className="relative bg-white rounded-lg p-3 shadow-lg border border-slate-200">
              <img 
                src="/lovable-uploads/219bbfd9-3e57-4298-9273-871bf2bf1fe8.png" 
                alt="Profissional de saúde utilizando sistema SALUS" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Feature icons section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Módulos Integrados
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Solução completa para todas as necessidades da sua prática médica
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {[
              { icon: Calendar, name: "Agendamento", color: "bg-blue-100 text-blue-600" },
              { icon: FileText, name: "Prontuário", color: "bg-green-100 text-green-600" },
              { icon: MessageSquare, name: "Comunicação", color: "bg-purple-100 text-purple-600" },
              { icon: BarChart3, name: "Relatórios", color: "bg-orange-100 text-orange-600" },
              { icon: FileCheck, name: "Prescrições", color: "bg-indigo-100 text-indigo-600" },
              { icon: Shield, name: "Segurança", color: "bg-red-100 text-red-600" }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8" />
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
