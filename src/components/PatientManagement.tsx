
import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, Eye, Phone, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarInitials } from '@/components/ui/avatar';

const PatientManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: 'Maria Silva',
      cpf: '123.456.789-00',
      phone: '(11) 99999-9999',
      email: 'maria@email.com',
      birthDate: '1985-03-15',
      lastVisit: '2024-05-20',
      status: 'Ativo',
      nextAppointment: '2024-06-10 14:00'
    },
    {
      id: 2,
      name: 'João Santos',
      cpf: '987.654.321-00',
      phone: '(11) 88888-8888',
      email: 'joao@email.com',
      birthDate: '1978-08-22',
      lastVisit: '2024-05-18',
      status: 'Ativo',
      nextAppointment: null
    },
    {
      id: 3,
      name: 'Ana Costa',
      cpf: '456.789.123-00',
      phone: '(11) 77777-7777',
      email: 'ana@email.com',
      birthDate: '1992-12-05',
      lastVisit: '2024-04-30',
      status: 'Inativo',
      nextAppointment: '2024-06-12 09:30'
    }
  ]);

  const [newPatient, setNewPatient] = useState({
    name: '',
    cpf: '',
    phone: '',
    email: '',
    birthDate: ''
  });

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.cpf.includes(searchTerm) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPatient = () => {
    const patient = {
      id: patients.length + 1,
      ...newPatient,
      lastVisit: null,
      status: 'Ativo',
      nextAppointment: null
    };
    setPatients([...patients, patient]);
    setNewPatient({ name: '', cpf: '', phone: '', email: '', birthDate: '' });
    setIsAddDialogOpen(false);
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Gestão de Pacientes</h2>
          <p className="text-gray-600">Cadastre e gerencie informações dos pacientes</p>
        </div>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="mr-2 h-4 w-4" />
              Novo Paciente
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Cadastrar Novo Paciente</DialogTitle>
              <DialogDescription>
                Preencha as informações do paciente abaixo.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  value={newPatient.name}
                  onChange={(e) => setNewPatient({...newPatient, name: e.target.value})}
                  placeholder="Digite o nome completo"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cpf">CPF</Label>
                <Input
                  id="cpf"
                  value={newPatient.cpf}
                  onChange={(e) => setNewPatient({...newPatient, cpf: e.target.value})}
                  placeholder="000.000.000-00"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  value={newPatient.phone}
                  onChange={(e) => setNewPatient({...newPatient, phone: e.target.value})}
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={newPatient.email}
                  onChange={(e) => setNewPatient({...newPatient, email: e.target.value})}
                  placeholder="email@exemplo.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="birthDate">Data de Nascimento</Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={newPatient.birthDate}
                  onChange={(e) => setNewPatient({...newPatient, birthDate: e.target.value})}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleAddPatient}>Cadastrar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Buscar por nome, CPF ou email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Patients List */}
      <div className="grid gap-4">
        {filteredPatients.map((patient) => (
          <Card key={patient.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      {getInitials(patient.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{patient.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{patient.cpf}</span>
                      <span className="flex items-center">
                        <Phone className="mr-1 h-3 w-3" />
                        {patient.phone}
                      </span>
                      <span className="flex items-center">
                        <Mail className="mr-1 h-3 w-3" />
                        {patient.email}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <Badge variant={patient.status === 'Ativo' ? 'default' : 'secondary'}>
                      {patient.status}
                    </Badge>
                    {patient.nextAppointment && (
                      <p className="text-sm text-gray-600 mt-1 flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        Próx: {new Date(patient.nextAppointment).toLocaleDateString('pt-BR')}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">Nenhum paciente encontrado</p>
        </div>
      )}
    </div>
  );
};

export default PatientManagement;
