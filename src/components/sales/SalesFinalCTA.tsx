
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SalesFinalCTA = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 border-2 border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 border-2 border-white/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/20 rotate-45 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-16 bg-white/10 rotate-12 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-5xl text-center text-white relative z-10">
        {/* Main headline */}
        <div className="space-y-6 mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transforme sua clínica
            <span className="block bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
              hoje mesmo
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Junte-se a milhares de profissionais que já revolucionaram sua gestão médica
          </p>
        </div>

        {/* Social proof and benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
              ))}
            </div>
            <h3 className="font-bold text-lg mb-2">+10.000 profissionais</h3>
            <p className="text-blue-100 text-sm">confiam no SALUS diariamente</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Shield className="h-8 w-8 text-green-300 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">100% Seguro</h3>
            <p className="text-blue-100 text-sm">Certificado LGPD e dados criptografados</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Zap className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Ativação imediata</h3>
            <p className="text-blue-100 text-sm">Comece a usar em menos de 5 minutos</p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <Link to="/subscription">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-xl px-12 py-6 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
              Começar Teste Grátis Agora
              <ChevronRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
          
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 text-xl px-12 py-6 rounded-2xl font-bold transition-all duration-300">
            Ver Demonstração ao Vivo
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-blue-100 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Sem cartão de crédito</span>
          </div>
          <span className="hidden sm:block">•</span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <span>Cancelamento gratuito</span>
          </div>
          <span className="hidden sm:block">•</span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <span>Suporte em português</span>
          </div>
        </div>
        
        {/* Urgency message */}
        <div className="mt-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-400/30">
          <p className="text-green-200 font-medium">
            🎉 Oferta especial: <span className="font-bold">30 dias grátis</span> para novos usuários este mês!
          </p>
        </div>
      </div>
    </section>
  );
};
