import React, { useState } from 'react';
import { Search, UserCheck, FileText, Clock, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { MedicalPrescription } from '@/components/ui/medical-prescription';

const NovoAtendimento = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [anamnese, setAnamnese] = useState({
    subjetivo: '',
    objetivo: '',
    avaliacao: '',
    plano: ''
  });
  const [activeDocument, setActiveDocument] = useState('anamnese');
  const [medicalCertificate, setMedicalCertificate] = useState('');
  const [examRequests, setExamRequests] = useState('');

  // Mock de pacientes (em produção viria do banco)
  const patients = [
    {
      id: 1,
      name: 'Maria Silva',
      cpf: '123.456.789-00',
      phone: '(11) 99999-9999',
      birthDate: '1985-03-15',
      bloodType: 'O+',
      allergies: 'Penicilina',
      comorbidities: 'Hipertensão arterial, Diabetes tipo 2',
      continuousMedications: 'Losartana 50mg, Metformina 850mg',
      previousExams: 'ECG (2024-05-10) - Normal, Glicemia (2024-05-12) - 140mg/dL',
      insurance: 'convenio'
    },
    {
      id: 2,
      name: 'Pedro Costa',
      cpf: '987.654.321-00',
      phone: '(11) 77777-7777',
      birthDate: '1990-07-22',
      bloodType: 'A+',
      allergies: 'Nenhuma',
      comorbidities: 'Nenhuma',
      continuousMedications: 'Nenhuma',
      previousExams: 'Hemograma completo (2024-05-18) - Normal',
      insurance: 'particular'
    }
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

  const handleSaveAtendimento = () => {
    if (!selectedPatient) return;
    
    // Aqui você salvaria no banco de dados
    console.log('Salvando atendimento:', {
      patientId: selectedPatient.id,
      anamnese,
      medicalCertificate,
      examRequests,
      timestamp: new Date().toISOString()
    });
    
    // Reset form
    setAnamnese({
      subjetivo: '',
      objetivo: '',
      avaliacao: '',
      plano: ''
    });
    setMedicalCertificate('');
    setExamRequests('');
    setSelectedPatient(null);
    setActiveDocument('anamnese');
    
    alert('Atendimento salvo com sucesso!');
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">Novo Atendimento</h2>
        <p className="text-gray-600">Localize o paciente e realize a anamnese SOAP</p>
      </div>

      {!selectedPatient ? (
        // Busca de Paciente
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="mr-2 h-5 w-5" />
                Localizar Paciente
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
                        Selecionar
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
        // Anamnese SOAP
        <div className="space-y-6">
          {/* Supra Anamnese - Informações do Prontuário */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Supra Anamnese - {selectedPatient.name}
              </CardTitle>
              <CardDescription>
                Informações básicas do prontuário do paciente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Idade:</span>
                    <span>{calculateAge(selectedPatient.birthDate)} anos</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Tipo Sanguíneo:</span>
                    <span>{selectedPatient.bloodType}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Atendimento:</span>
                    <Badge variant={selectedPatient.insurance === 'convenio' ? 'outline' : 'secondary'}>
                      {selectedPatient.insurance === 'convenio' ? 'Convênio' : 'Particular'}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <h4 className="font-medium text-red-900 text-sm">Alergias</h4>
                    <p className="text-red-800 text-sm">{selectedPatient.allergies}</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <h4 className="font-medium text-orange-900 text-sm">Comorbidades</h4>
                    <p className="text-orange-800 text-sm">{selectedPatient.comorbidities}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 text-sm">Medicações de Uso Contínuo</h4>
                  <p className="text-blue-800 text-sm">{selectedPatient.continuousMedications}</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900 text-sm">Exames Prévios</h4>
                  <p className="text-green-800 text-sm">{selectedPatient.previousExams}</p>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <Button variant="outline" onClick={() => setSelectedPatient(null)}>
                  Trocar Paciente
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Documentos do Atendimento */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Documentos do Atendimento
              </CardTitle>
              <CardDescription>
                Registro do atendimento atual - {new Date().toLocaleDateString('pt-BR')} às {new Date().toLocaleTimeString('pt-BR')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeDocument} onValueChange={setActiveDocument}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="anamnese">Anamnese SOAP</TabsTrigger>
                  <TabsTrigger value="atestado">Atestado Médico</TabsTrigger>
                  <TabsTrigger value="exames">Solicitação de Exames</TabsTrigger>
                  <TabsTrigger value="receita">Receita Médica</TabsTrigger>
                </TabsList>
                
                <TabsContent value="anamnese" className="space-y-6 mt-6">
                  <div className="grid gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="subjetivo" className="text-base font-medium">
                        S - Subjetivo (Queixas do paciente)
                      </Label>
                      <Textarea
                        id="subjetivo"
                        value={anamnese.subjetivo}
                        onChange={(e) => setAnamnese({...anamnese, subjetivo: e.target.value})}
                        placeholder="O que o paciente relata, sintomas, queixas, história da doença atual..."
                        rows={4}
                        className="resize-none"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="objetivo" className="text-base font-medium">
                        O - Objetivo (Dados observáveis)
                      </Label>
                      <Textarea
                        id="objetivo"
                        value={anamnese.objetivo}
                        onChange={(e) => setAnamnese({...anamnese, objetivo: e.target.value})}
                        placeholder="Sinais vitais, exame físico, resultados de exames, dados mensuráveis..."
                        rows={4}
                        className="resize-none"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="avaliacao" className="text-base font-medium">
                        A - Avaliação (Diagnóstico/Impressão clínica)
                      </Label>
                      <Textarea
                        id="avaliacao"
                        value={anamnese.avaliacao}
                        onChange={(e) => setAnamnese({...anamnese, avaliacao: e.target.value})}
                        placeholder="Hipóteses diagnósticas, avaliação clínica, CID se aplicável..."
                        rows={3}
                        className="resize-none"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="plano" className="text-base font-medium">
                        P - Plano (Conduta/Tratamento)
                      </Label>
                      <Textarea
                        id="plano"
                        value={anamnese.plano}
                        onChange={(e) => setAnamnese({...anamnese, plano: e.target.value})}
                        placeholder="Medicações prescritas, exames solicitados, retornos agendados, orientações..."
                        rows={4}
                        className="resize-none"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="atestado" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label className="text-base font-medium">Atestado Médico</Label>
                    <Textarea
                      value={medicalCertificate}
                      onChange={(e) => setMedicalCertificate(e.target.value)}
                      placeholder="Atesto para os devidos fins que o(a) paciente [nome] esteve sob meus cuidados médicos no dia [data], necessitando de afastamento de suas atividades por [período] em decorrência de [motivo/CID]."
                      rows={8}
                      className="resize-none"
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    <p><strong>Dica:</strong> Inclua sempre o período de afastamento, motivo e CID quando aplicável.</p>
                  </div>
                </TabsContent>

                <TabsContent value="exames" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label className="text-base font-medium">Solicitação de Exames</Label>
                    <Textarea
                      value={examRequests}
                      onChange={(e) => setExamRequests(e.target.value)}
                      placeholder="Solicito os seguintes exames para o(a) paciente [nome]:&#10;&#10;• Hemograma completo&#10;• Glicemia de jejum&#10;• Ureia e creatinina&#10;• EAS (Urina I)&#10;• ECG&#10;&#10;Hipótese diagnóstica: [CID]&#10;Observações: [informações relevantes]"
                      rows={10}
                      className="resize-none"
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    <p><strong>Dica:</strong> Sempre inclua a hipótese diagnóstica e justificativa clínica.</p>
                  </div>
                </TabsContent>

                <TabsContent value="receita" className="mt-6">
                  <MedicalPrescription 
                    patientName={selectedPatient.name}
                    onSave={(prescription) => {
                      console.log('Receita salva:', prescription);
                      alert('Receita médica gerada com sucesso!');
                    }}
                  />
                </TabsContent>
              </Tabs>

              <div className="flex justify-end space-x-3 pt-6 border-t mt-6">
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedPatient(null)}
                >
                  Cancelar
                </Button>
                <Button 
                  onClick={handleSaveAtendimento}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  disabled={!anamnese.subjetivo || !anamnese.objetivo}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Salvar Atendimento
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default NovoAtendimento;
