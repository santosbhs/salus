
import React, { useState } from 'react';
import { Calendar, Clock, Plus, Filter, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';

const AppointmentScheduling = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: 'Maria Silva',
      patientId: 1,
      date: '2024-06-02',
      time: '09:00',
      duration: 30,
      doctor: 'Dr. João Santos',
      type: 'Consulta',
      status: 'Confirmado',
      notes: 'Consulta de rotina'
    },
    {
      id: 2,
      patientName: 'Pedro Costa',
      patientId: 2,
      date: '2024-06-02',
      time: '10:30',
      duration: 45,
      doctor: 'Dra. Ana Maria',
      type: 'Retorno',
      status: 'Pendente',
      notes: 'Acompanhamento do tratamento'
    },
    {
      id: 3,
      patientName: 'Ana Oliveira',
      patientId: 3,
      date: '2024-06-02',
      time: '14:00',
      duration: 60,
      doctor: 'Dr. Carlos Silva',
      type: 'Exame',
      status: 'Cancelado',
      notes: 'Paciente cancelou por motivos pessoais'
    },
    {
      id: 4,
      patientName: 'José Santos',
      patientId: 4,
      date: '2024-06-02',
      time: '15:30',
      duration: 30,
      doctor: 'Dra. Maria Costa',
      type: 'Consulta',
      status: 'Finalizado',
      notes: 'Consulta realizada com sucesso'
    }
  ]);

  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    date: '',
    time: '',
    duration: 30,
    doctor: '',
    type: '',
    notes: ''
  });

  const doctors = [
    'Dr. João Santos',
    'Dra. Ana Maria',
    'Dr. Carlos Silva',
    'Dra. Maria Costa'
  ];

  const appointmentTypes = [
    'Consulta',
    'Retorno',
    'Exame',
    'Procedimento',
    'Emergência'
  ];

  const filteredAppointments = appointments.filter(appointment => {
    const matchesDate = appointment.date === selectedDate;
    const matchesStatus = filterStatus === 'all' || appointment.status.toLowerCase() === filterStatus;
    return matchesDate && matchesStatus;
  });

  const handleAddAppointment = () => {
    const appointment = {
      id: appointments.length + 1,
      ...newAppointment,
      patientId: appointments.length + 1,
      status: 'Confirmado'
    };
    setAppointments([...appointments, appointment]);
    setNewAppointment({
      patientName: '',
      date: '',
      time: '',
      duration: 30,
      doctor: '',
      type: '',
      notes: ''
    });
    setIsAddDialogOpen(false);
  };

  const updateAppointmentStatus = (id, newStatus) => {
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ));
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Confirmado':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Pendente':
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case 'Cancelado':
        return <XCircle className="h-4 w-4 text-red-600" />;
      case 'Finalizado':
        return <CheckCircle className="h-4 w-4 text-blue-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmado':
        return 'bg-green-100 text-green-800';
      case 'Pendente':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelado':
        return 'bg-red-100 text-red-800';
      case 'Finalizado':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Agendamentos</h2>
          <p className="text-gray-600">Gerencie consultas e procedimentos</p>
        </div>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="mr-2 h-4 w-4" />
              Novo Agendamento
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Novo Agendamento</DialogTitle>
              <DialogDescription>
                Agende uma nova consulta ou procedimento.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="patientName">Paciente</Label>
                <Input
                  id="patientName"
                  value={newAppointment.patientName}
                  onChange={(e) => setNewAppointment({...newAppointment, patientName: e.target.value})}
                  placeholder="Nome do paciente"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Data</Label>
                  <Input
                    id="date"
                    type="date"
                    value={newAppointment.date}
                    onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Horário</Label>
                  <Input
                    id="time"
                    type="time"
                    value={newAppointment.time}
                    onChange={(e) => setNewAppointment({...newAppointment, time: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="doctor">Profissional</Label>
                <Select onValueChange={(value) => setNewAppointment({...newAppointment, doctor: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o profissional" />
                  </SelectTrigger>
                  <SelectContent>
                    {doctors.map((doctor) => (
                      <SelectItem key={doctor} value={doctor}>{doctor}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="type">Tipo</Label>
                  <Select onValueChange={(value) => setNewAppointment({...newAppointment, type: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo de atendimento" />
                    </SelectTrigger>
                    <SelectContent>
                      {appointmentTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="duration">Duração (min)</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={newAppointment.duration}
                    onChange={(e) => setNewAppointment({...newAppointment, duration: parseInt(e.target.value)})}
                    placeholder="30"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="notes">Observações</Label>
                <Textarea
                  id="notes"
                  value={newAppointment.notes}
                  onChange={(e) => setNewAppointment({...newAppointment, notes: e.target.value})}
                  placeholder="Observações sobre o agendamento"
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
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-gray-500" />
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
          <Filter className="h-4 w-4 text-gray-500" />
          <Label htmlFor="status-filter">Status:</Label>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="confirmado">Confirmado</SelectItem>
              <SelectItem value="pendente">Pendente</SelectItem>
              <SelectItem value="finalizado">Finalizado</SelectItem>
              <SelectItem value="cancelado">Cancelado</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Appointments Timeline */}
      <div className="space-y-4">
        {filteredAppointments.length > 0 ? (
          filteredAppointments
            .sort((a, b) => a.time.localeCompare(b.time))
            .map((appointment) => (
              <Card key={appointment.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{appointment.time}</div>
                        <div className="text-sm text-gray-500">{appointment.duration}min</div>
                      </div>
                      
                      <div className="border-l-2 border-gray-200 pl-4">
                        <h3 className="font-semibold text-lg">{appointment.patientName}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <span>{appointment.doctor}</span>
                          <span>•</span>
                          <span>{appointment.type}</span>
                        </div>
                        {appointment.notes && (
                          <p className="text-sm text-gray-500 mt-1">{appointment.notes}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(appointment.status)}
                        <Badge className={getStatusColor(appointment.status)}>
                          {appointment.status}
                        </Badge>
                      </div>
                      
                      <div className="flex space-x-2">
                        {appointment.status === 'Pendente' && (
                          <>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => updateAppointmentStatus(appointment.id, 'Confirmado')}
                            >
                              Confirmar
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => updateAppointmentStatus(appointment.id, 'Cancelado')}
                              className="text-red-600 hover:text-red-700"
                            >
                              Cancelar
                            </Button>
                          </>
                        )}
                        {appointment.status === 'Confirmado' && (
                          <Button 
                            size="sm" 
                            onClick={() => updateAppointmentStatus(appointment.id, 'Finalizado')}
                          >
                            Finalizar
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
        ) : (
          <div className="text-center py-12">
            <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-500">Nenhum agendamento encontrado para esta data</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentScheduling;
