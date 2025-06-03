import React from 'react';
import { Calendar, Users, Clock, TrendingUp, Activity, AlertCircle, UserPlus, FileText, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Dashboard = ({ onNavigate }) => {
  const stats = [
    {
      title: 'Pacientes Cadastrados',
      value: '1,234',
      change: '+12%',
      icon: Users,
      color: 'text-black',
      bgColor: 'bg-gray-100',
    },
    {
      title: 'Agendamentos Hoje',
      value: '24',
      change: '+5%',
      icon: Calendar,
      color: 'text-gray-800',
      bgColor: 'bg-gray-100',
    },
    {
      title: 'Consultas Realizadas',
      value: '18',
      change: '+8%',
      icon: Activity,
      color: 'text-black',
      bgColor: 'bg-gray-100',
    },
    {
      title: 'Taxa de Ocupação',
      value: '85%',
      change: '+3%',
      icon: TrendingUp,
      color: 'text-gray-800',
      bgColor: 'bg-gray-100',
    },
  ];

  const upcomingAppointments = [
    { time: '09:00', patient: 'Maria Silva', type: 'Consulta', doctor: 'Dr. João' },
    { time: '10:30', patient: 'Pedro Santos', type: 'Retorno', doctor: 'Dra. Ana' },
    { time: '14:00', patient: 'Ana Costa', type: 'Exame', doctor: 'Dr. Carlos' },
    { time: '15:30', patient: 'José Oliveira', type: 'Consulta', doctor: 'Dra. Maria' },
  ];

  const alerts = [
    { type: 'urgent', message: 'Paciente Maria Silva aguardando há 15 minutos' },
    { type: 'info', message: '3 agendamentos confirmados para amanhã' },
    { type: 'warning', message: 'Estoque de materiais baixo' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-black to-gray-800 rounded-lg p-6 text-white">
        <div className="flex items-center mb-4">
          <Zap className="h-8 w-8 text-white mr-3" />
          <h2 className="text-2xl font-bold">Bem-vindo ao Flash Clinic</h2>
        </div>
        <p className="text-gray-200">
          Seus atendimentos em um flash!
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('novo-atendimento')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <FileText className="mr-2 h-5 w-5 text-black" />
              Novo Atendimento
            </CardTitle>
            <CardDescription>
              Inicie uma nova consulta com anamnese SOAP
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black">
              Iniciar Atendimento
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('patients')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <UserPlus className="mr-2 h-5 w-5 text-gray-800" />
              Novo Paciente
            </CardTitle>
            <CardDescription>
              Cadastre um novo paciente no sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
              Cadastrar Paciente
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('professionals')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Users className="mr-2 h-5 w-5 text-black" />
              Profissionais
            </CardTitle>
            <CardDescription>
              Gerencie os profissionais da clínica
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
              Gerenciar Profissionais
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-gray-600 font-medium">
                  {stat.change} em relação ao mês passado
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Próximos Agendamentos
            </CardTitle>
            <CardDescription>
              Consultas agendadas para hoje
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-medium text-black">
                      {appointment.time}
                    </div>
                    <div>
                      <p className="font-medium">{appointment.patient}</p>
                      <p className="text-sm text-gray-500">{appointment.doctor}</p>
                    </div>
                  </div>
                  <Badge variant="secondary">
                    {appointment.type}
                  </Badge>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black" onClick={() => onNavigate('appointments')}>
              Ver Todos os Agendamentos
            </Button>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="mr-2 h-5 w-5" />
              Alertas e Notificações
            </CardTitle>
            <CardDescription>
              Informações importantes da clínica
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className={`p-3 rounded-lg border-l-4 ${
                  alert.type === 'urgent' ? 'bg-red-50 border-red-500' :
                  alert.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                  'bg-blue-50 border-blue-500'
                }`}>
                  <p className="text-sm">{alert.message}</p>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black">
              Ver Todas as Notificações
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
