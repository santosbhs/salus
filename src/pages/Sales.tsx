
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
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-green-600 rounded-xl flex items-center justify-center">
              <Zap className="text-white h-7 w-7" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SALUS</h1>
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
              <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-xl font-bold">
                Teste Grátis
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="space-y-20">
        <SalesHero />
        
        {/* Screenshots Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50">
          <SalesScreenshots />
        </div>
        
        <SalesFeatures />
        
        {/* Platform Preview */}
        <div className="bg-gradient-to-br from-blue-50 to-gray-50">
          <SalesPlatformPreview />
        </div>
        
        <SalesPricing />
        
        {/* Testimonials */}
        <div className="bg-gradient-to-br from-gray-50 to-green-50">
          <SalesTestimonials />
        </div>
        
        <SalesFinalCTA />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6 mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-green-600 rounded-xl flex items-center justify-center">
                  <Zap className="text-white h-7 w-7" />
                </div>
                <div>
                  <span className="text-2xl font-bold">SALUS</span>
                  <p className="text-gray-400 text-sm">Healthcare Platform</p>
                </div>
              </div>
              <p className="text-gray-300">
                Desenvolvido com tecnologia brasileira 🇧🇷
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-6">Sobre a SALUS</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white cursor-pointer transition-colors">Quem Somos</li>
                <li className="hover:text-white cursor-pointer transition-colors">Nossa Missão</li>
                <li className="hover:text-white cursor-pointer transition-colors">Segurança</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-6">Legal</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white cursor-pointer transition-colors">Termos de Uso</li>
                <li className="hover:text-white cursor-pointer transition-colors">Política de Privacidade</li>
                <li className="hover:text-white cursor-pointer transition-colors">LGPD</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-6">Suporte e Contato</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contato@salus.com.br</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(11) 99999-9999</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SALUS Healthcare Platform. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sales;
