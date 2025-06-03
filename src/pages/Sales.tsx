
import React from 'react';
import { ModernHero } from '@/components/sales/ModernHero';
import { ModernPricing } from '@/components/sales/ModernPricing';
import { Zap, Mail, Phone, Shield, Clock, Headphones, TrendingUp, Award, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Sales = () => {
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

      <ModernHero />
      
      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Resultados que <span className="text-green-600">Impressionam</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Clínicas que usam o Salus transformaram completamente sua operação
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-green-600 mb-2">300%</h3>
              <p className="text-gray-600 font-semibold text-lg">Aumento na Produtividade</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">95%</h3>
              <p className="text-gray-600 font-semibold text-lg">Satisfação dos Pacientes</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-purple-600 mb-2">5000+</h3>
              <p className="text-gray-600 font-semibold text-lg">Profissionais Ativos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Por que escolher o <span className="text-green-600">SALUS</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A tecnologia mais avançada para revolucionar sua clínica
            </p>
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

      <ModernPricing />

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
              Começar Gratuitamente Agora
            </Button>
          </Link>
          <div className="mt-8 text-green-100 text-lg">
            ✓ 7 dias grátis • ✓ Sem cartão de crédito • ✓ Suporte premium incluído
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="text-white h-7 w-7" />
                </div>
                <div>
                  <span className="text-2xl font-bold">SALUS</span>
                  <p className="text-gray-400 text-sm">Healthcare Platform</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg">
                A plataforma mais avançada para gestão médica do Brasil.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Produto</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white cursor-pointer">Funcionalidades</li>
                <li className="hover:text-white cursor-pointer">Preços</li>
                <li className="hover:text-white cursor-pointer">Segurança</li>
                <li className="hover:text-white cursor-pointer">Integrações</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Suporte</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white cursor-pointer">Central de Ajuda</li>
                <li className="hover:text-white cursor-pointer">Treinamentos</li>
                <li className="hover:text-white cursor-pointer">API Docs</li>
                <li className="hover:text-white cursor-pointer">Status</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Contato</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span>contato@salus.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <span>(11) 99999-9999</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SALUS Healthcare Platform. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sales;
