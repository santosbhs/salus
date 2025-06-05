
import React from 'react';
import { Calendar, Users, Clock, FileText, BarChart3, Activity } from 'lucide-react';
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
      title: 'Pacientes Ativos',
      value: '127',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Consultas Hoje',
      value: '8',
      icon: Calendar,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Atendimentos do Mês',
      value: '89',
      icon: Activity,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Próxima Consulta',
      value: '14:30',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const upcomingAppointments = [
    { time: '09:00', patient: 'Maria Silva', type: 'Consulta', status: 'confirmado' },
    { time: '10:30', patient: 'Pedro Santos', type: 'Retorno', status: 'confirmado' },
    { time: '11:00', patient: 'Ana Costa', type: 'Exame', status: 'pendente' },
    { time: '14:00', patient: 'José Oliveira', type: 'Consulta', status: 'confirmado' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Bem-vindo ao SALUS</h2>
            <p className="text-blue-100 text-lg">Sua plataforma de gestão médica</p>
          </div>
          <Badge className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-4 py-2">
            Demo
          </Badge>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
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
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800">Próximos Agendamentos</CardTitle>
            <CardDescription>Agenda para hoje</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-bold text-blue-700 bg-white px-2 py-1 rounded">
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
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800">Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start h-12" variant="outline" onClick={() => onNavigate('triagem')}>
              <Activity className="mr-3 h-5 w-5 text-red-600" />
              Nova Triagem
            </Button>
            <Button className="w-full justify-start h-12" variant="outline" onClick={() => onNavigate('novo-atendimento')}>
              <FileText className="mr-3 h-5 w-5 text-blue-600" />
              Novo Atendimento
            </Button>
            <Button className="w-full justify-start h-12" variant="outline">
              <BarChart3 className="mr-3 h-5 w-5 text-green-600" />
              Relatórios
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
