
import React, { useState } from 'react';
import { Calendar, Users, Clock, FileText, BarChart3, Activity, Stethoscope, UserPlus, Building, Shield, Zap, Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const EnterpriseDashboard = ({ onNavigate, selectedPlan, onPlanChange }) => {
  const [selectedUnit, setSelectedUnit] = useState('unidade-1');
  const [units, setUnits] = useState([
    { id: 'unidade-1', name: 'Unidade Centro', address: 'Rua Principal, 123' },
    { id: 'unidade-2', name: 'Unidade Zona Sul', address: 'Av. Sul, 456' },
    { id: 'unidade-3', name: 'Unidade Norte', address: 'Rua Norte, 789' }
  ]);
  const [newUnitName, setNewUnitName] = useState('');
  const [newUnitAddress, setNewUnitAddress] = useState('');

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
      title: 'Equipe de Profissionais',
      value: '15',
      limit: 'Ilimitado',
      icon: Stethoscope,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Unidades Ativas',
      value: units.length.toString(),
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

  const upcomingAppointments = [
    { time: '09:00', patient: 'Maria Silva', doctor: 'Dr. João', unit: 'Centro', type: 'Consulta', status: 'confirmado' },
    { time: '10:30', patient: 'Pedro Santos', doctor: 'Dra. Ana', unit: 'Zona Sul', type: 'Retorno', status: 'confirmado' },
    { time: '11:00', patient: 'Ana Costa', doctor: 'Dr. Carlos', unit: 'Centro', type: 'Exame', status: 'pendente' },
    { time: '14:00', patient: 'José Oliveira', doctor: 'Dra. Maria', unit: 'Norte', type: 'Consulta', status: 'confirmado' },
    { time: '15:30', patient: 'Lucia Santos', doctor: 'Dr. João', unit: 'Centro', type: 'Retorno', status: 'confirmado' },
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

  const handleCreateUnit = () => {
    if (newUnitName && newUnitAddress) {
      const newUnit = {
        id: `unidade-${units.length + 1}`,
        name: newUnitName,
        address: newUnitAddress
      };
      setUnits([...units, newUnit]);
      setNewUnitName('');
      setNewUnitAddress('');
    }
  };

  const currentUnit = units.find(unit => unit.id === selectedUnit);

  return (
    <div className="space-y-6">
      {/* Plan Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Plano Enterprise</h2>
            <p className="text-purple-100 text-lg">Solução completa para grandes organizações</p>
            <p className="text-purple-200 text-sm mt-2">Recursos ilimitados • Múltiplas unidades</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-4">
              <Badge className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-4 py-2">
                Demonstração
              </Badge>
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
            <p className="text-purple-100 text-sm mt-2">R$ 397/mês</p>
          </div>
        </div>
      </div>

      {/* Unit Selector - Enterprise Feature */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Building className="h-6 w-6 text-purple-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Gestão de Unidades</h3>
              <p className="text-sm text-gray-600">Selecione a unidade para visualizar dados específicos</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Select value={selectedUnit} onValueChange={setSelectedUnit}>
              <SelectTrigger className="w-64">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {units.map((unit) => (
                  <SelectItem key={unit.id} value={unit.id}>
                    {unit.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Unidade
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Criar Nova Unidade</DialogTitle>
                  <DialogDescription>
                    Adicione uma nova unidade à sua rede de clínicas
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="unit-name">Nome da Unidade</Label>
                    <Input
                      id="unit-name"
                      value={newUnitName}
                      onChange={(e) => setNewUnitName(e.target.value)}
                      placeholder="Ex: Unidade Barra"
                    />
                  </div>
                  <div>
                    <Label htmlFor="unit-address">Endereço</Label>
                    <Input
                      id="unit-address"
                      value={newUnitAddress}
                      onChange={(e) => setNewUnitAddress(e.target.value)}
                      placeholder="Ex: Av. Principal, 123"
                    />
                  </div>
                  <Button onClick={handleCreateUnit} className="w-full">
                    Criar Unidade
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        {currentUnit && (
          <div className="mt-4 p-4 bg-purple-50 rounded-lg">
            <p className="font-semibold text-purple-900">{currentUnit.name}</p>
            <p className="text-sm text-purple-700">{currentUnit.address}</p>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-red-200" onClick={() => onNavigate('triagem')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Stethoscope className="mr-2 h-5 w-5 text-red-600" />
              Triagem com IA
            </CardTitle>
            <CardDescription>
              Protocolo Manchester com inteligência artificial
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
              Iniciar Triagem
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-purple-200" onClick={() => onNavigate('novo-atendimento')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <FileText className="mr-2 h-5 w-5 text-purple-600" />
              Atendimento Completo
            </CardTitle>
            <CardDescription>
              SOAP com templates personalizados e IA
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
              Novo Atendimento
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-purple-200" onClick={() => onNavigate('professionals')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <UserPlus className="mr-2 h-5 w-5 text-purple-600" />
              Gestão da Equipe
            </CardTitle>
            <CardDescription>
              Controle completo de profissionais e permissões
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
              Gerenciar Equipe
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-purple-200" onClick={() => onNavigate('patients')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Users className="mr-2 h-5 w-5 text-purple-600" />
              Base de Pacientes
            </CardTitle>
            <CardDescription>
              Dados unificados entre todas as unidades
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
              Gerenciar Pacientes
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {enterpriseStats.map((stat, index) => {
          const Icon = stat.icon;
          const percentage = stat.title === 'Taxa de Ocupação' ? 
            parseFloat(stat.value.replace('%', '')) : 
            (parseInt(stat.value.replace(',', '')) / (stat.limit === 'Ilimitado' ? 100 : parseInt(stat.limit))) * 100;
          
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
                  {stat.limit === 'Ilimitado' ? (
                    <span className="text-purple-600 font-medium">Ilimitado</span>
                  ) : (
                    `Limite: ${stat.limit}`
                  )}
                </p>
                {stat.title === 'Taxa de Ocupação' && (
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Agenda Consolidada */}
        <Card className="lg:col-span-2 border-purple-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-purple-800">
              <Calendar className="mr-2 h-5 w-5" />
              Agenda Consolidada - Todas as Unidades
            </CardTitle>
            <CardDescription>Agendamentos de hoje em todas as unidades</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-100">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-bold text-purple-700 bg-white px-2 py-1 rounded">
                      {appointment.time}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{appointment.patient}</p>
                      <p className="text-sm text-gray-600">{appointment.doctor} • {appointment.unit} • {appointment.type}</p>
                    </div>
                  </div>
                  <Badge variant={appointment.status === 'confirmado' ? 'default' : 'secondary'} className="text-xs">
                    {appointment.status === 'confirmado' ? 'Confirmado' : 'Pendente'}
                  </Badge>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800" onClick={() => onNavigate('appointments')}>
              Ver Agenda Completa
            </Button>
          </CardContent>
        </Card>

        {/* Analytics and Features */}
        <div className="space-y-6">
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-purple-800">Analytics Empresariais</CardTitle>
              <CardDescription>Dashboards e relatórios avançados</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <BarChart3 className="mr-2 h-4 w-4" />
                Dashboard BI
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Activity className="mr-2 h-4 w-4" />
                KPIs Avançados
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Relatórios Custom
              </Button>
            </CardContent>
          </Card>

          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-purple-800">Recursos Premium</CardTitle>
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
    </div>
  );
};

export default EnterpriseDashboard;
