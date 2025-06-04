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

  const ensureTestUserExists = async (email: string, password: string) => {
    const testUsers = [
      { email: 'admin.basico@teste.com', password: '123456' },
      { email: 'admin.profissional@teste.com', password: '123456' },
      { email: 'admin.enterprise@teste.com', password: '123456' }
    ];
    
    const testUser = testUsers.find(user => user.email === email && user.password === password);
    
    if (!testUser) return false;

    try {
      console.log(`Ensuring test user exists: ${email}`);
      
      // Try to sign up first (will succeed if user doesn't exist)
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: testUser.email,
        password: testUser.password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`
        }
      });
      
      console.log('Sign up result:', { signUpData, signUpError });
      
      // Try to confirm the user via edge function
      try {
        const { data: confirmData, error: confirmError } = await supabase.functions.invoke('confirm-test-users', {
          body: { email: testUser.email }
        });
        console.log('Confirm result:', { confirmData, confirmError });
      } catch (confirmErr) {
        console.log('Confirm function error (continuing):', confirmErr);
      }
      
      return true;
    } catch (error) {
      console.log('Error ensuring test user exists:', error);
      return true; // Continue anyway
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log(`Login attempt for: ${formData.email}`);
      
      // Clean up existing auth state first
      cleanupAuthState();
      
      // Force sign out
      try {
        await supabase.auth.signOut({ scope: 'global' });
        console.log('Global sign out completed');
      } catch (err) {
        console.log('Sign out error (continuing):', err);
      }

      // Wait for cleanup to complete
      await new Promise(resolve => setTimeout(resolve, 1000));

      // For test users, ensure they exist and are confirmed
      const isTestUser = await ensureTestUserExists(formData.email, formData.password);
      
      if (isTestUser) {
        toast({
          title: "Preparando usuário de teste...",
          description: "Aguarde um momento.",
        });
        
        // Wait for user creation/confirmation to complete
        await new Promise(resolve => setTimeout(resolve, 2000));
      }

      console.log('Attempting sign in...');
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      console.log('Sign in result:', { data, error });

      if (error) {
        if (isTestUser) {
          // For test users, try creating them again with a different approach
          toast({
            title: "Recriando usuário de teste...",
            description: "Tentativa de recuperação em andamento.",
          });
          
          // Wait and try again
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          const { data: retryData, error: retryError } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          });
          
          console.log('Retry result:', { retryData, retryError });
          
          if (retryError) {
            throw new Error(`Erro persistente no login do usuário de teste: ${retryError.message}`);
          }
          
          if (retryData.user) {
            toast({
              title: "Login realizado com sucesso!",
              description: "Redirecionando para o dashboard...",
            });
            window.location.href = '/dashboard';
            return;
          }
        } else {
          throw error;
        }
      }

      if (data.user) {
        console.log('Login successful for user:', data.user.email);
        toast({
          title: "Login realizado com sucesso!",
          description: "Redirecionando para o dashboard...",
        });
        window.location.href = '/dashboard';
      }
    } catch (error: any) {
      console.error('Login error:', error);
      toast({
        title: "Erro no login",
        description: error.message || "Verifique suas credenciais e tente novamente",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-green-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Back to home button */}
          <div className="mb-6">
            <Link to="/">
              <Button variant="ghost" className="text-white hover:bg-white/10 p-2">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao início
              </Button>
            </Link>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl flex items-center justify-center">
                <Zap className="text-white h-7 w-7" />
              </div>
              <div className="text-left">
                <h1 className="text-3xl font-bold text-white">SALUS</h1>
                <p className="text-green-200 text-sm">Healthcare Platform</p>
              </div>
            </div>
          </div>

          <Card className="bg-white/95 backdrop-blur-md shadow-2xl border-0">
            <CardHeader className="space-y-1 text-center pb-6">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Acesso à Plataforma
              </CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                Entre com suas credenciais de assinante
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">E-mail</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-12 h-12 text-lg border-gray-300 focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700 font-medium">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Sua senha"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-12 pr-12 h-12 text-lg border-gray-300 focus:border-green-500 focus:ring-green-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  disabled={loading}
                >
                  {loading ? "Entrando..." : "Entrar na Plataforma"}
                </Button>
              </form>

              <div className="text-center space-y-6">
                <Link to="/forgot-password" className="text-green-600 hover:text-green-700 font-medium">
                  Esqueci minha senha
                </Link>
                
                <div className="border-t pt-6">
                  <p className="text-gray-600 mb-4 text-lg">
                    Ainda não é assinante?
                  </p>
                  <Link to="/subscription">
                    <Button variant="outline" className="w-full h-12 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-lg font-bold rounded-xl transform hover:scale-105 transition-all duration-300">
                      Assinar SALUS - 30 dias grátis
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Test Users Info */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">🔑 Usuários de Teste Disponíveis:</h4>
                <div className="text-sm text-blue-700 space-y-2">
                  <div className="p-2 bg-white rounded border">
                    <p><strong>📧 admin.basico@teste.com</strong></p>
                    <p>🔐 Senha: <code className="bg-gray-100 px-1 rounded">123456</code></p>
                  </div>
                  <div className="p-2 bg-white rounded border">
                    <p><strong>📧 admin.profissional@teste.com</strong></p>
                    <p>🔐 Senha: <code className="bg-gray-100 px-1 rounded">123456</code></p>
                  </div>
                  <div className="p-2 bg-white rounded border">
                    <p><strong>📧 admin.enterprise@teste.com</strong></p>
                    <p>🔐 Senha: <code className="bg-gray-100 px-1 rounded">123456</code></p>
                  </div>
                </div>
                <p className="text-xs text-blue-600 mt-2">
                  💡 Estes usuários são criados automaticamente no primeiro login
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm">
              © 2024 SALUS - Healthcare Platform. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
