
import React, { useEffect } from 'react';
import { CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

const Success = () => {
  useEffect(() => {
    // Refresh subscription status when user returns from successful checkout
    const refreshSubscription = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        await supabase.functions.invoke('check-subscription', {
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        });
      }
    };

    refreshSubscription();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center shadow-xl">
        <CardHeader>
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Teste Gratuito Iniciado!
          </CardTitle>
          <CardDescription className="text-gray-600">
            Parabéns! Seu período de teste de 7 dias começou agora.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">O que acontece agora?</h3>
            <ul className="text-sm text-green-700 space-y-1 text-left">
              <li>• Você tem 7 dias de acesso completo grátis</li>
              <li>• Após 7 dias, a cobrança será feita automaticamente</li>
              <li>• Cancele a qualquer momento sem penalidades</li>
              <li>• Gerencie sua assinatura no painel do cliente</li>
            </ul>
          </div>

          <div className="space-y-3">
            <Link to="/">
              <Button className="w-full bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 text-white">
                <Zap className="mr-2 h-4 w-4" />
                Começar a usar o Salus
              </Button>
            </Link>
            
            <Link to="/subscription">
              <Button variant="outline" className="w-full border-green-700 text-green-700 hover:bg-green-700 hover:text-white">
                Gerenciar Assinatura
              </Button>
            </Link>
          </div>

          <div className="text-xs text-gray-500 border-t pt-4">
            <p>
              Dúvidas? Entre em contato conosco pelo email: 
              <br />
              <span className="font-medium">suporte@salushub.com</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Success;
