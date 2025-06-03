
import React from 'react';
import { Calendar, Users, Clock, FileText, AlertCircle, Activity } from 'lucide-react';
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

  const basicFeatures = [
    'Cadastro de até 50 pacientes',
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
        {/* Quick Actions */}
        <Card className="border-green-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-green-800">Ações Rápidas</CardTitle>
            <CardDescription>Funcionalidades disponíveis no plano básico</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              className="w-full justify-start h-14 text-left bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white" 
              onClick={() => onNavigate('patients')}
            >
              <Users className="mr-3 h-5 w-5" />
              <div>
                <div className="font-semibold">Gerenciar Pacientes</div>
                <div className="text-sm opacity-90">35/50 cadastrados</div>
              </div>
            </Button>
            <Button 
              className="w-full justify-start h-14 text-left" 
              variant="outline"
              onClick={() => onNavigate('appointments')}
            >
              <Calendar className="mr-3 h-5 w-5 text-green-600" />
              <div>
                <div className="font-semibold">Agendamentos</div>
                <div className="text-sm text-gray-600">8 consultas hoje</div>
              </div>
            </Button>
            <Button 
              className="w-full justify-start h-14 text-left" 
              variant="outline"
              onClick={() => onNavigate('history')}
            >
              <FileText className="mr-3 h-5 w-5 text-green-600" />
              <div>
                <div className="font-semibold">Histórico</div>
                <div className="text-sm text-gray-600">45 consultas este mês</div>
              </div>
            </Button>
          </CardContent>
        </Card>

        {/* Plan Features */}
        <Card className="border-green-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-green-800">Recursos do Plano</CardTitle>
            <CardDescription>O que está incluído no plano básico</CardDescription>
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
                    Faça upgrade para o plano Profissional e tenha acesso a até 200 pacientes e 5 profissionais.
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
