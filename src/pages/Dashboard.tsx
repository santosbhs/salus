import React, { useState } from 'react';
import { Zap, LogOut, Settings, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Dashboard from '@/components/Dashboard';
import BasicDashboard from '@/components/BasicDashboard';
import ProfessionalDashboard from '@/components/ProfessionalDashboard';
import EnterpriseDashboard from '@/components/EnterpriseDashboard';
import Triagem from '@/components/Triagem';
import NovoAtendimento from '@/components/NovoAtendimento';
import PatientManagement from '@/components/PatientManagement';
import ProfessionalManagement from '@/components/ProfessionalManagement';
import AppointmentScheduling from '@/components/AppointmentScheduling';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { cleanupAuthState } from '@/utils/authCleanup';

const DashboardPage = () => {
  const [currentView, setCurrentView] = useState('default');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const handleNavigate = (view: string) => {
    setCurrentView(view);
  };

  const handleLogout = async () => {
    try {
      console.log('Iniciando logout...');
      
      // Limpar estado de autenticação
      cleanupAuthState();
      
      // Tentar fazer logout global
      try {
        await supabase.auth.signOut({ scope: 'global' });
        console.log('Logout global realizado');
      } catch (err) {
        console.log('Erro no logout global (continuando):', err);
      }
      
      // Redirecionar para página de login
      window.location.href = '/login';
    } catch (error) {
      console.error('Erro no logout:', error);
      // Mesmo com erro, limpar e redirecionar
      window.location.href = '/login';
    }
  };

  const getPlanBadgeColor = (plan: string) => {
    switch (plan) {
      case 'basic':
        return 'bg-green-600';
      case 'professional':
        return 'bg-blue-600';
      case 'enterprise':
        return 'bg-purple-600';
      default:
        return 'bg-gray-600';
    }
  };

  const getPlanName = (plan: string) => {
    switch (plan) {
      case 'basic':
        return 'Básico';
      case 'professional':
        return 'Profissional';
      case 'enterprise':
        return 'Enterprise';
      default:
        return 'Demo';
    }
  };

  const renderDashboard = () => {
    // Renderizar componentes específicos quando navegado
    if (currentView === 'triagem') {
      return <Triagem onBack={() => setCurrentView('default')} />;
    }
    if (currentView === 'novo-atendimento') {
      return <NovoAtendimento onBack={() => setCurrentView('default')} />;
    }
    if (currentView === 'patients') {
      return <PatientManagement onBack={() => setCurrentView('default')} />;
    }
    if (currentView === 'professionals') {
      return <ProfessionalManagement onBack={() => setCurrentView('default')} />;
    }
    if (currentView === 'appointments') {
      return <AppointmentScheduling onBack={() => setCurrentView('default')} />;
    }

    // Renderizar dashboard baseado no plano
    if (selectedPlan === 'basic') {
      return <BasicDashboard onNavigate={handleNavigate} />;
    } else if (selectedPlan === 'professional') {
      return <ProfessionalDashboard onNavigate={handleNavigate} />;
    } else if (selectedPlan === 'enterprise') {
      return <EnterpriseDashboard onNavigate={handleNavigate} />;
    }
    return <Dashboard onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="text-white h-7 w-7" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">SALUS</h1>
                <p className="text-sm text-gray-600 font-medium">Healthcare Platform</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              {/* Plan Selector for Demo */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Teste os planos:</span>
                <select 
                  value={selectedPlan} 
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
                >
                  <option value="basic">Básico</option>
                  <option value="professional">Profissional</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>

              <Badge className={`${getPlanBadgeColor(selectedPlan)} text-white`}>
                Plano {getPlanName(selectedPlan)}
              </Badge>

              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {renderDashboard()}
      </main>
    </div>
  );
};

export default DashboardPage;
