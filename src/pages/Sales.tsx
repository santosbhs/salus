
import React from 'react';
import { SalesHero } from '@/components/sales/SalesHero';
import SalesPricing from '@/components/sales/SalesPricing';
import { SalesTestimonials } from '@/components/sales/SalesTestimonials';
import { SalesFinalCTA } from '@/components/sales/SalesFinalCTA';
import { SalesFeatures } from '@/components/sales/SalesFeatures';
import { SalesPlatformPreview } from '@/components/sales/SalesPlatformPreview';
import { SalesScreenshots } from '@/components/sales/SalesScreenshots';
import { Zap, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Sales = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="text-white h-7 w-7" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SALUS</h1>
              <p className="text-sm text-gray-600 font-medium">Healthcare Platform</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-700 hover:bg-gray-100 font-semibold px-6 py-2">
                Entrar
              </Button>
            </Link>
            <Link to="/subscription">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                Teste Grátis
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="overflow-hidden">
        {/* Hero Section */}
        <SalesHero />
        
        {/* Screenshots Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/50">
          <SalesScreenshots />
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-white">
          <SalesFeatures />
        </section>
        
        {/* Platform Preview */}
        <section className="py-20 bg-gradient-to-br from-blue-50/50 to-slate-50">
          <SalesPlatformPreview />
        </section>
        
        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <SalesPricing />
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50/30">
          <SalesTestimonials />
        </section>
        
        {/* Final CTA */}
        <SalesFinalCTA />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="text-white h-7 w-7" />
                </div>
                <div>
                  <span className="text-2xl font-bold">SALUS</span>
                  <p className="text-slate-400 text-sm">Healthcare Platform</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Desenvolvido com tecnologia brasileira 🇧🇷
                <br />
                Transformando a gestão médica no país.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-lg">Sobre a SALUS</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="hover:text-white cursor-pointer transition-colors duration-200">Quem Somos</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-200">Nossa Missão</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-200">Segurança</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-200">Certificações</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-lg">Legal</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="hover:text-white cursor-pointer transition-colors duration-200">Termos de Uso</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-200">Política de Privacidade</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-200">LGPD</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-200">Compliance</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-lg">Suporte e Contato</h3>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-center space-x-3 hover:text-white transition-colors duration-200 cursor-pointer">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>contato@salus.com.br</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-white transition-colors duration-200 cursor-pointer">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-slate-400 mb-2">Horário de Atendimento:</p>
                  <p className="text-sm text-slate-300">Segunda a Sexta: 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-center md:text-left">
              &copy; 2025 SALUS Healthcare Platform. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-slate-400 text-sm">
              <span className="hover:text-white transition-colors cursor-pointer">Status do Sistema</span>
              <span className="hover:text-white transition-colors cursor-pointer">API Docs</span>
              <span className="hover:text-white transition-colors cursor-pointer">Changelog</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sales;
