
import React from 'react';
import { Calendar, Users, Clock, FileText, AlertCircle, Activity, Stethoscope, UserPlus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const BasicDashboard = ({ onNavigate }) => {
  const basicStats = [
    {
      title: 'Pacientes Cadastrados',
      value: '35',
      limit: '50',
      icon: Users,
      color: 'text-green-700',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Agendamentos Hoje',
      value: '8',
      limit: '15',
      icon: Calendar,
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
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
    { time: '14:00', patient: 'Ana Costa', type: 'Exame', status: 'pendente' },
    { time: '15:30', patient: 'José Oliveira', type: 'Consulta', status: 'confirmado' },
  ];

  const basicFeatures = [
    'Cadastro de até 50 pacientes',
    'Sistema de triagem completo',
    'Anamnese SOAP',
    'Agendamentos básicos',
    'Histórico de consultas',
    'Relatórios simples',
  ];

  return (
    <div className="space-y-6">
      {/* Plan Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Plano Básico</h2>
            <p className="text-green-100 text-lg">Ideal para consultórios pequenos</p>
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

      {/* Quick Actions - Now with all features active */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-red-200" onClick={() => onNavigate('triagem')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Stethoscope className="mr-2 h-5 w-5 text-red-600" />
              Triagem
            </CardTitle>
            <CardDescription>
              Classificação de risco e avaliação inicial
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
              Iniciar Triagem
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-green-200" onClick={() => onNavigate('novo-atendimento')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <FileText className="mr-2 h-5 w-5 text-green-700" />
              Atendimento SOAP
            </CardTitle>
            <CardDescription>
              Inicie uma nova consulta com anamnese SOAP
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800">
              Iniciar Atendimento
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-green-200" onClick={() => onNavigate('patients')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <UserPlus className="mr-2 h-5 w-5 text-green-600" />
              Pacientes
            </CardTitle>
            <CardDescription>
              Gerencie seus pacientes cadastrados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-green-700 text-green-700 hover:bg-green-700 hover:text-white">
              Gerenciar Pacientes
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-emerald-200" onClick={() => onNavigate('appointments')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Calendar className="mr-2 h-5 w-5 text-emerald-700" />
              Agenda
            </CardTitle>
            <CardDescription>
              Visualize e gerencie agendamentos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white">
              Ver Agenda
            </Button>
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
        {/* Agenda de Hoje */}
        <Card className="border-green-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-green-800 flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Agenda de Hoje
            </CardTitle>
            <CardDescription>Agendamentos para hoje com detalhes dos pacientes</CardDescription>
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
            <Button className="w-full mt-4 bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800" onClick={() => onNavigate('appointments')}>
              Ver Agenda Completa
            </Button>
          </CardContent>
        </Card>

        {/* Plan Features */}
        <Card className="border-green-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-green-800">Recursos Incluídos</CardTitle>
            <CardDescription>Tudo que você tem acesso no plano básico</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {basicFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold text-yellow-800">
                    Quer mais recursos?
                  </span>
                  <p className="text-sm text-yellow-700 mt-1">
                    Faça upgrade para o plano Profissional e tenha acesso a até 200 pacientes, 5 profissionais e relatórios avançados.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BasicDashboard;
