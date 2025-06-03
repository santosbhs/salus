
import React from 'react';

export const SalesPlatformPreview = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-green-50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Interface moderna e intuitiva
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Desenvolvido pensando na experiência do usuário
        </p>
        <div className="bg-white rounded-2xl shadow-xl p-8 border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dashboard Intuitivo</h3>
              <p className="text-gray-600 mb-6">
                Acesse todas as informações importantes em uma interface limpa e organizada. 
                Visualize métricas, agendamentos e relatórios de forma clara e eficiente.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Navegação simplificada
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Acesso rápido às funcionalidades
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Design responsivo
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-emerald-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <p className="text-gray-600">Visualização do Sistema</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
