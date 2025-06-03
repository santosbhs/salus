import React, { useState } from 'react';
import { Search, UserCheck, FileText, Clock, Save, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import MedicalPrescription from '@/components/MedicalPrescription';

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
  const [examesPrevios, setExamesPrevios] = useState('');

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
      insurance: 'convenio',
      // Dados da triagem
      triagem: {
        queixaPrincipal: 'Dor no peito há 2 horas',
        pressaoArterial: '140x90 mmHg',
        frequenciaCardiaca: '95 bpm',
        temperatura: '36.8°C',
        saturacaoO2: '97%',
        peso: '68 kg',
        altura: '1.65 m',
        dor: '7',
        prioridadeManchesterCor: 'amarelo',
        prioridadeManchesterTexto: 'Urgente - 60 minutos'
      }
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
      insurance: 'particular',
      triagem: {
        queixaPrincipal: 'Consulta de rotina',
        pressaoArterial: '120x80 mmHg',
        frequenciaCardiaca: '72 bpm',
        temperatura: '36.5°C',
        saturacaoO2: '99%',
        peso: '75 kg',
        altura: '1.78 m',
        dor: '0',
        prioridadeManchesterCor: 'verde',
        prioridadeManchesterTexto: 'Pouco urgente - 120 minutos'
      }
    }
  ];

  // Função para impressão
  const handlePrint = (content, title) => {
    const printWindow = window.open('', '_blank');
    const currentDate = new Date().toLocaleDateString('pt-BR');
    const currentTime = new Date().toLocaleTimeString('pt-BR');
    
    printWindow.document.write(`
      <html>
        <head>
          <title>${title} - ${selectedPatient.name}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px; }
            .patient-info { margin-bottom: 20px; background: #f5f5f5; padding: 15px; border-radius: 5px; }
            .content { margin: 20px 0; line-height: 1.6; }
            .footer { margin-top: 40px; text-align: center; font-size: 12px; color: #666; }
            .doctor-signature { margin-top: 50px; text-align: right; }
            h1 { color: #333; margin-bottom: 10px; }
            h2 { color: #666; margin-bottom: 15px; }
            .info-row { display: flex; justify-content: space-between; margin: 5px 0; }
            @media print { 
              body { margin: 0; } 
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Flash Clinics</h1>
            <h2>${title}</h2>
            <p>Data: ${currentDate} - Horário: ${currentTime}</p>
          </div>
          
          <div class="patient-info">
            <div class="info-row"><strong>Paciente:</strong> ${selectedPatient.name}</div>
            <div class="info-row"><strong>CPF:</strong> ${selectedPatient.cpf}</div>
            <div class="info-row"><strong>Idade:</strong> ${calculateAge(selectedPatient.birthDate)} anos</div>
            <div class="info-row"><strong>Telefone:</strong> ${selectedPatient.phone}</div>
          </div>
          
          <div class="content">
            ${content}
          </div>
          
          <div class="doctor-signature">
            <p>_________________________________</p>
            <p>Dr(a). [Nome do Médico]</p>
            <p>CRM: [Número do CRM]</p>
          </div>
          
          <div class="footer">
            <p>Flash Clinics - Seus atendimentos em um flash!</p>
            <p>Este documento foi gerado eletronicamente em ${currentDate} às ${currentTime}</p>
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const printAtestado = () => {
    handlePrint(medicalCertificate.replace(/\n/g, '<br>'), 'Atestado Médico');
  };

  const printExames = () => {
    handlePrint(examRequests.replace(/\n/g, '<br>'), 'Solicitação de Exames');
  };

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
      examesPrevios,
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
    setExamesPrevios('');
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

  const getManchesterBadge = (cor) => {
    const colors = {
      vermelho: 'bg-red-500 text-white',
      laranja: 'bg-orange-500 text-white',
      amarelo: 'bg-yellow-500 text-black',
      verde: 'bg-green-500 text-white',
      azul: 'bg-blue-500 text-white'
    };
    return colors[cor] || 'bg-gray-500 text-white';
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
                            {patient.triagem && (
                              <>
                                <span>•</span>
                                <Badge className={`${getManchesterBadge(patient.triagem.prioridadeManchesterCor)} text-xs`}>
                                  {patient.triagem.prioridadeManchesterTexto}
                                </Badge>
                              </>
                            )}
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
        // Anamnese SOAP with Triagem info
        <div className="space-y-6">
          {/* Dados da Triagem */}
          {selectedPatient.triagem && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Dados da Triagem de Enfermagem
                </CardTitle>
                <CardDescription>
                  Avaliação inicial realizada pela enfermagem
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900 text-sm">Queixa Principal</h4>
                      <p className="text-blue-800 text-sm">{selectedPatient.triagem.queixaPrincipal}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div><strong>PA:</strong> {selectedPatient.triagem.pressaoArterial}</div>
                      <div><strong>FC:</strong> {selectedPatient.triagem.frequenciaCardiaca}</div>
                      <div><strong>Temp:</strong> {selectedPatient.triagem.temperatura}</div>
                      <div><strong>Sat O2:</strong> {selectedPatient.triagem.saturacaoO2}</div>
                      <div><strong>Peso:</strong> {selectedPatient.triagem.peso}</div>
                      <div><strong>Altura:</strong> {selectedPatient.triagem.altura}</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Classificação de Risco</h4>
                      <Badge className={`${getManchesterBadge(selectedPatient.triagem.prioridadeManchesterCor)}`}>
                        {selectedPatient.triagem.prioridadeManchesterTexto}
                      </Badge>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Escala da Dor</h4>
                      <p className="text-lg font-bold text-red-600">{selectedPatient.triagem.dor}/10</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

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
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="anamnese">Anamnese SOAP</TabsTrigger>
                  <TabsTrigger value="exames-previos">Exames Prévios</TabsTrigger>
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

                <TabsContent value="exames-previos" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="exames-previos" className="text-base font-medium">
                      Exames Prévios do Paciente
                    </Label>
                    <Textarea
                      id="exames-previos"
                      value={examesPrevios}
                      onChange={(e) => setExamesPrevios(e.target.value)}
                      placeholder="Registre aqui os exames anteriores do paciente, resultados relevantes e datas:&#10;&#10;• Hemograma completo (15/05/2024) - Hemoglobina: 14,2 g/dL&#10;• Glicemia de jejum (10/05/2024) - 95 mg/dL&#10;• ECG (01/05/2024) - Ritmo sinusal normal&#10;• Radiografia de tórax (20/04/2024) - Sem alterações&#10;&#10;Observações: [comentários sobre os resultados]"
                      rows={12}
                      className="resize-none"
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    <p><strong>Dica:</strong> Inclua sempre as datas dos exames e resultados relevantes para o atendimento atual.</p>
                  </div>
                </TabsContent>

                <TabsContent value="atestado" className="space-y-4 mt-6">
                  <div className="flex justify-between items-center">
                    <Label className="text-base font-medium">Atestado Médico</Label>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={printAtestado}
                      disabled={!medicalCertificate}
                    >
                      <Printer className="h-4 w-4 mr-2" />
                      Imprimir
                    </Button>
                  </div>
                  <div className="space-y-2">
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
                  <div className="flex justify-between items-center">
                    <Label className="text-base font-medium">Solicitação de Exames</Label>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={printExames}
                      disabled={!examRequests}
                    >
                      <Printer className="h-4 w-4 mr-2" />
                      Imprimir
                    </Button>
                  </div>
                  <div className="space-y-2">
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
