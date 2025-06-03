
import React from 'react';
import { Calendar, Users, Clock, FileText, BarChart3, Activity, Stethoscope, UserPlus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProfessionalDashboard = ({ onNavigate }) => {
  const professionalStats = [
    {
      title: 'Pacientes Cadastrados',
      value: '350',
      limit: '500',
      icon: Users,
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Agendamentos Hoje',
      value: '24',
      limit: '50',
      icon: Calendar,
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Consultas do Mês',
      value: '180',
      limit: '300',
      icon: Activity,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Profissionais',
      value: '3',
      limit: '5',
      icon: Stethoscope,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
  ];

  const professionalFeatures = [
    'Cadastro de até 500 pacientes',
    'Sistema de triagem completo',
    'Múltiplos profissionais',
    'Relatórios avançados',
    'Agendamento online',
    'Prescrições médicas',
  ];

  return (
    <div className="space-y-6">
      {/* Plan Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Plano Profissional</h2>
            <p className="text-blue-100">Para clínicas em crescimento</p>
          </div>
          <Badge className="bg-white text-blue-700 hover:bg-gray-100">
            Ativo
          </Badge>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {professionalStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
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
                <p className="text-xs text-gray-600">
                  Limite: {stat.limit}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(parseInt(stat.value) / parseInt(stat.limit)) * 100}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>Funcionalidades avançadas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              className="w-full justify-start bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800" 
              onClick={() => onNavigate('triagem')}
            >
              <Stethoscope className="mr-2 h-4 w-4" />
              Triagem
            </Button>
            <Button 
              className="w-full justify-start" 
              variant="outline"
              onClick={() => onNavigate('novo-atendimento')}
            >
              <FileText className="mr-2 h-4 w-4" />
              Novo Atendimento
            </Button>
            <Button 
              className="w-full justify-start" 
              variant="outline"
              onClick={() => onNavigate('professionals')}
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Profissionais
            </Button>
          </CardContent>
        </Card>

        {/* Analytics */}
        <Card>
          <CardHeader>
            <CardTitle>Relatórios</CardTitle>
            <CardDescription>Análises disponíveis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              className="w-full justify-start" 
              variant="outline"
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Relatórios Mensais
            </Button>
            <Button 
              className="w-full justify-start" 
              variant="outline"
            >
              <Activity className="mr-2 h-4 w-4" />
              Estatísticas
            </Button>
            <Button 
              className="w-full justify-start" 
              variant="outline"
            >
              <Clock className="mr-2 h-4 w-4" />
              Tempo de Atendimento
            </Button>
          </CardContent>
        </Card>

        {/* Plan Features */}
        <Card>
          <CardHeader>
            <CardTitle>Recursos Incluídos</CardTitle>
            <CardDescription>Tudo que você tem acesso</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {professionalFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;
