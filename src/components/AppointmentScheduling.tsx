
import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Search, Plus, Edit, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AppointmentScheduling = ({ onBack }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [appointments] = useState([
    {
      id: 1,
      hora: '08:00',
      paciente: 'Maria Silva',
      profissional: 'Dr. João Silva',
      tipo: 'Consulta',
      status: 'Confirmado',
      duracao: '30min'
    },
    {
      id: 2,
      hora: '08:30',
      paciente: 'Pedro Santos',
      profissional: 'Dr. João Silva',
      tipo: 'Retorno',
      status: 'Pendente',
      duracao: '30min'
    },
    {
      id: 3,
      hora: '09:00',
      paciente: 'Ana Costa',
      profissional: 'Dra. Maria Santos',
      tipo: 'Consulta',
      status: 'Confirmado',
      duracao: '45min'
    },
    {
      id: 4,
      hora: '10:00',
      paciente: 'Carlos Oliveira',
      profissional: 'Dr. João Silva',
      tipo: 'Exame',
      status: 'Realizado',
      duracao: '30min'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmado':
        return 'bg-green-100 text-green-800';
      case 'Pendente':
        return 'bg-yellow-100 text-yellow-800';
      case 'Realizado':
        return 'bg-blue-100 text-blue-800';
      case 'Cancelado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="mr-4 hover:bg-blue-50"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <Calendar className="text-white h-7 w-7" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Agendamentos</h1>
                <p className="text-gray-600">{appointments.length} consultas agendadas para hoje</p>
              </div>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                <Plus className="mr-2 h-4 w-4" />
                Novo Agendamento
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Novo Agendamento</DialogTitle>
                <DialogDescription>
                  Agende uma nova consulta para o paciente
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="paciente">Paciente</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecione o paciente" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maria">Maria Silva</SelectItem>
                        <SelectItem value="pedro">Pedro Santos</SelectItem>
                        <SelectItem value="ana">Ana Costa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="profissional">Profissional</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecione o profissional" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="joao">Dr. João Silva</SelectItem>
                        <SelectItem value="maria_dr">Dra. Maria Santos</SelectItem>
                        <SelectItem value="carlos">Dr. Carlos Oliveira</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="data">Data</Label>
                    <Input id="data" type="date" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="hora">Horário</Label>
                    <Input id="hora" type="time" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="duracao">Duração</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 minutos</SelectItem>
                        <SelectItem value="45">45 minutos</SelectItem>
                        <SelectItem value="60">60 minutos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="tipo">Tipo de Consulta</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consulta">Consulta</SelectItem>
                        <SelectItem value="retorno">Retorno</SelectItem>
                        <SelectItem value="exame">Exame</SelectItem>
                        <SelectItem value="procedimento">Procedimento</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="convenio">Convênio</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecione o convênio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="particular">Particular</SelectItem>
                        <SelectItem value="unimed">Unimed</SelectItem>
                        <SelectItem value="bradesco">Bradesco Saúde</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="observacoes">Observações</Label>
                  <Input id="observacoes" placeholder="Observações sobre a consulta" className="mt-1" />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Cancelar</Button>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700">
                  Agendar Consulta
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filtros */}
        <Card className="mb-6 shadow-lg border-blue-200">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div>
                <Label htmlFor="data-filtro">Data</Label>
                <Input
                  id="data-filtro"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="busca">Buscar</Label>
                <div className="relative mt-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="busca"
                    placeholder="Buscar por paciente ou profissional..."
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="profissional-filtro">Profissional</Label>
                <Select>
                  <SelectTrigger className="mt-1 w-48">
                    <SelectValue placeholder="Todos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os profissionais</SelectItem>
                    <SelectItem value="joao">Dr. João Silva</SelectItem>
                    <SelectItem value="maria">Dra. Maria Santos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lista de Agendamentos */}
        <div className="grid gap-4">
          {appointments.map((appointment) => (
            <Card key={appointment.id} className="shadow-lg hover:shadow-xl transition-all duration-300 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <Clock className="h-5 w-5 text-blue-700 mx-auto mb-1" />
                        <span className="text-xs font-semibold text-blue-800">{appointment.hora}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{appointment.paciente}</h3>
                      <p className="text-gray-600">{appointment.profissional} • {appointment.tipo}</p>
                      <p className="text-sm text-gray-500">Duração: {appointment.duracao}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Badge className={getStatusColor(appointment.status)}>
                      {appointment.status}
                    </Badge>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      {appointment.status === 'Confirmado' && (
                        <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800" size="sm">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Atender
                        </Button>
                      )}
                      {appointment.status === 'Pendente' && (
                        <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800" size="sm">
                          Confirmar
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {appointments.length === 0 && (
          <Card className="shadow-lg border-blue-200">
            <CardContent className="text-center py-12">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Nenhum agendamento para esta data
              </h3>
              <p className="text-gray-600">
                Selecione outra data ou agende uma nova consulta
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AppointmentScheduling;
