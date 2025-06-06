
import React from 'react';
import { Calendar, Users, Clock, FileText, BarChart3, Activity, Stethoscope, UserPlus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ProfessionalDashboard = ({ onNavigate, selectedPlan, onPlanChange }) => {
  const handleNavigate = (section) => {
    if (section === 'pacientes') {
      onNavigate('patients');
    } else if (section === 'agenda') {
      onNavigate('appointments');
    } else if (section === 'relatorios') {
      onNavigate('consultation-history');
    }
  };

  const professionalStats = [
    {
      title: 'Pacientes Cadastrados',
      value: '0',
      limit: '200',
      icon: Users,
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Agendamentos Hoje',
      value: '0',
      limit: '50',
      icon: Calendar,
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Consultas do Mês',
      value: '0',
      limit: '300',
      icon: Activity,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Equipe de Profissionais',
      value: '0',
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
            <div className="flex items-center space-x-4">
              <Badge className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-4 py-2">
                Demonstração
              </Badge>
              {/* Seletor de Plano para demonstração */}
              <div className="bg-white/10 rounded-lg p-2">
                <Select value={selectedPlan} onValueChange={onPlanChange}>
                  <SelectTrigger className="w-[180px] bg-transparent border-white/20 text-white">
                    <SelectValue placeholder="Ver Plano" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Plano Básico</SelectItem>
                    <SelectItem value="professional">Plano Profissional</SelectItem>
                    <SelectItem value="enterprise">Plano Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <p className="text-blue-100 text-sm mt-2">R$ 197/mês</p>
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
            <CardDescription>Histórico de consultas realizadas</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => handleNavigate('relatorios')}>Ver Histórico</Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions - All Active */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-red-200" onClick={() => onNavigate('triagem')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Stethoscope className="mr-2 h-5 w-5 text-red-600" />
              Triagem Avançada
            </CardTitle>
            <CardDescription>
              Classificação de risco com protocolo Manchester
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
              Iniciar Triagem
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-blue-200" onClick={() => onNavigate('novo-atendimento')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <FileText className="mr-2 h-5 w-5 text-blue-600" />
              Atendimento SOAP
            </CardTitle>
            <CardDescription>
              Anamnese completa e prescrições
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              Novo Atendimento
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-blue-200" onClick={() => onNavigate('professionals')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <UserPlus className="mr-2 h-5 w-5 text-blue-600" />
              Equipe de Profissionais
            </CardTitle>
            <CardDescription>
              Gerencie sua equipe médica
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              Gerenciar Equipe
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-blue-200" onClick={() => onNavigate('patients')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Users className="mr-2 h-5 w-5 text-blue-600" />
              Pacientes
            </CardTitle>
            <CardDescription>
              Cadastro e gestão de pacientes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              Gerenciar Pacientes
            </Button>
          </CardContent>
        </Card>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Agenda Vazia */}
        <Card className="border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800 flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Agenda de Hoje
            </CardTitle>
            <CardDescription>Nenhum agendamento para hoje</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Agenda vazia
              </h3>
              <p className="text-gray-600 mb-4">
                Comece agendando consultas para seus pacientes
              </p>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800" onClick={() => onNavigate('appointments')}>
                Criar Agendamento
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Analytics and Features */}
        <div className="space-y-6">
          <Card className="border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800">Relatórios Avançados</CardTitle>
              <CardDescription>Análises disponíveis no plano profissional</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start h-12" variant="outline">
                <BarChart3 className="mr-3 h-5 w-5 text-blue-600" />
                Relatórios Mensais
              </Button>
              <Button className="w-full justify-start h-12" variant="outline">
                <Activity className="mr-3 h-5 w-5 text-blue-600" />
                Estatísticas de Atendimento
              </Button>
              <Button className="w-full justify-start h-12" variant="outline">
                <Clock className="mr-3 h-5 w-5 text-blue-600" />
                Tempo de Atendimento
              </Button>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800">Recursos Incluídos</CardTitle>
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
    </div>
  );
};

export default ProfessionalDashboard;
