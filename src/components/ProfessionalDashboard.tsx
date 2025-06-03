
import React from 'react';
import { Calendar, Users, Clock, FileText, BarChart3, Activity, Stethoscope, UserPlus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProfessionalDashboard = ({ onNavigate }) => {
  const professionalStats = [
    {
      title: 'Pacientes Cadastrados',
      value: '145',
      limit: '200',
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
    'Cadastro de até 200 pacientes',
    'Sistema de triagem completo',
    'Múltiplos profissionais (até 5)',
    'Relatórios avançados',
    'Agendamento online',
    'Prescrições médicas',
  ];

  return (
    <div className="space-y-6">
      {/* Plan Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Plano Profissional</h2>
            <p className="text-blue-100 text-lg">Para clínicas em crescimento</p>
            <p className="text-blue-200 text-sm mt-2">Até 200 pacientes • Até 5 profissionais</p>
          </div>
          <div className="text-right">
            <Badge className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-4 py-2">
              Ativo
            </Badge>
            <p className="text-blue-100 text-sm mt-2">R$ 197/mês</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {professionalStats.map((stat, index) => {
          const Icon = stat.icon;
          const percentage = (parseInt(stat.value) / parseInt(stat.limit)) * 100;
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-blue-200">
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
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card className="border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800">Ações Avançadas</CardTitle>
            <CardDescription>Funcionalidades do plano profissional</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              className="w-full justify-start h-14 text-left bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800" 
              onClick={() => onNavigate('triagem')}
            >
              <Stethoscope className="mr-3 h-5 w-5" />
              <div>
                <div className="font-semibold">Triagem</div>
                <div className="text-sm opacity-90">Classificação de risco</div>
              </div>
            </Button>
            <Button 
              className="w-full justify-start h-14 text-left" 
              variant="outline"
              onClick={() => onNavigate('novo-atendimento')}
            >
              <FileText className="mr-3 h-5 w-5 text-blue-600" />
              <div>
                <div className="font-semibold">Novo Atendimento</div>
                <div className="text-sm text-gray-600">Anamnese SOAP</div>
              </div>
            </Button>
            <Button 
              className="w-full justify-start h-14 text-left" 
              variant="outline"
              onClick={() => onNavigate('professionals')}
            >
              <UserPlus className="mr-3 h-5 w-5 text-blue-600" />
              <div>
                <div className="font-semibold">Profissionais</div>
                <div className="text-sm text-gray-600">3/5 cadastrados</div>
              </div>
            </Button>
          </CardContent>
        </Card>

        {/* Analytics */}
        <Card className="border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800">Relatórios</CardTitle>
            <CardDescription>Análises disponíveis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              className="w-full justify-start h-12" 
              variant="outline"
            >
              <BarChart3 className="mr-3 h-5 w-5 text-blue-600" />
              Relatórios Mensais
            </Button>
            <Button 
              className="w-full justify-start h-12" 
              variant="outline"
            >
              <Activity className="mr-3 h-5 w-5 text-blue-600" />
              Estatísticas
            </Button>
            <Button 
              className="w-full justify-start h-12" 
              variant="outline"
            >
              <Clock className="mr-3 h-5 w-5 text-blue-600" />
              Tempo de Atendimento
            </Button>
          </CardContent>
        </Card>

        {/* Plan Features */}
        <Card className="border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800">Recursos Incluídos</CardTitle>
            <CardDescription>Tudo que você tem acesso</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {professionalFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">{feature}</span>
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
