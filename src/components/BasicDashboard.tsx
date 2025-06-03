
import React from 'react';
import { Calendar, Users, Clock, FileText, AlertCircle, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const BasicDashboard = ({ onNavigate }) => {
  const basicStats = [
    {
      title: 'Pacientes Cadastrados',
      value: '50',
      limit: '100',
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
    'Cadastro de até 100 pacientes',
    'Agendamentos básicos',
    'Histórico de consultas',
    'Relatórios simples',
  ];

  return (
    <div className="space-y-6">
      {/* Plan Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Plano Básico</h2>
            <p className="text-green-100">Ideal para clínicas pequenas</p>
          </div>
          <Badge className="bg-white text-green-700 hover:bg-gray-100">
            Ativo
          </Badge>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {basicStats.map((stat, index) => {
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
                    className="bg-green-600 h-2 rounded-full" 
                    style={{ width: `${(parseInt(stat.value) / parseInt(stat.limit)) * 100}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>Funcionalidades disponíveis no plano básico</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              className="w-full justify-start" 
              variant="outline"
              onClick={() => onNavigate('patients')}
            >
              <Users className="mr-2 h-4 w-4" />
              Gerenciar Pacientes
            </Button>
            <Button 
              className="w-full justify-start" 
              variant="outline"
              onClick={() => onNavigate('appointments')}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Agendamentos
            </Button>
            <Button 
              className="w-full justify-start" 
              variant="outline"
              onClick={() => onNavigate('history')}
            >
              <FileText className="mr-2 h-4 w-4" />
              Histórico
            </Button>
          </CardContent>
        </Card>

        {/* Plan Features */}
        <Card>
          <CardHeader>
            <CardTitle>Recursos do Plano</CardTitle>
            <CardDescription>O que está incluído no plano básico</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {basicFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <span className="text-sm text-yellow-800">
                  Faça upgrade para acessar mais recursos
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BasicDashboard;
