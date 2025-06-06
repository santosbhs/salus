
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import Dashboard from '@/components/Dashboard';
import BasicDashboard from '@/components/BasicDashboard';
import ProfessionalDashboard from '@/components/ProfessionalDashboard';
import PatientManagement from '@/components/PatientManagement';
import ProfessionalManagement from '@/components/ProfessionalManagement';
import AppointmentManagement from '@/components/AppointmentManagement';
import NovoAtendimento from '@/components/NovoAtendimento';
import Triagem from '@/components/Triagem';
import ConsultationHistory from '@/components/ConsultationHistory';
import AuthRequired from '@/components/AuthRequired';

const DashboardPage = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedPlan, setSelectedPlan] = useState('basic'); // Estado para o plano selecionado
  const { user } = useAuth();
  const { status } = useSubscription();

  const handleNavigate = (view: string) => {
    setCurrentView(view);
  };

  const handleBack = () => {
    setCurrentView('dashboard');
  };

  const handlePlanChange = (plan: string) => {
    setSelectedPlan(plan);
  };

  if (!user) {
    return (
      <AuthRequired>
        <div>Loading...</div>
      </AuthRequired>
    );
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'patients':
        return <PatientManagement onBack={handleBack} />;
      case 'professionals':
        return <ProfessionalManagement onBack={handleBack} />;
      case 'appointments':
        return <AppointmentManagement onBack={handleBack} />;
      case 'novo-atendimento':
        return <NovoAtendimento onBack={handleBack} />;
      case 'triagem':
        return <Triagem onBack={handleBack} />;
      case 'consultation-history':
        return <ConsultationHistory onBack={handleBack} />;
      default:
        // Renderizar dashboard baseado no plano selecionado
        switch (selectedPlan) {
          case 'basic':
            return <BasicDashboard onNavigate={handleNavigate} />;
          case 'professional':
            return <ProfessionalDashboard onNavigate={handleNavigate} />;
          case 'enterprise':
            return <Dashboard onNavigate={handleNavigate} selectedPlan={selectedPlan} onPlanChange={handlePlanChange} />;
          default:
            return <Dashboard onNavigate={handleNavigate} selectedPlan={selectedPlan} onPlanChange={handlePlanChange} />;
        }
    }
  };

  return renderCurrentView();
};

export default DashboardPage;
