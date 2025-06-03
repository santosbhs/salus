
import React from 'react';
import { Calendar, Users, Clock, FileText, BarChart3, Activity, Stethoscope, UserPlus, Building, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const EnterpriseDashboard = ({ onNavigate }) => {
  const enterpriseStats = [
    {
      title: 'Pacientes Cadastrados',
      value: '2,450',
      limit: 'Ilimitado',
      icon: Users,
      color: 'text-purple-700',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Agendamentos Hoje',
      value: '87',
      limit: 'Ilimitado',
      icon: Calendar,
      color: 'text-purple-700',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Consultas do Mês',
      value: '1,250',
      limit: 'Ilimitado',
      icon: Activity,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Profissionais',
      value: '15',
      limit: 'Ilimitado',
      icon: Stethoscope,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Unidades',
      value: '3',
      limit: 'Ilimitado',
      icon: Building,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Taxa de Ocupação',
      value: '92%',
      limit: '100%',
      icon: BarChart3,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  const enterpriseFeatures = [
    'Pacientes ilimitados',
    'Sistema de triagem avançado',
    'Múltiplas unidades',
    'Relatórios empresariais',
    'API personalizada',
    'Suporte prioritário',
    'Backup automático',
    'Integrações avançadas',
  ];

  return (
    <div className="space-y-6">
      {/* Plan Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Plano Enterprise</h2>
            <p className="text-purple-100">Solução completa para grandes organizações</p>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <Badge className="bg-white text-purple-700 hover:bg-gray-100">
              Premium
            </Badge>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enterpriseStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-purple-200 hover:shadow-lg transition-shadow">
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
                  {stat.limit !== 'Ilimitado' && `Limite: ${stat.limit}`}
                  {stat.limit === 'Ilimitado' && (
                    <span className="text-purple-600 font-medium">Ilimitado</span>
                  )}
                </p>
                {stat.limit !== 'Ilimitado' && (
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full" 
                      style={{ width: stat.title === 'Taxa de Ocupação' ? stat.value : '75%' }}
                    ></div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Quick Actions */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="mr-2 h-5 w-5 text-purple-600" />
              Ações Avançadas
            </CardTitle>
            <CardDescription>Recursos exclusivos do plano enterprise</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Button 
              className="justify-start bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800" 
              onClick={() => onNavigate('triagem')}
            >
              <Stethoscope className="mr-2 h-4 w-4" />
              Triagem Avançada
            </Button>
            <Button 
              className="justify-start bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              onClick={() => onNavigate('novo-atendimento')}
            >
              <FileText className="mr-2 h-4 w-4" />
              Atendimento
            </Button>
            <Button 
              className="justify-start" 
              variant="outline"
              onClick={() => onNavigate('professionals')}
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Equipe Médica
            </Button>
            <Button 
              className="justify-start" 
              variant="outline"
            >
              <Building className="mr-2 h-4 w-4" />
              Múltiplas Unidades
            </Button>
          </CardContent>
        </Card>

        {/* Analytics */}
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>Relatórios empresariais</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              className="w-full justify-start" 
              variant="outline"
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Dashboard BI
            </Button>
            <Button 
              className="w-full justify-start" 
              variant="outline"
            >
              <Activity className="mr-2 h-4 w-4" />
              KPIs Avançados
            </Button>
            <Button 
              className="w-full justify-start" 
              variant="outline"
            >
              <FileText className="mr-2 h-4 w-4" />
              Relatórios Custom
            </Button>
          </CardContent>
        </Card>

        {/* Premium Features */}
        <Card>
          <CardHeader>
            <CardTitle>Recursos Premium</CardTitle>
            <CardDescription>Exclusivos do Enterprise</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {enterpriseFeatures.slice(0, 6).map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-purple-600" />
                <span className="text-sm text-purple-800 font-medium">
                  Suporte 24/7 incluso
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnterpriseDashboard;
