
import React, { useState, useEffect } from 'react';
import { Calendar, Users, Clock, FileText, Menu, Bell, Search, ExternalLink, Stethoscope, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { useSubscription } from '@/hooks/useSubscription';
import { supabase } from '@/integrations/supabase/client';
import BasicDashboard from '@/components/BasicDashboard';
import ProfessionalDashboard from '@/components/ProfessionalDashboard';
import EnterpriseDashboard from '@/components/EnterpriseDashboard';
import Dashboard from '@/components/Dashboard';
import PatientManagement from '@/components/PatientManagement';
import AppointmentScheduling from '@/components/AppointmentScheduling';
import MedicalHistory from '@/components/MedicalHistory';
import NovoAtendimento from '@/components/NovoAtendimento';
import ProfessionalManagement from '@/components/ProfessionalManagement';
import Triagem from '@/components/Triagem';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const { status } = useSubscription();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
      
      if (!session?.user) {
        navigate('/login');
      }
    });

    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
      
      if (!session?.user) {
        navigate('/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: Calendar },
    { id: 'triagem', name: 'Triagem', icon: Stethoscope },
    { id: 'novo-atendimento', name: 'Novo Atendimento', icon: FileText },
    { id: 'patients', name: 'Pacientes', icon: Users },
    { id: 'professionals', name: 'Profissionais', icon: Users },
    { id: 'appointments', name: 'Agendamentos', icon: Clock },
    { id: 'history', name: 'Histórico', icon: FileText },
  ];

  const handleNavigate = (tabId) => {
    setActiveTab(tabId);
    setSidebarOpen(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const getDashboardComponent = () => {
    // Se não tem assinatura ativa e não está em trial, redireciona para página de assinatura
    if (!status.subscribed && !status.is_trial_active) {
      navigate('/subscription');
      return null;
    }

    // Renderiza dashboard baseado no plano
    if (status.subscription_tier === 'basic') {
      return <BasicDashboard onNavigate={handleNavigate} />;
    } else if (status.subscription_tier === 'professional') {
      return <ProfessionalDashboard onNavigate={handleNavigate} />;
    } else if (status.subscription_tier === 'enterprise') {
      return <EnterpriseDashboard onNavigate={handleNavigate} />;
    } else {
      // Default dashboard para trial ou casos especiais
      return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  const getRestrictedAccess = (feature: string) => {
    if (status.subscription_tier === 'basic') {
      // Plano básico tem acesso limitado
      if (['triagem', 'professionals'].includes(feature)) {
        return true;
      }
    }
    
    if (status.subscription_tier === 'professional') {
      // Plano profissional tem acesso a quase tudo
      return false;
    }
    
    if (status.subscription_tier === 'enterprise') {
      // Plano enterprise tem acesso a tudo
      return false;
    }
    
    // Trial tem acesso limitado
    if (status.is_trial_active) {
      return ['professionals'].includes(feature);
    }
    
    return true; // Sem acesso se não tem plano
  };

  const getPlanBadgeColor = () => {
    switch (status.subscription_tier) {
      case 'basic':
        return 'bg-green-100 text-green-800';
      case 'professional':
        return 'bg-blue-100 text-blue-800';
      case 'enterprise':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (status.loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 bg-gradient-to-r from-green-700 to-emerald-700 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Zap className="text-white font-bold text-sm h-5 w-5" />
          </div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Redirecionamento será feito pelo useEffect
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-700 to-emerald-700 rounded-lg flex items-center justify-center">
                <Zap className="text-white font-bold text-sm h-5 w-5" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                Salus
              </h1>
              {(status.subscribed || status.is_trial_active) && (
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPlanBadgeColor()}`}>
                  {status.is_trial_active ? 'Trial' : status.subscription_tier?.charAt(0).toUpperCase() + status.subscription_tier?.slice(1)}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/agendar">
              <Button variant="outline" size="sm" className="border-green-600 text-green-700 hover:bg-green-50">
                <ExternalLink className="h-4 w-4 mr-2" />
                Página do Cliente
              </Button>
            </Link>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar pacientes..."
                className="pl-10 w-64"
              />
            </div>
            <Button variant="ghost" size="sm">
              <Bell className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleSignOut}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              Sair
            </Button>
            <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-white">
                {user?.email?.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`bg-white shadow-lg transition-all duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:static z-30 h-[calc(100vh-73px)] w-64 border-r`}>
          <nav className="p-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isRestricted = getRestrictedAccess(item.id);
              
              return (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? 'default' : 'ghost'}
                  className={`w-full justify-start ${
                    activeTab === item.id 
                      ? 'bg-gradient-to-r from-green-700 to-emerald-700 text-white hover:from-green-800 hover:to-emerald-800' 
                      : isRestricted
                      ? 'hover:bg-gray-50 text-gray-400 cursor-not-allowed'
                      : 'hover:bg-green-50 hover:text-green-700'
                  }`}
                  onClick={() => !isRestricted && handleNavigate(item.id)}
                  disabled={isRestricted}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.name}
                  {isRestricted && (
                    <span className="ml-auto text-xs bg-gray-200 text-gray-600 px-1 rounded">
                      Premium
                    </span>
                  )}
                </Button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:ml-0">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'dashboard' && getDashboardComponent()}
            {activeTab === 'triagem' && !getRestrictedAccess('triagem') && <Triagem />}
            {activeTab === 'novo-atendimento' && !getRestrictedAccess('novo-atendimento') && <NovoAtendimento />}
            {activeTab === 'patients' && !getRestrictedAccess('patients') && <PatientManagement />}
            {activeTab === 'professionals' && !getRestrictedAccess('professionals') && <ProfessionalManagement />}
            {activeTab === 'appointments' && !getRestrictedAccess('appointments') && <AppointmentScheduling />}
            {activeTab === 'history' && !getRestrictedAccess('history') && <MedicalHistory />}
            
            {/* Show upgrade message for restricted features */}
            {getRestrictedAccess(activeTab) && activeTab !== 'dashboard' && (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Recurso Premium
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Este recurso está disponível apenas para planos pagos.
                  </p>
                  <Link to="/subscription">
                    <Button className="bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800">
                      Fazer Upgrade
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
