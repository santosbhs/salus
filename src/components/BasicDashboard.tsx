
import React from 'react';
import { Calendar, Users, Clock, FileText, BarChart3, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const BasicDashboard = ({ onNavigate }) => {
  const handleNavigate = (section) => {
    if (section === 'pacientes') {
      onNavigate('patients');
    } else if (section === 'agenda') {
      onNavigate('appointments');
    } else if (section === 'relatorios') {
      onNavigate('novo-atendimento');
    }
  };

  const basicStats = [
    {
      title: 'Pacientes Cadastrados',
      value: '32',
      limit: '50',
      icon: Users,
      color: 'text-green-700',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Agendamentos Hoje',
      value: '5',
      limit: '10',
      icon: Calendar,
      color: 'text-green-700',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Consultas do Mês',
      value: '45',
      limit: '100',
      icon: Activity,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ];

  const upcomingAppointments = [
    { time: '09:00', patient: 'Maria Silva', type: 'Consulta', status: 'confirmado' },
    { time: '10:30', patient: 'Pedro Santos', type: 'Retorno', status: 'confirmado' },
    { time: '14:00', patient: 'José Oliveira', type: 'Consulta', status: 'pendente' },
  ];

  const basicFeatures = [
    'Cadastro de até 50 pacientes',
    'Agendamentos básicos',
    'Prontuário eletrônico simples',
    'Relatórios básicos',
  ];

  return (
    <div className="space-y-6">
      {/* Plan Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Plano Básico</h2>
            <p className="text-green-100 text-lg">Ideal para profissionais autônomos</p>
            <p className="text-green-200 text-sm mt-2">Até 50 pacientes • 1 profissional</p>
          </div>
          <div className="text-right">
            <Badge className="bg-white text-green-700 hover:bg-gray-100 text-lg px-4 py-2">
              Ativo
            </Badge>
            <p className="text-green-100 text-sm mt-2">R$ 97/mês</p>
          </div>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <Card>
          <CardHeader>
            <CardTitle>Pacientes</CardTitle>
            <CardDescription>Cadastrar e editar</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => handleNavigate('pacientes')}>Gerenciar</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Agenda</CardTitle>
            <CardDescription>Agendamentos e horários</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => handleNavigate('agenda')}>Ver agenda</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Relatórios</CardTitle>
            <CardDescription>Atestados, receitas e mais</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => handleNavigate('relatorios')}>Acessar</Button>
          </CardContent>
        </Card>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {basicStats.map((stat, index) => {
          const Icon = stat.icon;
          const percentage = (parseInt(stat.value) / parseInt(stat.limit)) * 100;
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-green-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-sm text-gray-600 mb-3">
                  Limite: {stat.limit} ({percentage.toFixed(0)}% usado)
                </p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Agenda */}
        <Card className="border-green-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-green-800 flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Agenda de Hoje
            </CardTitle>
            <CardDescription>Próximos agendamentos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-bold text-green-700 bg-white px-2 py-1 rounded">
                      {appointment.time}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{appointment.patient}</p>
                      <p className="text-sm text-gray-600">{appointment.type}</p>
                    </div>
                  </div>
                  <Badge variant={appointment.status === 'confirmado' ? 'default' : 'secondary'} className="text-xs">
                    {appointment.status === 'confirmado' ? 'Confirmado' : 'Pendente'}
                  </Badge>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800" onClick={() => onNavigate('appointments')}>
              Ver Agenda Completa
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions and Features */}
        <div className="space-y-6">
          <Card className="border-green-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-green-800">Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800" onClick={() => onNavigate('novo-atendimento')}>
                <FileText className="mr-3 h-5 w-5" />
                Novo Atendimento
              </Button>
              <Button className="w-full justify-start h-12" variant="outline" onClick={() => onNavigate('patients')}>
                <Users className="mr-3 h-5 w-5 text-green-600" />
                Gerenciar Pacientes
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-green-800">Recursos Incluídos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {basicFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BasicDashboard;
