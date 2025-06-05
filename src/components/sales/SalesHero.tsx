
import React from 'react';
import { Check, ChevronRight, Play, Star, Users, Shield, Clock, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const SalesHero = () => {
  return (
    <section className="py-20 px-4 overflow-hidden relative bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full animate-pulse"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Trust indicators */}
        <div className="flex justify-center mb-8">
          <Badge className="mb-6 bg-green-100 text-green-800 border-green-200 px-8 py-3 text-lg font-semibold">
            🏆 Líder em Software Médico no Brasil - Mais de 10.000 profissionais
          </Badge>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-green-700 bg-clip-text text-transparent leading-tight">
            Transforme sua Clínica em uma
            <span className="block text-green-600">Máquina de Resultados</span>
          </h1>
          <p className="text-2xl text-gray-700 mb-8 leading-relaxed max-w-5xl mx-auto font-light">
            O único sistema de gestão clínica que <strong className="text-green-700">aumenta sua receita em até 65%</strong>, 
            <strong className="text-blue-700"> reduz custos operacionais em 45%</strong> e 
            <strong className="text-purple-700"> economiza 4+ horas por dia</strong> do seu tempo administrativo.
          </p>

          {/* Social proof numbers */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">10.000+</div>
              <div className="text-sm text-gray-600 font-medium">Médicos Ativos</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">65%</div>
              <div className="text-sm text-gray-600 font-medium">+ Receita Média</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600 font-medium">Uptime Garantido</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600 font-medium">Satisfação</div>
            </div>
          </div>

          {/* Value proposition */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 mb-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Oferta Especial por Tempo Limitado</h3>
            <p className="text-xl mb-6 opacity-90">
              Implemente o Salus agora e receba <strong>3 meses GRÁTIS</strong> + migração completa dos seus dados sem custo
            </p>
            <div className="text-lg font-semibold">
              ⏰ Válido apenas até o final deste mês - Restam apenas 15 vagas
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center">
            <Link to="/subscription">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-2xl px-16 py-8 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl font-bold">
                QUERO AUMENTAR MINHA RECEITA AGORA
                <ChevronRight className="ml-3 h-7 w-7" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-xl px-12 py-8 rounded-2xl transform hover:scale-105 transition-all duration-300 font-semibold">
              <Play className="mr-3 h-6 w-6" />
              Ver Demonstração (3 min)
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600 mb-12">
            <div className="flex items-center hover:scale-110 transition-transform duration-200 bg-white/60 px-4 py-2 rounded-lg">
              <Shield className="h-6 w-6 text-green-600 mr-2" />
              <span className="font-semibold">LGPD 100% Compliant</span>
            </div>
            <div className="flex items-center hover:scale-110 transition-transform duration-200 bg-white/60 px-4 py-2 rounded-lg">
              <Clock className="h-6 w-6 text-blue-600 mr-2" />
              <span className="font-semibold">Implementação em 24h</span>
            </div>
            <div className="flex items-center hover:scale-110 transition-transform duration-200 bg-white/60 px-4 py-2 rounded-lg">
              <Users className="h-6 w-6 text-purple-600 mr-2" />
              <span className="font-semibold">Suporte Especializado</span>
            </div>
          </div>
        </div>

        {/* Customer testimonial preview */}
        <div className="bg-white rounded-3xl p-10 shadow-2xl border border-green-100 max-w-5xl mx-auto mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-7 w-7 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="ml-4 text-gray-600 font-medium text-lg">4.9/5 - Mais de 2.500 avaliações verificadas</span>
          </div>
          <blockquote className="text-2xl text-gray-700 text-center italic leading-relaxed mb-8 font-light">
            "Implementei o Salus há 6 meses e minha clínica se transformou completamente. A receita aumentou 58% no primeiro trimestre, 
            reduzi o tempo administrativo em 75% e meus pacientes ficaram encantados com a facilidade do agendamento online. 
            Foi o melhor investimento que já fiz para minha carreira."
          </blockquote>
          <div className="text-center">
            <div className="font-bold text-xl text-gray-900">Dr. Rafael Monteiro</div>
            <div className="text-green-600 font-semibold text-lg">Cardiologista • Clínica CardioSaúde • São Paulo</div>
            <div className="text-gray-600 mt-2">58% de aumento na receita em 6 meses</div>
          </div>
        </div>

        {/* Urgency and benefits */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 mb-12 border-l-4 border-red-500">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-red-700 mb-4">⚠️ ATENÇÃO: Você está perdendo dinheiro todos os dias</h3>
            <p className="text-lg text-gray-700 mb-6">
              Cada dia sem o Salus representa uma perda média de <strong className="text-red-600">R$ 890</strong> em receita potencial. 
              Clínicas que ainda usam métodos manuais perdem até <strong className="text-red-600">35% dos pacientes</strong> por falta de organização.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-xl">
                <TrendingUp className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-bold text-red-600">-35%</div>
                <div className="text-sm text-gray-600">Perda de Pacientes</div>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="font-bold text-orange-600">5h/dia</div>
                <div className="text-sm text-gray-600">Tempo Desperdiçado</div>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="font-bold text-yellow-600">R$ 890</div>
                <div className="text-sm text-gray-600">Perda Diária</div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Link to="/subscription">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-2xl px-16 py-8 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl font-bold mb-6">
              SIM, QUERO TRANSFORMAR MINHA CLÍNICA AGORA
              <ChevronRight className="ml-3 h-7 w-7" />
            </Button>
          </Link>
          <p className="text-lg text-gray-600 mb-6">
            <strong className="text-green-700">✓ Sem compromisso</strong> • 
            <strong className="text-blue-700"> ✓ Sem cartão de crédito</strong> • 
            <strong className="text-purple-700"> ✓ Implementação garantida em 24h</strong>
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 flex-wrap">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-600 mr-1" />
              <span>Migração gratuita de dados</span>
            </div>
            <span className="hidden md:inline">•</span>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-600 mr-1" />
              <span>Treinamento completo incluído</span>
            </div>
            <span className="hidden md:inline">•</span>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-600 mr-1" />
              <span>Suporte técnico especializado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
