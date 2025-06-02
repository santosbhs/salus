
import React, { useState } from 'react';
import { Calendar, Clock, Plus, Edit, Trash2, User, Phone, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';

const AppointmentScheduling = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [statusFilter, setStatusFilter] = useState('todos');
  const [typeFilter, setTypeFilter] = useState('todos');
  const { toast } = useToast();

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: 'Maria Silva',
      cpf: '123.456.789-00',
      phone: '(11) 99999-9999',
      date: '2024-06-03',
      time: '09:00',
      professional: 'Dr. João Silva',
      type: 'primeira',
      status: 'Confirmado',
      insurance: 'convenio',
      notes: 'Primeira consulta - dor no peito'
    },
    {
      id: 2,
      patient: 'Pedro Costa',
      cpf: '987.654.321-00',
      phone: '(11) 77777-7777',
      date: '2024-06-03',
      time: '10:30',
      professional: 'Dra. Maria Santos',
      type: 'retorno',
      status: 'Pendente',
      insurance: 'particular',
      notes: 'Retorno - acompanhamento cefaleia'
    },
    {
      id: 3,
      patient: 'Ana Oliveira',
      cpf: '456.789.123-00',
      phone: '(11) 55555-5555',
      date: '2024-06-04',
      time: '14:00',
      professional: 'Dr. Pedro Oliveira',
      type: 'primeira',
      status: 'Cancelado',
      insurance: 'convenio',
      notes: 'Primeira consulta dermatológica'
    }
  ]);

  const [newAppointment, setNewAppointment] = useState({
    patient: '',
    cpf: '',
    phone: '',
    date: selectedDate,
    time: '',
    professional: '',
    type: 'primeira',
    insurance: 'particular',
    notes: ''
  });

  const professionals = [
    'Dr. João Silva - Clínico Geral',
    'Dra. Maria Santos - Cardiologista',
    'Dr. Pedro Oliveira - Dermatologista',
    'Dra. Ana Costa - Ginecologista'
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ];

  const filteredAppointments = appointments.filter(appointment => {
    const matchesDate = appointment.date === selectedDate;
    const matchesStatus = statusFilter === 'todos' || appointment.status === statusFilter;
    const matchesType = typeFilter === 'todos' || appointment.type === typeFilter;
    return matchesDate && matchesStatus && matchesType;
  });

  const handleAddAppointment = () => {
    if (!newAppointment.patient || !newAppointment.time || !newAppointment.professional) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    const appointment = {
      id: appointments.length + 1,
      ...newAppointment,
      status: 'Confirmado'
    };

    setAppointments([...appointments, appointment]);
    setNewAppointment({
      patient: '',
      cpf: '',
      phone: '',
      date: selectedDate,
      time: '',
      professional: '',
      type: 'primeira',
      insurance: 'particular',
      notes: ''
    });
    setIsAddDialogOpen(false);

    toast({
      title: "Agendamento criado!",
      description: `Consulta agendada para ${newAppointment.patient} em ${newAppointment.date} às ${newAppointment.time}`,
    });
  };

  const handleEditAppointment = () => {
    setAppointments(appointments.map(a => a.id === selectedAppointment.id ? selectedAppointment : a));
    setIsEditDialogOpen(false);
    setSelectedAppointment(null);
    
    toast({
      title: "Agendamento atualizado!",
      description: "As informações do agendamento foram atualizadas com sucesso.",
    });
  };

  const handleDeleteAppointment = (id) => {
    setAppointments(appointments.filter(a => a.id !== id));
    toast({
      title: "Agendamento removido",
      description: "O agendamento foi removido com sucesso.",
    });
  };

  const updateStatus = (id, newStatus) => {
    setAppointments(appointments.map(a => 
      a.id === id ? { ...a, status: newStatus } : a
    ));
    toast({
      title: "Status atualizado",
      description: `Status do agendamento alterado para ${newStatus}`,
    });
  };

  const openEditDialog = (appointment) => {
    setSelectedAppointment({...appointment});
    setIsEditDialogOpen(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmado': return 'bg-green-100 text-green-800';
      case 'Pendente': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelado': return 'bg-red-100 text-red-800';
      case 'Concluído': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'primeira': return 'bg-purple-100 text-purple-800';
      case 'retorno': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Agendamentos</h2>
          <p className="text-gray-600">Gerencie consultas e horários</p>
        </div>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="mr-2 h-4 w-4" />
              Novo Agendamento
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Novo Agendamento</DialogTitle>
              <DialogDescription>
                Agende uma nova consulta para o paciente.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="patient">Nome do Paciente *</Label>
                  <Input
                    id="patient"
                    value={newAppointment.patient}
                    onChange={(e) => setNewAppointment({...newAppointment, patient: e.target.value})}
                    placeholder="Nome completo"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input
                    id="cpf"
                    value={newAppointment.cpf}
                    onChange={(e) => setNewAppointment({...newAppointment, cpf: e.target.value})}
                    placeholder="000.000.000-00"
                  />
                </div>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  value={newAppointment.phone}
                  onChange={(e) => setNewAppointment({...newAppointment, phone: e.target.value})}
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Data *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={newAppointment.date}
                    onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Horário *</Label>
                  <Select onValueChange={(value) => setNewAppointment({...newAppointment, time: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="professional">Profissional *</Label>
                <Select onValueChange={(value) => setNewAppointment({...newAppointment, professional: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {professionals.map((prof) => (
                      <SelectItem key={prof} value={prof}>{prof}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="type">Tipo de Consulta</Label>
                  <Select onValueChange={(value) => setNewAppointment({...newAppointment, type: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Primeira Consulta" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="primeira">Primeira Consulta</SelectItem>
                      <SelectItem value="retorno">Retorno</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="insurance">Tipo de Atendimento</Label>
                  <Select onValueChange={(value) => setNewAppointment({...newAppointment, insurance: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Particular" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="particular">Particular</SelectItem>
                      <SelectItem value="convenio">Convênio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Observações</Label>
                <Input
                  id="notes"
                  value={newAppointment.notes}
                  onChange={(e) => setNewAppointment({...newAppointment, notes: e.target.value})}
                  placeholder="Motivo da consulta, observações..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleAddAppointment}>Agendar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4" />
          <Label htmlFor="date-filter">Data:</Label>
          <Input
            id="date-filter"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-auto"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4" />
          <Label>Status:</Label>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-auto">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="Confirmado">Confirmado</SelectItem>
              <SelectItem value="Pendente">Pendente</SelectItem>
              <SelectItem value="Concluído">Concluído</SelectItem>
              <SelectItem value="Cancelado">Cancelado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Label>Tipo:</Label>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-auto">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="primeira">Primeira Consulta</SelectItem>
              <SelectItem value="retorno">Retorno</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Appointments List */}
      <div className="grid gap-4">
        {filteredAppointments.length === 0 ? (
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-600">Nenhum agendamento encontrado</h3>
              <p className="text-gray-500">Não há agendamentos para a data e filtros selecionados.</p>
            </CardContent>
          </Card>
        ) : (
          filteredAppointments.map((appointment) => (
            <Card key={appointment.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        {getInitials(appointment.patient)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h3 className="font-semibold text-lg">{appointment.patient}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {appointment.time}
                        </span>
                        <span>•</span>
                        <span className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {appointment.professional}
                        </span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Phone className="h-3 w-3 mr-1" />
                          {appointment.phone}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge className={getStatusColor(appointment.status)}>
                          {appointment.status}
                        </Badge>
                        <Badge className={getTypeColor(appointment.type)}>
                          {appointment.type === 'primeira' ? 'Primeira Consulta' : 'Retorno'}
                        </Badge>
                        <Badge variant={appointment.insurance === 'convenio' ? 'outline' : 'secondary'}>
                          {appointment.insurance === 'convenio' ? 'Convênio' : 'Particular'}
                        </Badge>
                      </div>
                      {appointment.notes && (
                        <p className="text-sm text-gray-600 mt-1">{appointment.notes}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Select onValueChange={(value) => updateStatus(appointment.id, value)}>
                      <SelectTrigger className="w-auto">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Confirmado">Confirmado</SelectItem>
                        <SelectItem value="Pendente">Pendente</SelectItem>
                        <SelectItem value="Concluído">Concluído</SelectItem>
                        <SelectItem value="Cancelado">Cancelado</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => openEditDialog(appointment)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDeleteAppointment(appointment.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Editar Agendamento</DialogTitle>
            <DialogDescription>
              Atualize as informações do agendamento.
            </DialogDescription>
          </DialogHeader>
          {selectedAppointment && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-patient">Nome do Paciente</Label>
                  <Input
                    id="edit-patient"
                    value={selectedAppointment.patient}
                    onChange={(e) => setSelectedAppointment({...selectedAppointment, patient: e.target.value})}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-phone">Telefone</Label>
                  <Input
                    id="edit-phone"
                    value={selectedAppointment.phone}
                    onChange={(e) => setSelectedAppointment({...selectedAppointment, phone: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-date">Data</Label>
                  <Input
                    id="edit-date"
                    type="date"
                    value={selectedAppointment.date}
                    onChange={(e) => setSelectedAppointment({...selectedAppointment, date: e.target.value})}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-time">Horário</Label>
                  <Select onValueChange={(value) => setSelectedAppointment({...selectedAppointment, time: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder={selectedAppointment.time} />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="edit-type">Tipo de Consulta</Label>
                <Select onValueChange={(value) => setSelectedAppointment({...selectedAppointment, type: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder={selectedAppointment.type === 'primeira' ? 'Primeira Consulta' : 'Retorno'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="primeira">Primeira Consulta</SelectItem>
                    <SelectItem value="retorno">Retorno</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="edit-notes">Observações</Label>
                <Input
                  id="edit-notes"
                  value={selectedAppointment.notes}
                  onChange={(e) => setSelectedAppointment({...selectedAppointment, notes: e.target.value})}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleEditAppointment}>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AppointmentScheduling;
