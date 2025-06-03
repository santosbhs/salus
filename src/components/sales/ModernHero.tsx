
import React from 'react';
import { ArrowRight, Calendar, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const ModernHero = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Agenda e Prontuário
            <span className="block text-green-600">Eletrônico Completo</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Organize agendamentos, cadastros de pacientes, anamnese SOAP, atendimentos, 
            profissionais e comunicações por WhatsApp em uma única plataforma.
          </p>
          <Link to="/subscription">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Começar Teste Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Agenda Inteligente</h3>
            <p className="text-gray-600">
              Marcação online, confirmação automática por WhatsApp e gestão de retornos.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Prontuário Eletrônico</h3>
            <p className="text-gray-600">
              Cadastro com anamnese no modelo SOAP, evoluções e histórico centralizado.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Gestão de Profissionais</h3>
            <p className="text-gray-600">
              Permissões específicas, escalas e controle por especialidade ou convênio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
