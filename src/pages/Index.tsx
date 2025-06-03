
import React from 'react';
import { Zap, ArrowRight, Calendar, FileText, Users, Shield, Clock, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Zap className="text-white h-7 w-7" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">SALUS</h1>
              <p className="text-sm text-gray-600 font-medium">Healthcare Platform</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-700 hover:bg-gray-100 font-semibold">
                Entrar
              </Button>
            </Link>
            <Link to="/subscription">
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-xl font-bold shadow-lg">
                Teste Grátis
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-green-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl flex items-center justify-center">
                  <Zap className="text-white h-7 w-7" />
                </div>
                <div className="text-left">
                  <h1 className="text-3xl font-bold text-white">SALUS</h1>
                  <p className="text-green-200 text-sm">Healthcare Platform</p>
                </div>
              </div>
            </div>

            <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
              Revolucione a gestão
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                da sua Clínica
              </span>
            </h2>

            <p className="text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              A plataforma mais avançada do Brasil para 
              <strong className="text-green-400"> agenda, prontuário eletrônico e gestão clínica</strong>. 
              Aumente sua produtividade e impressione seus pacientes.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link to="/subscription">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Começar Teste Grátis
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/sales">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 text-xl px-12 py-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                  Ver Mais Detalhes
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8 text-green-200 text-lg font-semibold">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>30 dias grátis</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>LGPD Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Funcionalidades <span className="text-green-600">Completas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo que sua clínica precisa em uma plataforma única e integrada
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Agenda Inteligente</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Sistema automatizado de agendamento com confirmação por WhatsApp e lembretes automáticos
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Prontuário Digital</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Anamnese SOAP completa, prescrições digitais e histórico médico centralizado
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Gestão Completa</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Controle de profissionais, especialidades, convênios e relatórios gerenciais
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Por que escolher o <span className="text-green-600">SALUS</span>?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Seguro</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Dados protegidos com criptografia militar e backup automático. Totalmente conforme LGPD.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementação Rápida</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Configure sua clínica em menos de 30 minutos. Interface intuitiva que você domina rapidamente.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Headphones className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Suporte Premium</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Equipe especializada em saúde pronta para te ajudar. Treinamento completo incluído.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-green-600 via-green-700 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center text-white relative z-10">
          <h2 className="text-5xl font-bold mb-8">
            Transforme sua clínica <span className="text-green-200">hoje mesmo!</span>
          </h2>
          <p className="text-2xl mb-12 text-green-100 max-w-3xl mx-auto font-light">
            Junte-se a milhares de profissionais que já revolucionaram sua gestão médica com o SALUS
          </p>
          <Link to="/subscription">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 text-xl px-12 py-6 rounded-2xl shadow-2xl font-bold transform hover:scale-105 transition-all duration-300">
              Começar Teste Grátis Agora
            </Button>
          </Link>
          <div className="mt-8 text-green-100 text-lg">
            ✓ 30 dias grátis • ✓ Sem compromisso • ✓ Suporte premium incluído
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
