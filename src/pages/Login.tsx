import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, Zap, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { cleanupAuthState } from '@/utils/authCleanup';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const testUsers = [
    { 
      email: 'admin.basico@teste.com', 
      password: '123456',
      plan: 'Básico',
      redirect: '/dashboard-basico'
    },
    { 
      email: 'admin.profissional@teste.com', 
      password: '123456',
      plan: 'Profissional',
      redirect: '/dashboard-profissional'
    },
    { 
      email: 'admin.enterprise@teste.com', 
      password: '123456',
      plan: 'Enterprise',
      redirect: '/dashboard-enterprise'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log(`Tentativa de login para: ${formData.email}`);
      
      // Limpar estado de autenticação primeiro
      cleanupAuthState();
      
      // Forçar logout global
      try {
        await supabase.auth.signOut({ scope: 'global' });
        console.log('Logout global realizado');
      } catch (err) {
        console.log('Erro no logout global (continuando):', err);
      }

      // Aguardar limpeza completa
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Verificar se é usuário teste e criar/confirmar se necessário
      const isTestUser = testUsers.find(user => 
        user.email === formData.email && user.password === formData.password
      );
      
      if (isTestUser) {
        console.log('Usuário teste detectado, garantindo que existe...');
        
        // Tentar criar o usuário (falhará se já existir)
        try {
          const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options: {
              emailRedirectTo: `${window.location.origin}${isTestUser.redirect}`
            }
          });
          
          console.log('Resultado do signup:', { signUpData, signUpError });
          
          // Tentar confirmar via edge function
          try {
            const { data: confirmData, error: confirmError } = await supabase.functions.invoke('confirm-test-users', {
              body: { email: formData.email }
            });
            console.log('Resultado da confirmação:', { confirmData, confirmError });
          } catch (confirmErr) {
            console.log('Erro na função de confirmação (continuando):', confirmErr);
          }
          
          // Aguardar processamento
          await new Promise(resolve => setTimeout(resolve, 2000));
        } catch (createError) {
          console.log('Erro ao criar usuário teste (pode já existir):', createError);
        }
      }

      console.log('Tentando fazer login...');
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      console.log('Resultado do login:', { data, error });

      if (error) {
        throw error;
      }

      if (data.user && data.session) {
        console.log('Login bem-sucedido para usuário:', data.user.email);
        toast({
          title: "Login realizado com sucesso!",
          description: "Redirecionando para o dashboard...",
        });
        
        // Redirecionar para o dashboard específico do plano
        const redirectPath = isTestUser ? isTestUser.redirect : '/dashboard';
        setTimeout(() => {
          window.location.href = redirectPath;
        }, 1000);
      } else {
        throw new Error('Dados de login inválidos');
      }
    } catch (error: any) {
      console.error('Erro no login:', error);
      
      let errorMessage = "Verifique suas credenciais e tente novamente";
      
      if (error.message?.includes('Invalid login credentials')) {
        errorMessage = "Email ou senha incorretos";
      } else if (error.message?.includes('Email not confirmed')) {
        errorMessage = "Email não confirmado. Verifique sua caixa de entrada.";
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Erro no login",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const fillTestUser = (user: typeof testUsers[0]) => {
    setFormData({
      email: user.email,
      password: user.password
    });
  };

  const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back button */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 p-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
          </Link>
        </div>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg flex items-center justify-center">
              <Zap className="text-white h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">SALUS</h1>
              <p className="text-green-200 text-xs">Healthcare Platform</p>
            </div>
          </div>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Entrar
            </CardTitle>
            <CardDescription className="text-gray-600">
              Acesse sua conta
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Test users - simplified */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-xs font-medium text-blue-800 mb-2">Contas de teste:</p>
              <div className="space-y-1">
                {testUsers.map((user, index) => (
                  <button
                    key={index}
                    onClick={() => fillTestUser(user)}
                    className="w-full text-left p-2 rounded text-xs hover:bg-blue-100 transition-colors"
                  >
                    <span className="font-medium">{user.plan}:</span> {user.email}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">E-mail</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 h-11 border-gray-300 focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 pr-10 h-11 border-gray-300 focus:border-green-500 focus:ring-green-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-11 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-lg"
                disabled={loading || !isFormValid}
              >
                {loading ? "Entrando..." : "Entrar"}
              </Button>
            </form>

            <div className="text-center space-y-4">
              <Link to="/forgot-password" className="text-green-600 hover:text-green-700 text-sm">
                Esqueci minha senha
              </Link>
              
              <div className="border-t pt-4">
                <p className="text-gray-600 mb-3 text-sm">
                  Ainda não é assinante?
                </p>
                <Link to="/subscription">
                  <Button variant="outline" className="w-full h-11 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium rounded-lg">
                    Assinar SALUS
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-white/70 text-xs">
            © 2024 SALUS Healthcare Platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
