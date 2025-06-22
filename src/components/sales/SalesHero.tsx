
import React from 'react';
import { Check, ChevronRight, Calendar, FileText, MessageSquare, BarChart3, FileCheck, Shield, Zap, Star, Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const SalesHero = () => {
  return (
    <section className="relative py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Professional badge */}
            <Badge variant="outline" className="w-fit bg-blue-50 border-blue-200 text-blue-700 px-4 py-2 text-sm font-medium rounded-md">
              <Star className="w-4 h-4 mr-2 text-yellow-500 fill-current" />
              Confiado por mais de 5.000 profissionais de saúde
            </Badge>
            
            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                Sistema de Gestão Médica
                <span className="block text-blue-600 mt-2">Completo e Integrado</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Controle total da sua clínica em uma plataforma única. 
                Agenda, prontuários, relatórios e muito mais.
              </p>
            </div>

            {/* Key benefits */}
            <div className="space-y-4">
              {[
                "Agenda sem conflitos de horário",
                "Prontuário eletrônico certificado CFM",
                "Relatórios gerenciais em tempo real",
                "Integração nativa com WhatsApp"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/subscription">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
                  Iniciar Teste Gratuito
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-slate-700 border-slate-300 hover:bg-slate-50 px-8 py-3 text-lg font-semibold">
                Agendar Demonstração
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-8 text-slate-500 pt-6 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Certificado LGPD</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Suporte 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span>30 dias grátis</span>
              </div>
            </div>
          </div>

          {/* Right content - Platform preview */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-6">
              <img 
                src="/lovable-uploads/219bbfd9-3e57-4298-9273-871bf2bf1fe8.png" 
                alt="Interface do sistema SALUS" 
                className="w-full h-auto rounded-md"
              />
              <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Online
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature icons section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Funcionalidades Principais
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tudo que sua clínica precisa em uma única plataforma
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {[
              { icon: Calendar, name: "Agenda", description: "Inteligente" },
              { icon: FileText, name: "Prontuário", description: "Digital" },
              { icon: MessageSquare, name: "WhatsApp", description: "Integrado" },
              { icon: BarChart3, name: "Relatórios", description: "Automáticos" },
              { icon: FileCheck, name: "Prescrições", description: "Válidas" },
              { icon: Shield, name: "Segurança", description: "Total" }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-100 transition-colors">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-900 text-sm mb-1">{feature.name}</h4>
                <p className="text-xs text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
