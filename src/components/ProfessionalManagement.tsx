import React, { useState } from 'react';
import { ArrowLeft, Users, Search, Plus, Edit, Eye, Phone, Mail, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProfessionalForm from './ProfessionalForm';

const ProfessionalManagement = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [professionals, setProfessionals] = useState([
    {
      id: 1,
      nome: 'Dr. João Silva',
      especialidade: 'Cardiologia',
      registro: 'CRM 12345-SP',
      telefone: '(11) 99999-9999',
      email: 'joao@clinica.com',
      status: 'Ativo',
      consultasHoje: 8
    },
    {
      id: 2,
      nome: 'Dra. Maria Santos',
      especialidade: 'Pediatria',
      registro: 'CRM 54321-SP',
      telefone: '(11) 88888-8888',
      email: 'maria@clinica.com',
      status: 'Ativo',
      consultasHoje: 12
    },
    {
      id: 3,
      nome: 'Dr. Carlos Oliveira',
      especialidade: 'Ortopedia',
      registro: 'CRM 67890-SP',
      telefone: '(11) 77777-7777',
      email: 'carlos@clinica.com',
      status: 'Ativo',
      consultasHoje: 5
    },
    {
      id: 4,
      nome: 'Dra. Ana Costa',
      especialidade: 'Nutrição',
      registro: 'CRN 12345-SP',
      telefone: '(11) 66666-6666',
      email: 'ana@clinica.com',
      status: 'Ativo',
      consultasHoje: 3
    }
  ]);

  const handleSaveProfessional = (professionalData) => {
    const newProfessional = {
      id: professionals.length + 1,
      nome: professionalData.nome,
      especialidade: professionalData.especialidade,
      registro: professionalData.registro,
      telefone: professionalData.telefone,
      email: professionalData.email,
      status: 'Ativo',
      consultasHoje: 0
    };
    
    setProfessionals(prev => [...prev, newProfessional]);
    setShowForm(false);
  };

  const filteredProfessionals = professionals.filter(prof =>
    prof.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prof.especialidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prof.registro.includes(searchTerm)
  );

  if (showForm) {
    return <ProfessionalForm onBack={() => setShowForm(false)} onSave={handleSaveProfessional} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="mr-4 hover:bg-emerald-50"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center">
                <Users className="text-white h-7 w-7" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Equipe de Profissionais</h1>
                <p className="text-gray-600">{professionals.length} profissionais cadastrados</p>
              </div>
            </div>
          </div>

          <Button 
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800"
          >
            <Plus className="mr-2 h-4 w-4" />
            Novo Profissional
          </Button>
        </div>

        {/* Filtros e Busca */}
        <Card className="mb-6 shadow-lg border-emerald-200">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Buscar profissional por nome, especialidade ou registro..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Select defaultValue="todas">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Especialidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todas">Todas as especialidades</SelectItem>
                    <SelectItem value="cardiologia">Cardiologia</SelectItem>
                    <SelectItem value="pediatria">Pediatria</SelectItem>
                    <SelectItem value="ortopedia">Ortopedia</SelectItem>
                    <SelectItem value="nutricao">Nutrição</SelectItem>
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

        {/* Lista de Profissionais */}
        <div className="grid gap-4">
          {filteredProfessionals.map((professional) => (
            <Card key={professional.id} className="shadow-lg hover:shadow-xl transition-all duration-300 border-emerald-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center">
                      <Stethoscope className="h-6 w-6 text-emerald-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{professional.nome}</h3>
                      <p className="text-gray-600">{professional.especialidade} • {professional.registro}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="flex items-center text-gray-600 mb-1">
                        <Phone className="h-4 w-4 mr-1" />
                        <span className="text-sm">{professional.telefone}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Mail className="h-4 w-4 mr-1" />
                        <span className="text-sm">{professional.email}</span>
                      </div>
                    </div>
                    
                    <div className="text-center bg-emerald-50 rounded-lg p-3">
                      <p className="text-sm text-gray-600">Consultas hoje</p>
                      <p className="text-2xl font-bold text-emerald-700">{professional.consultasHoje}</p>
                    </div>
                    
                    <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                      {professional.status}
                    </Badge>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800" size="sm">
                        Ver Agenda
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProfessionals.length === 0 && (
          <Card className="shadow-lg border-emerald-200">
            <CardContent className="text-center py-12">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Nenhum profissional encontrado
              </h3>
              <p className="text-gray-600">
                Tente ajustar os filtros ou cadastre um novo profissional
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProfessionalManagement;
