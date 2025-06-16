
import React from 'react';
import { Check, ChevronRight, Play, Calendar, FileText, MessageSquare, BarChart3, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const SalesHero = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo principal */}
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                SALUS — Gestão inteligente para 
                <span className="text-blue-800"> clínicas modernas</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Plataforma completa para agendamento, prontuário, integração com WhatsApp e muito mais.
                Aumente a produtividade da sua clínica com segurança, tecnologia e simplicidade.
              </p>

              {/* Lista de benefícios */}
              <div className="grid grid-cols-2 gap-4 mb-8">
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

              {/* Botões de ação */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/subscription">
                  <Button size="lg" className="bg-blue-800 hover:bg-blue-900 text-white text-lg px-8 py-4 rounded-lg">
                    Começar Teste Grátis
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2 border-blue-800 text-blue-800 hover:bg-blue-50 text-lg px-8 py-4 rounded-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Funcionalidades
                </Button>
              </div>
            </div>

            {/* Mockup do sistema com imagem profissional */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8">
                {/* Imagem do profissional de saúde */}
                <div className="relative mb-6">
                  <img 
                    src="/lovable-uploads/9146d464-2db5-40b1-9b68-6c1fde9de4a5.png"
                    alt="Profissional de saúde trabalhando com laptop em clínica - Sistema SALUS"
                    className="w-full h-48 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <p className="text-sm font-semibold text-blue-900">Sistema SALUS em uso</p>
                      <p className="text-xs text-gray-700">Gestão moderna para sua clínica</p>
                    </div>
                  </div>
                </div>

                {/* Mockup cards do sistema */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 mb-4 transform rotate-2">
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-3 bg-gray-100 rounded mb-2"></div>
                  <div className="h-3 bg-green-200 rounded mb-2"></div>
                  <div className="h-3 bg-blue-200 rounded"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-4 w-32 ml-auto transform -rotate-3 -mt-8">
                  <div className="h-2 bg-gray-200 rounded mb-2"></div>
                  <div className="h-2 bg-green-200 rounded mb-2"></div>
                  <div className="h-2 bg-blue-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema + Solução */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Seu consultório está crescendo, mas a gestão ainda é feita no papel?
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Com o SALUS, você automatiza os processos da clínica, evita erros manuais e melhora a experiência do paciente.
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Agenda online</h3>
              <p className="text-sm text-gray-600">compartilhada</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Prontuário</h3>
              <p className="text-sm text-gray-600">com anamnese SOAP</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600">(planos PRO+)</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Relatórios</h3>
              <p className="text-sm text-gray-600">em tempo real</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Receitas</h3>
              <p className="text-sm text-gray-600">e atestados</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
