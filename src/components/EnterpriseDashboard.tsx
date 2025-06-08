
import React, { useState, useEffect } from 'react';
import { Calendar, Users, Clock, FileText, BarChart3, Activity, Stethoscope, UserPlus, Shield, Building2, LogOut } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/hooks/useAuth';
import { useTriagem } from '@/hooks/useTriagem';

const EnterpriseDashboard = ({ onNavigate, selectedPlan, onPlanChange }) => {
  const [pacientesAguardando, setPacientesAguardando] = useState([]);
  const [loadingTriagens, setLoadingTriagens] = useState(true);
  const { logout } = useAuth();
  const { getTriagens } = useTriagem();

  useEffect(() => {
    const loadTriagens = async () => {
      setLoadingTriagens(true);
      try {
        const triagens = await getTriagens();
        // Ordenar por prioridade da classificação Manchester
        const ordemPrioridade = {
          'vermelho': 1,
          'laranja': 2,
          'amarelo': 3,
          'verde': 4,
          'azul': 5
        };
        
        const triagensSorted = triagens.sort((a, b) => {
          return ordemPrioridade[a.classificacao_manchester] - ordemPrioridade[b.classificacao_manchester];
        });
        
        setPacientesAguardando(triagensSorted);
      } catch (error) {
        console.error('Erro ao carregar triagens:', error);
      } finally {
        setLoadingTriagens(false);
      }
    };

    loadTriagens();
  }, [getTriagens]);

  const handleNavigate = (section) => {
    if (section === 'pacientes') {
      onNavigate('patients');
    } else if (section === 'agenda') {
      onNavigate('appointments');
    } else if (section === 'relatorios') {
      onNavigate('consultation-history');
    }
  };

  const handleIniciarAtendimento = (paciente) => {
    // Navegar para o atendimento com o paciente selecionado
    onNavigate('novo-atendimento');
  };

  const getClassificacaoColor = (classificacao) => {
    switch (classificacao) {
      case 'vermelho': return 'bg-red-500';
      case 'laranja': return 'bg-orange-500';
      case 'amarelo': return 'bg-yellow-500';
      case 'verde': return 'bg-green-500';
      case 'azul': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getTempoEspera = (createdAt) => {
    const agora = new Date();
    const criacao = new Date(createdAt);
    const diffMs = agora.getTime() - criacao.getTime();
    const diffMinutos = Math.floor(diffMs / (1000 * 60));
    
    if (diffMinutos < 60) {
      return `${diffMinutos} min`;
    } else {
      const horas = Math.floor(diffMinutos / 60);
      const minutos = diffMinutos % 60;
      return `${horas}h ${minutos}min`;
    }
  };

  const enterpriseStats = [
    {
      title: 'Pacientes Cadastrados',
      value: '2.450',
      limit: 'Ilimitado',
      icon: Users,
      color: 'text-purple-700',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Agendamentos Hoje',
      value: '45',
      limit: 'Ilimitado',
      icon: Calendar,
      color: 'text-purple-700',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Consultas do Mês',
      value: '1.250',
      limit: 'Ilimitado',
      icon: Activity,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Equipe Médica',
      value: '25',
      limit: 'Ilimitado',
      icon: Stethoscope,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Unidades',
      value: '3',
      limit: 'Ilimitado',
      icon: Building2,
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
    { time: '08:30', patient: 'Maria Silva', doctor: 'Dr. João - Cardiologia', unit: 'Unidade Centro', type: 'Consulta', status: 'confirmado' },
    { time: '09:00', patient: 'Pedro Santos', doctor: 'Dra. Ana - Neurologia', unit: 'Unidade Norte', type: 'Retorno', status: 'confirmado' },
    { time: '09:30', patient: 'Ana Costa', doctor: 'Dr. Carlos - Ortopedia', unit: 'Unidade Centro', type: 'Cirurgia', status: 'confirmado' },
    { time: '10:00', patient: 'José Oliveira', doctor: 'Dra. Maria - Pediatria', unit: 'Unidade Sul', type: 'Consulta', status: 'pendente' },
    { time: '10:30', patient: 'Fernanda Lima', doctor: 'Dr. Paulo - Dermatologia', unit: 'Unidade Centro', type: 'Procedimento', status: 'confirmado' },
  ];

  const enterpriseFeatures = [
    'Pacientes ilimitados',
    'Sistema de triagem completo',
    'Profissionais ilimitados',
    'Múltiplas unidades',
    'Relatórios corporativos',
    'API personalizada',
    'Integração com sistemas',
    'Suporte 24/7',
    'Backup em tempo real',
    'Conformidade LGPD/HIPAA',
  ];

  return (
    <div className="space-y-6">
      {/* Plan Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Plano Enterprise</h2>
            <p className="text-purple-100 text-lg">Para grandes organizações de saúde</p>
            <p className="text-purple-200 text-sm mt-2">Pacientes ilimitados • Profissionais ilimitados • Múltiplas unidades</p>
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
              <Button
                onClick={logout}
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-red-200" onClick={() => onNavigate('triagem')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Stethoscope className="mr-2 h-5 w-5 text-red-600" />
              Triagem Corporativa
            </CardTitle>
            <CardDescription>
              Sistema avançado multi-unidades
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
              Atendimento Integrado
            </CardTitle>
            <CardDescription>
              Sistema completo multi-especialidades
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
              Gestão de Equipes
            </CardTitle>
            <CardDescription>
              Profissionais e unidades
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
              Gerenciar Equipes
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
              Gestão corporativa de pacientes
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
            parseFloat(stat.value.replace('%', '')) : 100;
          
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
                  {stat.limit === 'Ilimitado' && 'Sem limites'}
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
        {/* Agenda */}
        <Card className="border-purple-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-purple-800">
              <Calendar className="mr-2 h-5 w-5" />
              Agenda Corporativa - Múltiplas Unidades
            </CardTitle>
            <CardDescription>Agendamentos de toda a organização</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-100">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-bold text-purple-700 bg-white px-2 py-1 rounded">
                      {appointment.time}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{appointment.patient}</p>
                      <p className="text-xs text-gray-600">{appointment.doctor}</p>
                      <p className="text-xs text-purple-600">{appointment.unit} • {appointment.type}</p>
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

        {/* Pacientes Aguardando Atendimento */}
        <Card className="border-purple-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-purple-800">Pacientes Aguardando</CardTitle>
            <CardDescription>Fila de atendimento por prioridade (todas as unidades)</CardDescription>
          </CardHeader>
          <CardContent>
            {loadingTriagens ? (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600 mx-auto"></div>
                <p className="text-sm text-gray-600 mt-2">Carregando...</p>
              </div>
            ) : pacientesAguardando.length > 0 ? (
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {pacientesAguardando.map((triagem, index) => (
                  <div 
                    key={triagem.id} 
                    className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-100 cursor-pointer hover:bg-purple-100 transition-colors"
                    onClick={() => handleIniciarAtendimento(triagem)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 ${getClassificacaoColor(triagem.classificacao_manchester)} rounded-full`}></div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{triagem.patientName}</p>
                        <p className="text-xs text-gray-600">{triagem.queixa_principal}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Aguardando</p>
                      <p className="text-xs font-medium text-purple-600">{getTempoEspera(triagem.created_at)}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <Users className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 text-sm">Nenhum paciente aguardando</p>
                <Button 
                  variant="outline" 
                  className="mt-2 text-xs"
                  onClick={() => onNavigate('triagem')}
                >
                  Realizar Triagem
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Analytics and Features */}
        <Card className="border-purple-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-purple-800">Recursos Enterprise</CardTitle>
            <CardDescription>Funcionalidades corporativas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {enterpriseFeatures.slice(0, 8).map((feature, index) => (
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
                  Suporte 24/7 dedicado
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
