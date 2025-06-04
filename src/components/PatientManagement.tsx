
import React, { useState, useEffect } from 'react';
import { ArrowLeft, User, Search, Plus, Edit, Eye, Phone, Mail, Calendar, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import PatientForm from './PatientForm';
import PatientEditForm from './PatientEditForm';
import { usePatients, Patient } from '@/hooks/usePatients';

const PatientManagement = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [convenioFilter, setConvenioFilter] = useState('todos');
  const [statusFilter, setStatusFilter] = useState('ativo');
  const { getPatients, deletePatient, loading } = usePatients();

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    console.log('Carregando pacientes...');
    const data = await getPatients();
    console.log('Pacientes carregados:', data);
    setPatients(data);
  };

  const handleSavePatient = async () => {
    await loadPatients();
    setShowForm(false);
    setShowEditForm(false);
    setSelectedPatient(null);
  };

  const handleEditPatient = (patient: Patient) => {
    setSelectedPatient(patient);
    setShowEditForm(true);
  };

  const handleDeletePatient = async (patientId: string) => {
    console.log('Excluindo paciente:', patientId);
    const success = await deletePatient(patientId);
    if (success) {
      await loadPatients();
    }
  };

  const filteredPatients = patients.filter(patient => {
    // Filtro de busca
    const matchesSearch = (
      patient.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.telefone?.includes(searchTerm) ||
      patient.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.cpf?.includes(searchTerm)
    );
    
    // Filtro de convênio
    const matchesConvenio = convenioFilter === 'todos' || 
      patient.convenio?.toLowerCase() === convenioFilter.toLowerCase();
    
    // Filtro de status
    const matchesStatus = statusFilter === 'todos' || 
      patient.status?.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesConvenio && matchesStatus;
  });

  if (showForm) {
    return <PatientForm onBack={() => setShowForm(false)} onSave={handleSavePatient} />;
  }

  if (showEditForm && selectedPatient) {
    return <PatientEditForm 
      patient={selectedPatient} 
      onBack={() => { setShowEditForm(false); setSelectedPatient(null); }} 
      onSave={handleSavePatient} 
    />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="mr-4 hover:bg-green-50"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center">
                <User className="text-white h-7 w-7" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Gestão de Pacientes</h1>
                <p className="text-gray-600">{patients.length} pacientes cadastrados</p>
              </div>
            </div>
          </div>

          <Button 
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
          >
            <Plus className="mr-2 h-4 w-4" />
            Novo Paciente
          </Button>
        </div>

        {/* Filtros e Busca */}
        <Card className="mb-6 shadow-lg border-green-200">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Buscar paciente por nome, telefone, email ou CPF..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Select 
                  defaultValue="todos"
                  value={convenioFilter}
                  onValueChange={setConvenioFilter}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Convênio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os convênios</SelectItem>
                    <SelectItem value="particular">Particular</SelectItem>
                    <SelectItem value="unimed">Unimed</SelectItem>
                    <SelectItem value="bradesco">Bradesco Saúde</SelectItem>
                    <SelectItem value="sulamerica">SulAmérica</SelectItem>
                    <SelectItem value="amil">Amil</SelectItem>
                  </SelectContent>
                </Select>
                <Select 
                  defaultValue="ativo"
                  value={statusFilter}
                  onValueChange={setStatusFilter}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ativo">Ativos</SelectItem>
                    <SelectItem value="inativo">Inativos</SelectItem>
                    <SelectItem value="todos">Todos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estado de carregamento */}
        {loading && (
          <div className="text-center py-8">
            <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Carregando pacientes...</p>
          </div>
        )}

        {/* Lista de Pacientes */}
        {!loading && (
          <div className="grid gap-4">
            {filteredPatients.map((patient) => (
              <Card key={patient.id} className="shadow-lg hover:shadow-xl transition-all duration-300 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-green-700" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{patient.nome}</h3>
                        <p className="text-gray-600">{patient.idade} anos • {patient.convenio || 'Particular'}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="flex items-center text-gray-600 mb-1">
                          <Phone className="h-4 w-4 mr-1" />
                          <span className="text-sm">{patient.telefone}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Mail className="h-4 w-4 mr-1" />
                          <span className="text-sm">{patient.email || 'Não informado'}</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Última consulta</p>
                        <div className="flex items-center text-gray-900 font-medium">
                          <Calendar className="h-4 w-4 mr-1" />
                          {patient.ultimaConsulta || 'Nunca'}
                        </div>
                      </div>
                      
                      <Badge className={`${
                        patient.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      } hover:bg-green-200`}>
                        {patient.status || 'Ativo'}
                      </Badge>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleEditPatient(patient)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
                              <AlertDialogDescription>
                                Tem certeza que deseja excluir o paciente {patient.nome}? Esta ação não pode ser desfeita.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction 
                                onClick={() => handleDeletePatient(patient.id)}
                                className="bg-red-600 hover:bg-red-700"
                              >
                                Excluir
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                        <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800" size="sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          Agendar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!loading && filteredPatients.length === 0 && (
          <Card className="shadow-lg border-green-200">
            <CardContent className="text-center py-12">
              <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Nenhum paciente encontrado
              </h3>
              <p className="text-gray-600">
                Tente ajustar os filtros ou cadastre um novo paciente
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PatientManagement;
