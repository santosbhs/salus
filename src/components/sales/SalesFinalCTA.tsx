
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star, Shield, Clock, Award, Zap, Users, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SalesFinalCTA = () => {
  return (
    <section className="relative py-40 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl text-center text-white relative z-10">
        {/* Urgency alert */}
        <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold mb-12 animate-pulse shadow-2xl">
          <AlertTriangle className="mr-3 h-6 w-6" />
          🚨 PROMOÇÃO LIMITADA: Apenas hoje!
        </div>

        {/* Main headline with more emotion */}
        <div className="space-y-10 mb-20">
          <h2 className="text-7xl md:text-8xl font-black leading-tight animate-fade-in">
            Sua Clínica Merece
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-black">
              o Melhor Sistema
            </span>
            <span className="block text-6xl md:text-7xl font-light mt-4">
              do Brasil
            </span>
          </h2>
          <p className="text-3xl text-slate-300 max-w-5xl mx-auto leading-relaxed font-medium">
            Mais de <span className="font-bold text-white">5.000 médicos</span> já eliminaram o caos da gestão médica. 
            <br/>Sua vez chegou!
          </p>
        </div>

        {/* Social proof and benefits with better visual hierarchy */}
        <div className="grid md:grid-cols-4 gap-10 mb-20">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <h3 className="font-bold text-3xl mb-3">5.000+</h3>
            <p className="text-slate-300 text-lg font-medium">Médicos Satisfeitos</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            <Shield className="h-12 w-12 text-blue-400 mx-auto mb-6" />
            <h3 className="font-bold text-3xl mb-3">100% Seguro</h3>
            <p className="text-slate-300 text-lg font-medium">Certificação ISO 27001</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            <Zap className="h-12 w-12 text-green-400 mx-auto mb-6" />
            <h3 className="font-bold text-3xl mb-3">24 Horas</h3>
            <p className="text-slate-300 text-lg font-medium">Funcionando na sua clínica</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            <Award className="h-12 w-12 text-purple-400 mx-auto mb-6" />
            <h3 className="font-bold text-3xl mb-3">30 Dias</h3>
            <p className="text-slate-300 text-lg font-medium">Garantia total</p>
          </div>
        </div>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-10 justify-center mb-16">
          <Link to="/subscription">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white text-3xl px-20 py-10 rounded-3xl font-black shadow-3xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110">
              🚀 TRANSFORMAR MINHA CLÍNICA AGORA
              <ChevronRight className="ml-4 h-10 w-10" />
            </Button>
          </Link>
          
          <Button size="lg" variant="outline" className="border-4 border-white text-white hover:bg-white hover:text-slate-900 text-3xl px-20 py-10 rounded-3xl font-black transition-all duration-300 transform hover:scale-105">
            💬 Falar com Especialista
          </Button>
        </div>
        
        {/* Final trust indicators with better spacing */}
        <div className="flex flex-wrap justify-center items-center gap-16 text-slate-300 text-xl mb-16">
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-bold">✅ Sem cartão de crédito</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="font-bold">⚡ Ativação imediata</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="font-bold">🎯 Suporte especializado</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="font-bold">🔄 Cancelamento fácil</span>
          </div>
        </div>
        
        {/* Final urgency message with more impact */}
        <div className="bg-gradient-to-r from-red-600/30 to-orange-500/30 rounded-3xl p-12 border-2 border-red-400/50 max-w-5xl mx-auto backdrop-blur-lg">
          <p className="text-red-200 font-bold text-2xl leading-relaxed">
            <span className="text-4xl">⚡</span> 
            <span className="font-black text-white"> ÚLTIMAS VAGAS HOJE: </span> 
            <br/>Consultoria gratuita de implementação disponível apenas para os próximos 
            <span className="font-black text-yellow-300"> 20 cadastros </span>
            desta promoção especial!
          </p>
        </div>
      </div>
    </section>
  );
};
