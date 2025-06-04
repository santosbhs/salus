import React, { useState } from 'react';
import { ArrowLeft, User, Search, Plus, Edit, Eye, Phone, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PatientForm from './PatientForm';

const PatientManagement = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [patients, setPatients] = useState([
    {
      id: 1,
      nome: 'Maria Silva',
      idade: 45,
      telefone: '(11) 99999-9999',
      email: 'maria@email.com',
      ultimaConsulta: '15/01/2024',
      convenio: 'Unimed',
      status: 'Ativo'
    },
    {
      id: 2,
      nome: 'João Santos',
      idade: 32,
      telefone: '(11) 88888-8888',
      email: 'joao@email.com',
      ultimaConsulta: '12/01/2024',
      convenio: 'Particular',
      status: 'Ativo'
    },
    {
      id: 3,
      nome: 'Ana Costa',
      idade: 28,
      telefone: '(11) 77777-7777',
      email: 'ana@email.com',
      ultimaConsulta: '08/01/2024',
      convenio: 'Bradesco Saúde',
      status: 'Ativo'
    }
  ]);

  const handleSavePatient = (patientData) => {
    const newPatient = {
      id: patients.length + 1,
      nome: patientData.nome,
      idade: new Date().getFullYear() - new Date(patientData.nascimento).getFullYear(),
      telefone: patientData.telefone,
      email: patientData.email,
      ultimaConsulta: 'Nunca',
      convenio: patientData.convenio || 'Particular',
      status: 'Ativo'
    };
    
    setPatients(prev => [...prev, newPatient]);
    setShowForm(false);
  };

  const filteredPatients = patients.filter(patient =>
    patient.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.telefone.includes(searchTerm) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (showForm) {
    return <PatientForm onBack={() => setShowForm(false)} onSave={handleSavePatient} />;
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
                    placeholder="Buscar paciente por nome, telefone ou email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Select defaultValue="todos">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Convênio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os convênios</SelectItem>
                    <SelectItem value="particular">Particular</SelectItem>
                    <SelectItem value="unimed">Unimed</SelectItem>
                    <SelectItem value="bradesco">Bradesco Saúde</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="ativo">
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

        {/* Lista de Pacientes */}
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
                      <p className="text-gray-600">{patient.idade} anos • {patient.convenio}</p>
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
                        <span className="text-sm">{patient.email}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Última consulta</p>
                      <div className="flex items-center text-gray-900 font-medium">
                        <Calendar className="h-4 w-4 mr-1" />
                        {patient.ultimaConsulta}
                      </div>
                    </div>
                    
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                      {patient.status}
                    </Badge>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
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

        {filteredPatients.length === 0 && (
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
