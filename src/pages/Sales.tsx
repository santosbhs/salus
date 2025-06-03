
import React from 'react';
import { ModernHero } from '@/components/sales/ModernHero';
import { ModernPricing } from '@/components/sales/ModernPricing';
import { Zap, Mail, Phone, MapPin, Shield, Clock, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Sales = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Zap className="text-white h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Salus</h1>
              <p className="text-sm text-gray-600">Agenda e Prontuário Eletrônico</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-700 hover:bg-gray-100">
                Entrar
              </Button>
            </Link>
            <Link to="/subscription">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
                Teste Grátis
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <ModernHero />
      
      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por que escolher o Salus?
            </h2>
            <p className="text-xl text-gray-600">
              Tudo que você precisa para modernizar sua clínica
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Seguro</h3>
              <p className="text-gray-600">
                Dados protegidos com criptografia e backup automático. Conforme LGPD.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fácil de Usar</h3>
              <p className="text-gray-600">
                Interface intuitiva que você aprende em minutos. Sem complicações.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Suporte Dedicado</h3>
              <p className="text-gray-600">
                Equipe especializada pronta para ajudar você a crescer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ModernPricing />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-green-600">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para modernizar sua clínica?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Comece hoje mesmo com 7 dias grátis. Sem compromisso, sem taxas de setup.
          </p>
          <Link to="/subscription">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-lg shadow-lg">
              Começar Teste Grátis
            </Button>
          </Link>
          <div className="mt-6 text-green-100 text-sm">
            ✓ 7 dias grátis • ✓ Sem cartão de crédito • ✓ Suporte incluído
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <Zap className="text-white h-6 w-6" />
                </div>
                <span className="text-xl font-bold">Salus</span>
              </div>
              <p className="text-gray-300">
                Agenda e Prontuário Eletrônico para clínicas modernas.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Funcionalidades</li>
                <li>Preços</li>
                <li>Segurança</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Central de Ajuda</li>
                <li>Treinamentos</li>
                <li>Status</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contato@salus.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(11) 9999-9999</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
            <p>&copy; 2024 Salus. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sales;
