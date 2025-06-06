
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import Dashboard from '@/components/Dashboard';
import PatientManagement from '@/components/PatientManagement';
import ProfessionalManagement from '@/components/ProfessionalManagement';
import AppointmentManagement from '@/components/AppointmentManagement';
import NovoAtendimento from '@/components/NovoAtendimento';
import Triagem from '@/components/Triagem';
import ConsultationHistory from '@/components/ConsultationHistory';
import AuthRequired from '@/components/AuthRequired';

const DashboardPage = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const { user } = useAuth();
  const { subscription } = useSubscription();

  const handleNavigate = (view: string) => {
    setCurrentView(view);
  };

  const handleBack = () => {
    setCurrentView('dashboard');
  };

  if (!user) {
    return <AuthRequired />;
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
        return <Dashboard onNavigate={handleNavigate} subscription={subscription} />;
    }
  };

  return renderCurrentView();
};

export default DashboardPage;
