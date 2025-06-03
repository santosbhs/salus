
import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Phone, Mail, User, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';

const PatientManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isHistoryDialogOpen, setIsHistoryDialogOpen] = useState(false);
  const [isEditHistoryDialogOpen, setIsEditHistoryDialogOpen] = useState(false);

  const [patients, setPatients] = useState([
    {
      id: 1,
      name: 'Maria Silva',
      cpf: '123.456.789-00',
      phone: '(11) 99999-9999',
      email: 'maria@email.com',
      birthDate: '1985-03-15',
      address: 'Rua das Flores, 123 - São Paulo, SP',
      bloodType: 'O+',
      allergies: 'Penicilina',
      emergencyContact: 'João Silva - (11) 88888-8888',
      lastVisit: '2024-05-15',
      status: 'Ativo',
      insurance: 'convenio',
      comorbidities: 'Hipertensão arterial, Diabetes tipo 2',
      continuousMedications: 'Losartana 50mg, Metformina 850mg',
      previousExams: 'ECG (2024-05-10) - Normal, Glicemia (2024-05-12) - 140mg/dL',
      historico: [
        { tipo: 'Consulta', descricao: 'Consulta cardiológica', data: '2024-05-15' },
        { tipo: 'Exame', descricao: 'ECG normal', data: '2024-05-10' }
      ]
    },
    {
      id: 2,
      name: 'Pedro Costa',
      cpf: '987.654.321-00',
      phone: '(11) 77777-7777',
      email: 'pedro@email.com',
      birthDate: '1990-07-22',
      address: 'Av. Paulista, 456 - São Paulo, SP',
      bloodType: 'A+',
      allergies: 'Nenhuma',
      emergencyContact: 'Ana Costa - (11) 66666-6666',
      lastVisit: '2024-05-20',
      status: 'Ativo',
      insurance: 'particular',
      comorbidities: 'Nenhuma',
      continuousMedications: 'Nenhuma',
      previousExams: 'Hemograma completo (2024-05-18) - Normal',
      historico: []
    }
  ]);

  const [newPatient, setNewPatient] = useState({
    name: '',
    cpf: '',
    phone: '',
    email: '',
    birthDate: '',
    address: '',
    bloodType: '',
    allergies: '',
    emergencyContact: '',
    insurance: 'particular',
    comorbidities: '',
    continuousMedications: '',
    previousExams: ''
  });

  const [editingPatientHistory, setEditingPatientHistory] = useState({
    comorbidities: '',
    continuousMedications: '',
    allergies: '',
    previousExams: ''
  });

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.cpf.includes(searchTerm) ||
    patient.phone.includes(searchTerm)
  );

  const handleAddPatient = () => {
    const patient = {
      id: patients.length + 1,
      ...newPatient,
      lastVisit: new Date().toISOString().split('T')[0],
      status: 'Ativo',
      historico: []
    };
    setPatients([...patients, patient]);
    setNewPatient({
      name: '',
      cpf: '',
      phone: '',
      email: '',
      birthDate: '',
      address: '',
      bloodType: '',
      allergies: '',
      emergencyContact: '',
      insurance: 'particular',
      comorbidities: '',
      continuousMedications: '',
      previousExams: ''
    });
    setIsAddDialogOpen(false);
  };

  const handleEditPatient = () => {
    setPatients(patients.map(p => p.id === selectedPatient.id ? selectedPatient : p));
    setIsEditDialogOpen(false);
    setSelectedPatient(null);
  };

  const handleEditPatientHistory = () => {
    setPatients(patients.map(p => 
      p.id === selectedPatient.id 
        ? { ...p, ...editingPatientHistory }
        : p
    ));
    setIsEditHistoryDialogOpen(false);
    setSelectedPatient({ ...selectedPatient, ...editingPatientHistory });
  };

  const handleDeletePatient = (id) => {
    setPatients(patients.filter(p => p.id !== id));
  };

  const openEditDialog = (patient) => {
    setSelectedPatient({...patient});
    setIsEditDialogOpen(true);
  };

  const openHistoryDialog = (patient) => {
    setSelectedPatient(patient);
    setIsHistoryDialogOpen(true);
  };

  const openEditHistoryDialog = (patient) => {
    setSelectedPatient(patient);
    setEditingPatientHistory({
      comorbidities: patient.comorbidities || '',
      continuousMedications: patient.continuousMedications || '',
      allergies: patient.allergies || '',
      previousExams: patient.previousExams || ''
    });
    setIsEditHistoryDialogOpen(true);
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
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
          <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Cadastrar Novo Paciente</DialogTitle>
              <DialogDescription>
                Preencha as informações do paciente abaixo.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    value={newPatient.name}
                    onChange={(e) => setNewPatient({...newPatient, name: e.target.value})}
                    placeholder="Nome do paciente"
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
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    value={newPatient.phone}
                    onChange={(e) => setNewPatient({...newPatient, phone: e.target.value})}
                    placeholder="(11) 99999-9999"
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
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="birthDate">Data de Nascimento</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={newPatient.birthDate}
                    onChange={(e) => setNewPatient({...newPatient, birthDate: e.target.value})}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="bloodType">Tipo Sanguíneo</Label>
                  <Select onValueChange={(value) => setNewPatient({...newPatient, bloodType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A+">A+</SelectItem>
                      <SelectItem value="A-">A-</SelectItem>
                      <SelectItem value="B+">B+</SelectItem>
                      <SelectItem value="B-">B-</SelectItem>
                      <SelectItem value="AB+">AB+</SelectItem>
                      <SelectItem value="AB-">AB-</SelectItem>
                      <SelectItem value="O+">O+</SelectItem>
                      <SelectItem value="O-">O-</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="insurance">Tipo de Atendimento</Label>
                  <Select onValueChange={(value) => setNewPatient({...newPatient, insurance: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="particular">Particular</SelectItem>
                      <SelectItem value="convenio">Convênio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="address">Endereço</Label>
                <Input
                  id="address"
                  value={newPatient.address}
                  onChange={(e) => setNewPatient({...newPatient, address: e.target.value})}
                  placeholder="Rua, número, bairro, cidade, estado"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="allergies">Alergias</Label>
                <Textarea
                  id="allergies"
                  value={newPatient.allergies}
                  onChange={(e) => setNewPatient({...newPatient, allergies: e.target.value})}
                  placeholder="Descreva alergias conhecidas"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="comorbidities">Comorbidades</Label>
                <Textarea
                  id="comorbidities"
                  value={newPatient.comorbidities}
                  onChange={(e) => setNewPatient({...newPatient, comorbidities: e.target.value})}
                  placeholder="Doenças crônicas, condições médicas"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="continuousMedications">Medicações de Uso Contínuo</Label>
                <Textarea
                  id="continuousMedications"
                  value={newPatient.continuousMedications}
                  onChange={(e) => setNewPatient({...newPatient, continuousMedications: e.target.value})}
                  placeholder="Medicamentos em uso regular"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="previousExams">Exames Prévios</Label>
                <Textarea
                  id="previousExams"
                  value={newPatient.previousExams}
                  onChange={(e) => setNewPatient({...newPatient, previousExams: e.target.value})}
                  placeholder="Exames realizados e resultados"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="emergencyContact">Contato de Emergência</Label>
                <Input
                  id="emergencyContact"
                  value={newPatient.emergencyContact}
                  onChange={(e) => setNewPatient({...newPatient, emergencyContact: e.target.value})}
                  placeholder="Nome - Telefone"
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
          placeholder="Buscar por nome, CPF ou telefone..."
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
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      {getInitials(patient.name)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h3 className="font-semibold text-lg">{patient.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>CPF: {patient.cpf}</span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Phone className="h-3 w-3 mr-1" />
                        {patient.phone}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Mail className="h-3 w-3 mr-1" />
                        {patient.email}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant={patient.status === 'Ativo' ? 'default' : 'secondary'}>
                        {patient.status}
                      </Badge>
                      <Badge variant={patient.insurance === 'convenio' ? 'outline' : 'secondary'}>
                        {patient.insurance === 'convenio' ? 'Convênio' : 'Particular'}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        Última visita: {new Date(patient.lastVisit).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => openHistoryDialog(patient)}
                  >
                    <FileText className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => openEditDialog(patient)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDeletePatient(patient.id)}
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
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Editar Paciente</DialogTitle>
            <DialogDescription>
              Atualize as informações do paciente.
            </DialogDescription>
          </DialogHeader>
          {selectedPatient && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-name">Nome Completo</Label>
                  <Input
                    id="edit-name"
                    value={selectedPatient.name}
                    onChange={(e) => setSelectedPatient({...selectedPatient, name: e.target.value})}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-cpf">CPF</Label>
                  <Input
                    id="edit-cpf"
                    value={selectedPatient.cpf}
                    onChange={(e) => setSelectedPatient({...selectedPatient, cpf: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-phone">Telefone</Label>
                  <Input
                    id="edit-phone"
                    value={selectedPatient.phone}
                    onChange={(e) => setSelectedPatient({...selectedPatient, phone: e.target.value})}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-email">Email</Label>
                  <Input
                    id="edit-email"
                    type="email"
                    value={selectedPatient.email}
                    onChange={(e) => setSelectedPatient({...selectedPatient, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-insurance">Tipo de Atendimento</Label>
                <Select onValueChange={(value) => setSelectedPatient({...selectedPatient, insurance: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder={selectedPatient.insurance === 'convenio' ? 'Convênio' : 'Particular'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="particular">Particular</SelectItem>
                    <SelectItem value="convenio">Convênio</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-address">Endereço</Label>
                <Input
                  id="edit-address"
                  value={selectedPatient.address}
                  onChange={(e) => setSelectedPatient({...selectedPatient, address: e.target.value})}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-comorbidities">Comorbidades</Label>
                <Textarea
                  id="edit-comorbidities"
                  value={selectedPatient.comorbidities}
                  onChange={(e) => setSelectedPatient({...selectedPatient, comorbidities: e.target.value})}
                  placeholder="Doenças crônicas, condições médicas"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-continuousMedications">Medicações de Uso Contínuo</Label>
                <Textarea
                  id="edit-continuousMedications"
                  value={selectedPatient.continuousMedications}
                  onChange={(e) => setSelectedPatient({...selectedPatient, continuousMedications: e.target.value})}
                  placeholder="Medicamentos em uso regular"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-previousExams">Exames Prévios</Label>
                <Textarea
                  id="edit-previousExams"
                  value={selectedPatient.previousExams}
                  onChange={(e) => setSelectedPatient({...selectedPatient, previousExams: e.target.value})}
                  placeholder="Exames realizados e resultados"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleEditPatient}>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* History Dialog */}
      <Dialog open={isHistoryDialogOpen} onOpenChange={setIsHistoryDialogOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Prontuário do Paciente</DialogTitle>
            <DialogDescription>
              {selectedPatient?.name} - Informações médicas
            </DialogDescription>
          </DialogHeader>
          {selectedPatient && (
            <div className="space-y-6">
              {/* Header com botão de editar */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Informações do Prontuário</h3>
                <Button
                  size="sm"
                  onClick={() => openEditHistoryDialog(selectedPatient)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Editar Histórico
                </Button>
              </div>

              {/* Informações Básicas do Prontuário */}
              <div>
                <div className="grid gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900">Comorbidades</h4>
                    <p className="text-blue-800">{selectedPatient.comorbidities || 'Nenhuma'}</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-900">Medicações de Uso Contínuo</h4>
                    <p className="text-green-800">{selectedPatient.continuousMedications || 'Nenhuma'}</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <h4 className="font-medium text-yellow-900">Alergias</h4>
                    <p className="text-yellow-800">{selectedPatient.allergies || 'Nenhuma'}</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-purple-900">Exames Anteriores</h4>
                    <p className="text-purple-800">{selectedPatient.previousExams || 'Nenhum'}</p>
                  </div>
                </div>
              </div>

              {/* Histórico */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Histórico de Consultas</h3>
                {selectedPatient.historico && selectedPatient.historico.length > 0 ? (
                  <div className="space-y-2">
                    {selectedPatient.historico.map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <Badge variant="outline">{item.tipo}</Badge>
                            <p className="mt-1">{item.descricao}</p>
                          </div>
                          <span className="text-sm text-gray-500">
                            {new Date(item.data).toLocaleDateString('pt-BR')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">Nenhum histórico registrado</p>
                )}
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setIsHistoryDialogOpen(false)}>Fechar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit History Dialog */}
      <Dialog open={isEditHistoryDialogOpen} onOpenChange={setIsEditHistoryDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Editar Histórico Médico</DialogTitle>
            <DialogDescription>
              Atualize as informações médicas do paciente {selectedPatient?.name}.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-comorbidities">Comorbidades</Label>
              <Textarea
                id="edit-comorbidities"
                value={editingPatientHistory.comorbidities}
                onChange={(e) => setEditingPatientHistory({...editingPatientHistory, comorbidities: e.target.value})}
                placeholder="Doenças crônicas, condições médicas"
                rows={3}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-medications">Medicações de Uso Contínuo</Label>
              <Textarea
                id="edit-medications"
                value={editingPatientHistory.continuousMedications}
                onChange={(e) => setEditingPatientHistory({...editingPatientHistory, continuousMedications: e.target.value})}
                placeholder="Medicamentos em uso regular"
                rows={3}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-allergies">Alergias</Label>
              <Textarea
                id="edit-allergies"
                value={editingPatientHistory.allergies}
                onChange={(e) => setEditingPatientHistory({...editingPatientHistory, allergies: e.target.value})}
                placeholder="Alergias conhecidas"
                rows={2}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-previous-exams">Exames Anteriores</Label>
              <Textarea
                id="edit-previous-exams"
                value={editingPatientHistory.previousExams}
                onChange={(e) => setEditingPatientHistory({...editingPatientHistory, previousExams: e.target.value})}
                placeholder="Exames realizados anteriormente pelo paciente (data, tipo de exame, resultado)"
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditHistoryDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleEditPatientHistory}>Salvar Alterações</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PatientManagement;
