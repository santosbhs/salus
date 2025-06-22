
import React from 'react';
import { Check, ChevronRight, Calendar, FileText, MessageSquare, BarChart3, FileCheck, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const SalesHero = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-blue-50/30 to-green-50/20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
                  <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent block">
                    Organize sua Clínica,
                  </span>
                  <span className="text-gray-900 block">Ganhe Tempo e</span>
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block">
                    Fidelize Pacientes
                  </span>
                </h1>
                
                <div className="max-w-md">
                  <p className="text-xl md:text-2xl font-semibold text-gray-700 leading-relaxed">
                    Tudo em uma Única Plataforma
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Elimine papelada, automatize agendamentos e tenha total controle da sua clínica com o SALUS. 
                Seus pacientes vão notar a diferença!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Agenda online integrada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Prontuário eletrônico seguro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Relatórios e controle financeiro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Suporte dedicado</span>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/subscription">
                  <Button size="lg" className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white text-lg px-12 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Começar Teste Grátis
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 rounded-2xl blur-lg opacity-30"></div>
                <img 
                  src="/lovable-uploads/219bbfd9-3e57-4298-9273-871bf2bf1fe8.png" 
                  alt="Médica profissional usando laptop em consultório" 
                  className="relative w-full h-auto rounded-xl shadow-2xl border border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Tudo que sua clínica precisa
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Automatize processos, evite erros manuais e melhore a experiência do paciente.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Agenda Online</h3>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Prontuário Eletrônico</h3>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">WhatsApp</h3>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Relatórios</h3>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileCheck className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Receitas</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
