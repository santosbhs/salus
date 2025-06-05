
import React from 'react';
import { Calendar, Users, Clock, FileText, BarChart3, Activity, Plus, Search, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Dashboard = ({ onNavigate }) => {
  const handleNavigate = (section) => {
    if (section === 'pacientes') {
      onNavigate('patients');
    } else if (section === 'agenda') {
      onNavigate('appointments');
    } else if (section === 'relatorios') {
      onNavigate('novo-atendimento');
    }
  };

  const stats = [
    {
      title: 'Pacientes Hoje',
      value: '8',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      action: () => onNavigate('appointments')
    },
    {
      title: 'Próxima Consulta',
      value: '14:30',
      subtitle: 'Maria Silva',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      action: () => onNavigate('appointments')
    },
    {
      title: 'Atendimentos',
      value: '89',
      subtitle: 'Este mês',
      icon: Activity,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      action: () => onNavigate('novo-atendimento')
    },
    {
      title: 'Pendências',
      value: '3',
      subtitle: 'Retornos',
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      action: () => onNavigate('patients')
    },
  ];

  const todaySchedule = [
    { time: '09:00', patient: 'Maria Silva', type: 'Consulta', status: 'Em andamento', urgent: false },
    { time: '10:30', patient: 'Pedro Santos', type: 'Retorno', status: 'Aguardando', urgent: false },
    { time: '11:00', patient: 'Ana Costa', type: 'Urgência', status: 'Atrasado', urgent: true },
    { time: '14:00', patient: 'José Oliveira', type: 'Consulta', status: 'Confirmado', urgent: false },
    { time: '15:30', patient: 'Carla Lima', type: 'Exame', status: 'Confirmado', urgent: false },
  ];

  const quickActions = [
    {
      title: 'Novo Atendimento',
      description: 'Iniciar consulta',
      icon: FileText,
      color: 'bg-blue-600 hover:bg-blue-700',
      action: () => onNavigate('novo-atendimento')
    },
    {
      title: 'Triagem',
      description: 'Classificar paciente',
      icon: Activity,
      color: 'bg-red-600 hover:bg-red-700',
      action: () => onNavigate('triagem')
    },
    {
      title: 'Cadastrar Paciente',
      description: 'Novo registro',
      icon: Plus,
      color: 'bg-green-600 hover:bg-green-700',
      action: () => onNavigate('patients')
    },
    {
      title: 'Buscar Paciente',
      description: 'Localizar registro',
      icon: Search,
      color: 'bg-purple-600 hover:bg-purple-700',
      action: () => onNavigate('patients')
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Em andamento': return 'bg-blue-100 text-blue-800';
      case 'Atrasado': return 'bg-red-100 text-red-800';
      case 'Aguardando': return 'bg-yellow-100 text-yellow-800';
      case 'Confirmado': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-1">Painel de Controle</h2>
            <p className="text-blue-100">Terça-feira, 05 de Junho de 2025</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-blue-200">Próxima consulta em</p>
            <p className="text-xl font-bold">25 min</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={stat.action}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                {stat.subtitle && (
                  <p className="text-xs text-gray-600 mt-1">{stat.subtitle}</p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Button
              key={index}
              onClick={action.action}
              className={`h-20 flex-col space-y-2 ${action.color} text-white`}
            >
              <Icon className="h-6 w-6" />
              <div className="text-center">
                <div className="text-sm font-medium">{action.title}</div>
                <div className="text-xs opacity-90">{action.description}</div>
              </div>
            </Button>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <Card className="lg:col-span-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800 flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Agenda de Hoje
            </CardTitle>
            <CardDescription>5 consultas agendadas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {todaySchedule.map((appointment, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-3 rounded-lg border-l-4 ${
                    appointment.urgent ? 'border-l-red-500 bg-red-50' : 'border-l-blue-500 bg-blue-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-bold text-blue-700 bg-white px-2 py-1 rounded min-w-[50px]">
                      {appointment.time}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{appointment.patient}</p>
                      <p className="text-sm text-gray-600">{appointment.type}</p>
                    </div>
                  </div>
                  <Badge className={`text-xs ${getStatusColor(appointment.status)}`}>
                    {appointment.status}
                  </Badge>
                </div>
              ))}
            </div>
            <Button 
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800" 
              onClick={() => onNavigate('appointments')}
            >
              Ver Agenda Completa
            </Button>
          </CardContent>
        </Card>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-blue-800">Atividade Recente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Consulta finalizada - Maria Silva</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Novo paciente cadastrado</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-600">Receita prescrita - Pedro Santos</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Reports */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-blue-800">Relatórios Rápidos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start h-10" size="sm">
                <BarChart3 className="mr-2 h-4 w-4 text-blue-600" />
                Atendimentos do Dia
              </Button>
              <Button variant="outline" className="w-full justify-start h-10" size="sm">
                <FileText className="mr-2 h-4 w-4 text-green-600" />
                Receitas Emitidas
              </Button>
              <Button variant="outline" className="w-full justify-start h-10" size="sm">
                <Users className="mr-2 h-4 w-4 text-purple-600" />
                Novos Pacientes
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
