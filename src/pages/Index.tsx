
import React, { useState } from 'react';
import { Calendar, Users, Clock, FileText, Menu, Bell, Search, ExternalLink, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Dashboard from '@/components/Dashboard';
import PatientManagement from '@/components/PatientManagement';
import AppointmentScheduling from '@/components/AppointmentScheduling';
import MedicalHistory from '@/components/MedicalHistory';
import NovoAtendimento from '@/components/NovoAtendimento';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: Calendar },
    { id: 'novo-atendimento', name: 'Novo Atendimento', icon: Stethoscope },
    { id: 'patients', name: 'Pacientes', icon: Users },
    { id: 'professionals', name: 'Profissionais', icon: User },
    { id: 'appointments', name: 'Agendamentos', icon: Clock },
    { id: 'history', name: 'Histórico', icon: FileText },
  ];

  const handleNavigate = (tabId) => {
    setActiveTab(tabId);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">⚡</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Flash Clinic
              </h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/agendar">
              <Button variant="outline" size="sm">
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
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">DR</span>
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
              return (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => handleNavigate(item.id)}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:ml-0">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'dashboard' && <Dashboard onNavigate={handleNavigate} />}
            {activeTab === 'novo-atendimento' && <NovoAtendimento />}
            {activeTab === 'patients' && <PatientManagement />}
            {activeTab === 'professionals' && <ProfessionalManagement />}
            {activeTab === 'appointments' && <AppointmentScheduling />}
            {activeTab === 'history' && <MedicalHistory />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
