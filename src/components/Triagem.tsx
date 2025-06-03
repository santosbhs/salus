
import React, { useState } from 'react';
import { Search, UserCheck, Heart, Thermometer, Save, AlertTriangle, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Triagem = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [triagem, setTriagem] = useState({
    queixaPrincipal: '',
    pressaoArterial: '',
    frequenciaCardiaca: '',
    temperatura: '',
    saturacaoO2: '',
    peso: '',
    altura: '',
    dor: '',
    prioridadeManchesterCor: '',
    prioridadeManchesterTexto: '',
    observacoes: ''
  });

  // Mock de pacientes
  const patients = [
    {
      id: 1,
      name: 'Maria Silva',
      cpf: '123.456.789-00',
      phone: '(11) 99999-9999',
      birthDate: '1985-03-15'
    },
    {
      id: 2,
      name: 'Pedro Costa',
      cpf: '987.654.321-00',
      phone: '(11) 77777-7777',
      birthDate: '1990-07-22'
    }
  ];

  // Escala de Manchester
  const manchesterScale = [
    { cor: 'vermelho', texto: 'Emergência - Atendimento imediato', bgColor: 'bg-red-500', textColor: 'text-white' },
    { cor: 'laranja', texto: 'Muito urgente - 10 minutos', bgColor: 'bg-orange-500', textColor: 'text-white' },
    { cor: 'amarelo', texto: 'Urgente - 60 minutos', bgColor: 'bg-yellow-500', textColor: 'text-black' },
    { cor: 'verde', texto: 'Pouco urgente - 120 minutos', bgColor: 'bg-green-500', textColor: 'text-white' },
    { cor: 'azul', texto: 'Não urgente - 240 minutos', bgColor: 'bg-blue-500', textColor: 'text-white' }
  ];

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.cpf.includes(searchTerm) ||
    patient.phone.includes(searchTerm)
  );

  const selectPatient = (patient) => {
    setSelectedPatient(patient);
    setSearchTerm('');
  };

  const handleSaveTriagem = () => {
    if (!selectedPatient) return;
    
    console.log('Salvando triagem:', {
      patientId: selectedPatient.id,
      triagem,
      timestamp: new Date().toISOString()
    });
    
    // Reset form
    setTriagem({
      queixaPrincipal: '',
      pressaoArterial: '',
      frequenciaCardiaca: '',
      temperatura: '',
      saturacaoO2: '',
      peso: '',
      altura: '',
      dor: '',
      prioridadeManchesterCor: '',
      prioridadeManchesterTexto: '',
      observacoes: ''
    });
    setSelectedPatient(null);
    
    alert('Triagem realizada com sucesso!');
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const getSelectedManchesterScale = () => {
    return manchesterScale.find(scale => scale.cor === triagem.prioridadeManchesterCor);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Triagem de Enfermagem</h2>
        <p className="text-gray-600">Avaliação inicial e classificação de risco - Protocolo de Manchester</p>
      </div>

      {!selectedPatient ? (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="mr-2 h-5 w-5" />
                Localizar Paciente para Triagem
              </CardTitle>
              <CardDescription>
                Digite o nome, CPF ou telefone do paciente
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar paciente..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {searchTerm && (
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {filteredPatients.map((patient) => (
                    <div
                      key={patient.id}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                      onClick={() => selectPatient(patient)}
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                            {getInitials(patient.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{patient.name}</p>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <span>CPF: {patient.cpf}</span>
                            <span>•</span>
                            <span>{patient.phone}</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <UserCheck className="h-4 w-4 mr-2" />
                        Iniciar Triagem
                      </Button>
                    </div>
                  ))}
                  {filteredPatients.length === 0 && (
                    <p className="text-gray-500 text-center py-4">
                      Nenhum paciente encontrado
                    </p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Activity className="mr-2 h-5 w-5" />
                  Triagem - {selectedPatient.name}
                </div>
                <Button variant="outline" onClick={() => setSelectedPatient(null)}>
                  Trocar Paciente
                </Button>
              </CardTitle>
              <CardDescription>
                Idade: {calculateAge(selectedPatient.birthDate)} anos • {new Date().toLocaleDateString('pt-BR')} às {new Date().toLocaleTimeString('pt-BR')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-base font-medium">Queixa Principal</Label>
                  <Textarea
                    value={triagem.queixaPrincipal}
                    onChange={(e) => setTriagem({...triagem, queixaPrincipal: e.target.value})}
                    placeholder="Descreva a queixa principal do paciente..."
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label className="flex items-center">
                      <Heart className="mr-2 h-4 w-4" />
                      Pressão Arterial
                    </Label>
                    <Input
                      value={triagem.pressaoArterial}
                      onChange={(e) => setTriagem({...triagem, pressaoArterial: e.target.value})}
                      placeholder="Ex: 120x80 mmHg"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="flex items-center">
                      <Activity className="mr-2 h-4 w-4" />
                      Frequência Cardíaca
                    </Label>
                    <Input
                      value={triagem.frequenciaCardiaca}
                      onChange={(e) => setTriagem({...triagem, frequenciaCardiaca: e.target.value})}
                      placeholder="Ex: 80 bpm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="flex items-center">
                      <Thermometer className="mr-2 h-4 w-4" />
                      Temperatura
                    </Label>
                    <Input
                      value={triagem.temperatura}
                      onChange={(e) => setTriagem({...triagem, temperatura: e.target.value})}
                      placeholder="Ex: 36.5°C"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label>Saturação O2</Label>
                    <Input
                      value={triagem.saturacaoO2}
                      onChange={(e) => setTriagem({...triagem, saturacaoO2: e.target.value})}
                      placeholder="Ex: 98%"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Peso</Label>
                    <Input
                      value={triagem.peso}
                      onChange={(e) => setTriagem({...triagem, peso: e.target.value})}
                      placeholder="Ex: 70 kg"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Altura</Label>
                    <Input
                      value={triagem.altura}
                      onChange={(e) => setTriagem({...triagem, altura: e.target.value})}
                      placeholder="Ex: 1.70 m"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Escala da Dor (0-10)</Label>
                    <Select onValueChange={(value) => setTriagem({...triagem, dor: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        {[0,1,2,3,4,5,6,7,8,9,10].map(nivel => (
                          <SelectItem key={nivel} value={nivel.toString()}>
                            {nivel} {nivel === 0 ? '(Sem dor)' : nivel <= 3 ? '(Leve)' : nivel <= 6 ? '(Moderada)' : '(Intensa)'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-base font-medium flex items-center">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Classificação de Risco - Protocolo de Manchester
                  </Label>
                  <Select onValueChange={(value) => {
                    const selected = manchesterScale.find(scale => scale.cor === value);
                    setTriagem({
                      ...triagem, 
                      prioridadeManchesterCor: value,
                      prioridadeManchesterTexto: selected?.texto || ''
                    });
                  }}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a prioridade" />
                    </SelectTrigger>
                    <SelectContent>
                      {manchesterScale.map(scale => (
                        <SelectItem key={scale.cor} value={scale.cor}>
                          <div className="flex items-center space-x-2">
                            <div className={`w-4 h-4 rounded ${scale.bgColor}`}></div>
                            <span>{scale.texto}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  {triagem.prioridadeManchesterCor && (
                    <div className="mt-2">
                      <Badge className={`${getSelectedManchesterScale()?.bgColor} ${getSelectedManchesterScale()?.textColor}`}>
                        {getSelectedManchesterScale()?.texto}
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Observações Adicionais</Label>
                  <Textarea
                    value={triagem.observacoes}
                    onChange={(e) => setTriagem({...triagem, observacoes: e.target.value})}
                    placeholder="Observações gerais da enfermagem..."
                    rows={3}
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-6 border-t">
                <Button variant="outline" onClick={() => setSelectedPatient(null)}>
                  Cancelar
                </Button>
                <Button 
                  onClick={handleSaveTriagem}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  disabled={!triagem.queixaPrincipal || !triagem.prioridadeManchesterCor}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Finalizar Triagem
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Triagem;
