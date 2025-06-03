
import React from 'react';
import { ModernHero } from '@/components/sales/ModernHero';
import { TechFeatures } from '@/components/sales/TechFeatures';
import { TechShowcase } from '@/components/sales/TechShowcase';
import { ModernPricing } from '@/components/sales/ModernPricing';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Sales = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Modern Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-slate-200 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="text-white h-7 w-7" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Salus
              </h1>
              <p className="text-sm text-slate-500 font-medium">Saúde e Inovação</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-slate-700 hover:bg-slate-100 font-semibold">
                Entrar
              </Button>
            </Link>
            <Link to="/subscription">
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                Começar Grátis
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <ModernHero />
      <TechFeatures />
      <TechShowcase />
      <ModernPricing />

      {/* Modern Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Zap className="text-white h-6 w-6" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Salus</span>
                  <p className="text-slate-400 text-sm">Saúde e Inovação</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Revolucionando a medicina com tecnologia de ponta e segurança de nível empresarial.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-lg">Produto</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="hover:text-white transition-colors cursor-pointer">Funcionalidades</li>
                <li className="hover:text-white transition-colors cursor-pointer">Preços</li>
                <li className="hover:text-white transition-colors cursor-pointer">Segurança</li>
                <li className="hover:text-white transition-colors cursor-pointer">API</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-lg">Suporte</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="hover:text-white transition-colors cursor-pointer">Central de Ajuda</li>
                <li className="hover:text-white transition-colors cursor-pointer">Documentação</li>
                <li className="hover:text-white transition-colors cursor-pointer">Treinamentos</li>
                <li className="hover:text-white transition-colors cursor-pointer">Status</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-lg">Contato</h3>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-500" />
                  <span>contato@salus.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-500" />
                  <span>(11) 9999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-500" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 <span className="font-bold text-white">Salus - Saúde e Inovação</span>. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sales;
