
import React from 'react';

export const SalesPlatformPreview = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-green-50 relative overflow-hidden">
      {/* Animated geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-3 h-20 bg-gradient-to-b from-green-400 to-transparent rotate-12 animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-3 h-16 bg-gradient-to-b from-emerald-400 to-transparent -rotate-12 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-4 h-4 bg-green-500 rotate-45 animate-ping"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
          Interface moderna e intuitiva
        </h2>
        <p className="text-xl text-gray-600 mb-12 animate-fade-in">
          Desenvolvido pensando na experiência do usuário
        </p>
        
        {/* Interactive dashboard mockup */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border animate-fade-in transform hover:scale-105 transition-all duration-500">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dashboard Intuitivo</h3>
              <p className="text-gray-600 mb-6">
                Acesse todas as informações importantes em uma interface limpa e organizada. 
                Visualize métricas, agendamentos e relatórios de forma clara e eficiente.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center hover:scale-105 transition-transform duration-200">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 animate-pulse"></div>
                  Navegação simplificada
                </li>
                <li className="flex items-center hover:scale-105 transition-transform duration-200">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 animate-pulse"></div>
                  Acesso rápido às funcionalidades
                </li>
                <li className="flex items-center hover:scale-105 transition-transform duration-200">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 animate-pulse"></div>
                  Design responsivo
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 h-64 flex items-center justify-center relative overflow-hidden">
              {/* Animated dashboard elements */}
              <div className="absolute top-4 left-4 w-16 h-3 bg-gradient-to-r from-green-200 to-emerald-200 rounded animate-pulse"></div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full animate-bounce"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded animate-ping opacity-50"></div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-emerald-700 rounded-lg mx-auto mb-4 flex items-center justify-center animate-pulse">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <p className="text-gray-600">Sistema em Ação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
