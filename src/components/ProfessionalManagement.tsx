import React, { useState } from 'react';
import { User, Plus, Edit, Trash2, UserCheck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';

const ProfessionalManagement = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const { toast } = useToast();

  const [professionals, setProfessionals] = useState([
    {
      id: 1,
      name: 'Dr. João Silva',
      registroTipo: 'CRM',
      registroNumero: 'CRM/SP 123456',
      specialty: 'Clínico Geral',
      phone: '(11) 99999-8888',
      email: 'joao.silva@flashclinic.com',
      status: 'Ativo',
      availableHours: ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30']
    },
    {
      id: 2,
      name: 'Dra. Maria Santos',
      registroTipo: 'CRM',
      registroNumero: 'CRM/SP 789012',
      specialty: 'Cardiologista',
      phone: '(11) 77777-6666',
      email: 'maria.santos@flashclinic.com',
      status: 'Ativo',
      availableHours: ['09:00', '09:30', '10:00', '10:30', '14:00', '14:30', '15:00', '15:30']
    }
  ]);

  const [newProfessional, setNewProfessional] = useState({
    name: '',
    registroTipo: '',
    registroNumero: '',
    specialty: '',
    phone: '',
    email: '',
    availableHours: []
  });

  const registroTipos = [
    { value: 'CRM', label: 'CRM - Médico' },
    { value: 'CRO', label: 'CRO - Dentista' },
    { value: 'CRN', label: 'CRN - Nutricionista' },
    { value: 'CREFITO', label: 'CREFITO - Fisioterapeuta' },
    { value: 'COFFITO', label: 'COFFITO - Terapeuta Ocupacional' },
    { value: 'CRP', label: 'CRP - Psicólogo' },
    { value: 'COREN', label: 'COREN - Enfermeiro' },
    { value: 'CRF', label: 'CRF - Farmacêutico' },
    { value: 'CREFONO', label: 'CREFONO - Fonoaudiólogo' }
  ];

  const specialties = [
    'Clínico Geral',
    'Cardiologista',
    'Dermatologista',
    'Ginecologista',
    'Pediatra',
    'Ortopedista',
    'Oftalmologista',
    'Neurologista',
    'Psiquiatra',
    'Endocrinologista',
    'Dentista',
    'Nutricionista',
    'Fisioterapeuta',
    'Psicólogo',
    'Enfermeiro',
    'Terapeuta Ocupacional',
    'Fonoaudiólogo'
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'
  ];

  const handleAddProfessional = () => {
    if (!newProfessional.name || !newProfessional.registroTipo || !newProfessional.registroNumero || !newProfessional.specialty) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    const professional = {
      id: professionals.length + 1,
      ...newProfessional,
      status: 'Ativo'
    };

    setProfessionals([...professionals, professional]);
    setNewProfessional({
      name: '',
      registroTipo: '',
      registroNumero: '',
      specialty: '',
      phone: '',
      email: '',
      availableHours: []
    });
    setIsAddDialogOpen(false);

    toast({
      title: "Profissional cadastrado!",
      description: `${newProfessional.name} foi adicionado com sucesso.`,
    });
  };

  const handleEditProfessional = () => {
    setProfessionals(professionals.map(p => p.id === selectedProfessional.id ? selectedProfessional : p));
    setIsEditDialogOpen(false);
    setSelectedProfessional(null);
    
    toast({
      title: "Profissional atualizado!",
      description: "As informações do profissional foram atualizadas com sucesso.",
    });
  };

  const handleDeleteProfessional = (id) => {
    setProfessionals(professionals.filter(p => p.id !== id));
    toast({
      title: "Profissional removido",
      description: "O profissional foi removido com sucesso.",
    });
  };

  const toggleStatus = (id) => {
    setProfessionals(professionals.map(p => 
      p.id === id ? { ...p, status: p.status === 'Ativo' ? 'Inativo' : 'Ativo' } : p
    ));
  };

  const openEditDialog = (professional) => {
    setSelectedProfessional({...professional});
    setIsEditDialogOpen(true);
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  const handleHourToggle = (hour, isNew = false) => {
    if (isNew) {
      const updatedHours = newProfessional.availableHours.includes(hour)
        ? newProfessional.availableHours.filter(h => h !== hour)
        : [...newProfessional.availableHours, hour];
      setNewProfessional({...newProfessional, availableHours: updatedHours});
    } else {
      const updatedHours = selectedProfessional.availableHours.includes(hour)
        ? selectedProfessional.availableHours.filter(h => h !== hour)
        : [...selectedProfessional.availableHours, hour];
      setSelectedProfessional({...selectedProfessional, availableHours: updatedHours});
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Profissionais</h2>
          <p className="text-gray-600">Gerencie os profissionais da clínica</p>
        </div>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Profissional
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Novo Profissional</DialogTitle>
              <DialogDescription>
                Cadastre um novo profissional na clínica.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    value={newProfessional.name}
                    onChange={(e) => setNewProfessional({...newProfessional, name: e.target.value})}
                    placeholder="Dr. João Silva"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="registroTipo">Tipo de Registro *</Label>
                  <Select onValueChange={(value) => setNewProfessional({...newProfessional, registroTipo: value, registroNumero: ''})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      {registroTipos.map((tipo) => (
                        <SelectItem key={tipo.value} value={tipo.value}>{tipo.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="registroNumero">Número do Registro *</Label>
                <Input
                  id="registroNumero"
                  value={newProfessional.registroNumero}
                  onChange={(e) => setNewProfessional({...newProfessional, registroNumero: e.target.value})}
                  placeholder={
                    newProfessional.registroTipo === 'CRM' ? 'CRM/SP 123456' :
                    newProfessional.registroTipo === 'CRO' ? 'CRO/SP 12345' :
                    newProfessional.registroTipo === 'CRN' ? 'CRN/SP 1234' :
                    newProfessional.registroTipo === 'CREFITO' ? 'CREFITO-3/123456-F' :
                    newProfessional.registroTipo === 'CRP' ? 'CRP 06/123456' :
                    newProfessional.registroTipo === 'COREN' ? 'COREN-SP 123456' :
                    'Digite o número do registro'
                  }
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="specialty">Especialidade *</Label>
                  <Select onValueChange={(value) => setNewProfessional({...newProfessional, specialty: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    value={newProfessional.phone}
                    onChange={(e) => setNewProfessional({...newProfessional, phone: e.target.value})}
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={newProfessional.email}
                  onChange={(e) => setNewProfessional({...newProfessional, email: e.target.value})}
                  placeholder="profissional@flashclinic.com"
                />
              </div>

              <div className="grid gap-2">
                <Label>Horários Disponíveis</Label>
                <div className="grid grid-cols-4 gap-2 max-h-40 overflow-y-auto p-2 border rounded">
                  {timeSlots.map((hour) => (
                    <div key={hour} className="flex items-center space-x-2">
                      <Checkbox
                        id={`hour-${hour}`}
                        checked={newProfessional.availableHours.includes(hour)}
                        onCheckedChange={() => handleHourToggle(hour, true)}
                      />
                      <Label htmlFor={`hour-${hour}`} className="text-sm">{hour}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleAddProfessional}>Cadastrar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Professionals List */}
      <div className="grid gap-4">
        {professionals.map((professional) => (
          <Card key={professional.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      {getInitials(professional.name)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h3 className="font-semibold text-lg">{professional.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{professional.registroNumero}</span>
                      <span>•</span>
                      <span>{professional.specialty}</span>
                      {professional.phone && (
                        <>
                          <span>•</span>
                          <span>{professional.phone}</span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant={professional.status === 'Ativo' ? 'default' : 'secondary'}>
                        {professional.status}
                      </Badge>
                      <Badge variant="outline">
                        <Clock className="h-3 w-3 mr-1" />
                        {professional.availableHours.length} horários
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleStatus(professional.id)}
                  >
                    <UserCheck className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => openEditDialog(professional)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDeleteProfessional(professional.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Editar Profissional</DialogTitle>
            <DialogDescription>
              Atualize as informações do profissional.
            </DialogDescription>
          </DialogHeader>
          {selectedProfessional && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-name">Nome Completo</Label>
                  <Input
                    id="edit-name"
                    value={selectedProfessional.name}
                    onChange={(e) => setSelectedProfessional({...selectedProfessional, name: e.target.value})}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-registroTipo">Tipo de Registro</Label>
                  <Select onValueChange={(value) => setSelectedProfessional({...selectedProfessional, registroTipo: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder={selectedProfessional.registroTipo} />
                    </SelectTrigger>
                    <SelectContent>
                      {registroTipos.map((tipo) => (
                        <SelectItem key={tipo.value} value={tipo.value}>{tipo.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="edit-registroNumero">Número do Registro</Label>
                <Input
                  id="edit-registroNumero"
                  value={selectedProfessional.registroNumero}
                  onChange={(e) => setSelectedProfessional({...selectedProfessional, registroNumero: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-specialty">Especialidade</Label>
                  <Select onValueChange={(value) => setSelectedProfessional({...selectedProfessional, specialty: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder={selectedProfessional.specialty} />
                    </SelectTrigger>
                    <SelectContent>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-phone">Telefone</Label>
                  <Input
                    id="edit-phone"
                    value={selectedProfessional.phone}
                    onChange={(e) => setSelectedProfessional({...selectedProfessional, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="edit-email">Email</Label>
                <Input
                  id="edit-email"
                  type="email"
                  value={selectedProfessional.email}
                  onChange={(e) => setSelectedProfessional({...selectedProfessional, email: e.target.value})}
                />
              </div>

              <div className="grid gap-2">
                <Label>Horários Disponíveis</Label>
                <div className="grid grid-cols-4 gap-2 max-h-40 overflow-y-auto p-2 border rounded">
                  {timeSlots.map((hour) => (
                    <div key={hour} className="flex items-center space-x-2">
                      <Checkbox
                        id={`edit-hour-${hour}`}
                        checked={selectedProfessional.availableHours.includes(hour)}
                        onCheckedChange={() => handleHourToggle(hour, false)}
                      />
                      <Label htmlFor={`edit-hour-${hour}`} className="text-sm">{hour}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleEditProfessional}>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfessionalManagement;
