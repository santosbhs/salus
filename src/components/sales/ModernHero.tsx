
import React from 'react';
import { ArrowRight, Shield, Zap, Star, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const ModernHero = () => {
  const handleDemoClick = () => {
    // Simula abertura de demo - pode ser substituído por modal ou link externo
    window.open('https://demo.salus.com', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-r from-green-300/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Trust indicators */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              100% Seguro
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              +10k Médicos
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 border-purple-200 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              IA Integrada
            </Badge>
          </div>

          {/* Main headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-green-700 to-emerald-600 bg-clip-text text-transparent">
              O Futuro da
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Medicina Digital
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Plataforma completa de gestão clínica com inteligência artificial, 
            segurança de nível bancário e interface intuitiva.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/subscription">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300">
                Começar Gratuitamente
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleDemoClick}
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-12 py-6 text-lg font-semibold rounded-xl hover:border-green-500 hover:text-green-700 transition-all duration-300"
            >
              <Play className="mr-3 h-6 w-6" />
              Ver Demonstração
            </Button>
          </div>

          {/* Trust metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-800 mb-2">99.9%</div>
              <div className="text-slate-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-800 mb-2">500k+</div>
              <div className="text-slate-600">Pacientes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-800 mb-2">24/7</div>
              <div className="text-slate-600">Suporte</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-800 mb-2">LGPD</div>
              <div className="text-slate-600">Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
