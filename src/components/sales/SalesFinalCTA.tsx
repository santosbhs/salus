
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SalesFinalCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-800 to-green-600">
      <div className="container mx-auto max-w-4xl text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Pronto para dar o próximo passo na gestão da sua clínica?
        </h2>
        <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
          Comece agora gratuitamente. Sem cartão de crédito. Sem complicação.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/subscription">
            <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold">
              Começar Teste Grátis
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-800 text-lg px-8 py-4 rounded-lg font-semibold">
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar com um Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};
