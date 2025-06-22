
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
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                SALUS — Gestão inteligente para 
                <span className="text-blue-800"> clínicas modernas</span>
              </h1>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                Plataforma completa para agendamento, prontuário, integração com WhatsApp e muito mais.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Agenda online integrada</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Prontuário eletrônico seguro</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Relatórios e controle financeiro</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Suporte dedicado</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/subscription">
                  <Button size="lg" className="bg-blue-800 hover:bg-blue-900 text-white text-lg px-10 py-4 rounded-lg">
                    Começar Teste Grátis
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/lovable-uploads/219bbfd9-3e57-4298-9273-871bf2bf1fe8.png" 
                alt="Médica profissional usando laptop em consultório" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Tudo que sua clínica precisa
          </h2>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
            Automatize processos, evite erros manuais e melhore a experiência do paciente.
          </p>

          <div className="grid md:grid-cols-5 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-10 w-10 text-blue-800" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Agenda Online</h3>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Prontuário Eletrônico</h3>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Relatórios</h3>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileCheck className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Receitas</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
