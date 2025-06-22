
import React from 'react';
import { SalesHero } from '@/components/sales/SalesHero';
import SalesPricing from '@/components/sales/SalesPricing';
import { SalesTestimonials } from '@/components/sales/SalesTestimonials';
import { SalesFinalCTA } from '@/components/sales/SalesFinalCTA';
import { SalesFeatures } from '@/components/sales/SalesFeatures';
import { SalesPlatformPreview } from '@/components/sales/SalesPlatformPreview';
import { SalesScreenshots } from '@/components/sales/SalesScreenshots';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Sales = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Professional Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg flex items-center justify-center">
              <Zap className="text-white h-7 w-7" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">SALUS</h1>
              <p className="text-sm text-green-600 font-medium">Sistema de Gestão Médica</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-slate-700 hover:bg-slate-100 font-semibold px-6 py-2">
                Acessar Sistema
              </Button>
            </Link>
            <Link to="/subscription">
              <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-sm transition-all duration-300">
                Teste Gratuito
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <SalesHero />
        
        {/* Platform Demo */}
        <section className="py-20 bg-slate-50">
          <SalesScreenshots />
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-white">
          <SalesFeatures />
        </section>
        
        {/* Platform Preview */}
        <section className="py-20 bg-slate-50">
          <SalesPlatformPreview />
        </section>
        
        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <SalesPricing />
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-slate-50">
          <SalesTestimonials />
        </section>
        
        {/* Final CTA */}
        <SalesFinalCTA />
      </main>

      {/* Professional Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg flex items-center justify-center">
                  <Zap className="text-white h-7 w-7" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">SALUS</span>
                  <p className="text-slate-400 text-sm">Sistema de Gestão Médica</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Tecnologia brasileira desenvolvida para modernizar a gestão médica no país.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-lg">Empresa</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="hover:text-white cursor-pointer transition-colors duration-200">Sobre Nós</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-200">Nossa Tecnologia</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-200">Certificações</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-200">Casos de Sucesso</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-lg">Compliance</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="hover:text-white cursor-pointer transition-colors duration-200">Termos de Serviço</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-200">Política de Privacidade</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-200">LGPD</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-200">ISO 27001</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-lg">Contato Comercial</h3>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-center space-x-3 hover:text-white transition-colors duration-200">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>vendas@salus.com.br</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-white transition-colors duration-200">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>(11) 3000-1234</span>
                </div>
                <div className="flex items-start space-x-3 hover:text-white transition-colors duration-200">
                  <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                  <span>São Paulo - SP<br />Atendimento em todo Brasil</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-center md:text-left">
              &copy; 2025 SALUS Sistema de Gestão Médica. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-slate-400 text-sm">
              <span className="hover:text-white transition-colors cursor-pointer">Central de Ajuda</span>
              <span className="hover:text-white transition-colors cursor-pointer">Status do Sistema</span>
              <span className="hover:text-white transition-colors cursor-pointer">API</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sales;
