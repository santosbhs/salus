
import React, { useState, useEffect } from 'react';
import { ArrowLeft, FileText, User, Stethoscope, Save, Eye, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { usePatients, Patient } from '@/hooks/usePatients';
import { useProfessionals, Professional } from '@/hooks/useProfessionals';
import { useConsultations } from '@/hooks/useConsultations';
import { useToast } from '@/hooks/use-toast';
import MedicalPrescription from './MedicalPrescription';
import MedicalCertificate from './MedicalCertificate';
import ExamRequest from './ExamRequest';

const NovoAtendimento = ({ onBack }) => {
  const [pacienteSelecionado, setPacienteSelecionado] = useState('');
  const [profissionalSelecionado, setProfissionalSelecionado] = useState('');
  const [patients, setPatients] = useState<Patient[]>([]);
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [salvando, setSalvando] = useState(false);
  
  const [soap, setSoap] = useState({
    subjetivo: '',
    objetivo: '',
    avaliacao: '',
    plano: ''
  });
  
  const [declaracao, setDeclaracao] = useState({
    titulo: '',
    texto: ''
  });
  
  const [prescricao, setPrescricao] = useState(null);
  const [atestado, setAtestado] = useState(null);
  const [exames, setExames] = useState(null);

  const { getPatients } = usePatients();
  const { getProfessionals } = useProfessionals();
  const { createConsultation } = useConsultations();
  const { toast } = useToast();

  useEffect(() => {
    const loadData = async () => {
      const [patientsData, professionalsData] = await Promise.all([
        getPatients(),
        getProfessionals()
      ]);
      setPatients(patientsData);
      setProfessionals(professionalsData);
    };
    
    loadData();
  }, []);

  const handleSalvar = async () => {
    if (!pacienteSelecionado || !profissionalSelecionado) {
      toast({
        title: "Campos obrigatórios",
        description: "Selecione o paciente e o profissional",
        variant: "destructive",
      });
      return;
    }

    setSalvando(true);
    
    const consultationData = {
      patient_id: pacienteSelecionado,
      professional_id: profissionalSelecionado,
      subjetivo: soap.subjetivo || null,
      objetivo: soap.objetivo || null,
      avaliacao: soap.avaliacao || null,
      plano: soap.plano || null,
      receitas: prescricao ? JSON.stringify(prescricao) : null,
      exames: exames ? JSON.stringify(exames) : null,
      atestados: atestado ? JSON.stringify(atestado) : null
    };

    const resultado = await createConsultation(consultationData);
    
    if (resultado) {
      // Limpar formulário
      setPacienteSelecionado('');
      setProfissionalSelecionado('');
      setSoap({
        subjetivo: '',
        objetivo: '',
        avaliacao: '',
        plano: ''
      });
      setDeclaracao({
        titulo: '',
        texto: ''
      });
      setPrescricao(null);
      setAtestado(null);
      setExames(null);
    }
    
    setSalvando(false);
  };

  const handlePrescriptionSave = (prescription) => {
    setPrescricao(prescription);
    console.log('Prescrição salva:', prescription);
  };

  const handleCertificateSave = (certificate) => {
    setAtestado(certificate);
    console.log('Atestado salvo:', certificate);
  };

  const handleExamSave = (examData) => {
    setExames(examData);
    console.log('Exames salvos:', examData);
  };

  const handlePrintDeclaration = () => {
    const printWindow = window.open('', '_blank');
    const currentDate = new Date().toLocaleDateString('pt-BR');
    
    printWindow.document.write(`
      <html>
        <head>
          <title>${declaracao.titulo || 'Declaração Médica'}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
            .header { text-align: center; margin-bottom: 40px; }
            .content { margin: 20px 0; text-align: justify; }
            .signature { margin-top: 60px; text-align: center; }
            .signature-line { border-top: 1px solid #000; width: 300px; margin: 0 auto; padding-top: 5px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>${declaracao.titulo || 'DECLARAÇÃO MÉDICA'}</h2>
          </div>
          
          <div class="content">
            <p>${declaracao.texto}</p>
          </div>
          
          <div class="signature">
            <p>Local, ${currentDate}</p>
            <br><br>
            <div class="signature-line">
              <p>Assinatura e Carimbo do Médico</p>
            </div>
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.print();
  };

  const pacienteSelecionadoObj = patients.find(p => p.id === pacienteSelecionado);
  const profissionalSelecionadoObj = professionals.find(p => p.id === profissionalSelecionado);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mr-4 hover:bg-green-50"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center">
              <FileText className="text-white h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Novo Atendimento</h1>
              <p className="text-gray-600">Sistema completo de atendimento médico</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Conteúdo Principal */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="anamnese" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="anamnese">Anamnese SOAP</TabsTrigger>
                <TabsTrigger value="prescricao">Receitas</TabsTrigger>
                <TabsTrigger value="atestado">Atestados</TabsTrigger>
                <TabsTrigger value="exames">Exames</TabsTrigger>
                <TabsTrigger value="declaracoes">Declarações</TabsTrigger>
              </TabsList>

              {/* Tab Anamnese */}
              <TabsContent value="anamnese" className="space-y-6">
                {/* Seleção de Paciente e Profissional */}
                <Card className="shadow-lg border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <User className="mr-2 h-5 w-5" />
                      Dados do Atendimento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="paciente">Paciente *</Label>
                        <Select value={pacienteSelecionado} onValueChange={setPacienteSelecionado}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Selecione o paciente" />
                          </SelectTrigger>
                          <SelectContent>
                            {patients.map((patient) => (
                              <SelectItem key={patient.id} value={patient.id}>
                                {patient.nome} - {patient.idade} anos
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="profissional">Profissional *</Label>
                        <Select value={profissionalSelecionado} onValueChange={setProfissionalSelecionado}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Selecione o profissional" />
                          </SelectTrigger>
                          <SelectContent>
                            {professionals.map((professional) => (
                              <SelectItem key={professional.id} value={professional.id}>
                                {professional.nome} - {professional.especialidade}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="data">Data da Consulta</Label>
                        <Input
                          id="data"
                          type="date"
                          className="mt-1"
                          defaultValue={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                    </div>
                    
                    {/* Informações dos selecionados */}
                    {(pacienteSelecionadoObj || profissionalSelecionadoObj) && (
                      <div className="mt-4 p-4 bg-green-50 rounded-lg">
                        {pacienteSelecionadoObj && (
                          <div className="mb-2">
                            <h4 className="font-semibold text-green-800">Paciente Selecionado:</h4>
                            <p>{pacienteSelecionadoObj.nome} - {pacienteSelecionadoObj.idade} anos - {pacienteSelecionadoObj.telefone}</p>
                          </div>
                        )}
                        {profissionalSelecionadoObj && (
                          <div>
                            <h4 className="font-semibold text-green-800">Profissional Responsável:</h4>
                            <p>{profissionalSelecionadoObj.nome} - {profissionalSelecionadoObj.especialidade}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <Stethoscope className="mr-2 h-5 w-5" />
                      Anamnese SOAP
                    </CardTitle>
                    <CardDescription>
                      Subjetivo, Objetivo, Avaliação e Plano
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="subjetivo" className="text-lg font-semibold text-green-800">
                        S - Subjetivo
                      </Label>
                      <p className="text-sm text-gray-600 mb-2">Queixas, sintomas relatados pelo paciente</p>
                      <Textarea
                        id="subjetivo"
                        value={soap.subjetivo}
                        onChange={(e) => setSoap({...soap, subjetivo: e.target.value})}
                        placeholder="Paciente relata dor de cabeça há 2 dias, de intensidade moderada..."
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="objetivo" className="text-lg font-semibold text-green-800">
                        O - Objetivo
                      </Label>
                      <p className="text-sm text-gray-600 mb-2">Achados do exame físico, sinais vitais</p>
                      <Textarea
                        id="objetivo"
                        value={soap.objetivo}
                        onChange={(e) => setSoap({...soap, objetivo: e.target.value})}
                        placeholder="PA: 120/80 mmHg, FC: 72 bpm, Temp: 36.5°C..."
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="avaliacao" className="text-lg font-semibold text-green-800">
                        A - Avaliação
                      </Label>
                      <p className="text-sm text-gray-600 mb-2">Diagnóstico, impressão clínica</p>
                      <Textarea
                        id="avaliacao"
                        value={soap.avaliacao}
                        onChange={(e) => setSoap({...soap, avaliacao: e.target.value})}
                        placeholder="Hipótese diagnóstica: Cefaleia tensional..."
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="plano" className="text-lg font-semibold text-green-800">
                        P - Plano
                      </Label>
                      <p className="text-sm text-gray-600 mb-2">Conduta, tratamento, orientações</p>
                      <Textarea
                        id="plano"
                        value={soap.plano}
                        onChange={(e) => setSoap({...soap, plano: e.target.value})}
                        placeholder="Prescrição de analgésico, orientações sobre higiene do sono..."
                        rows={4}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Tab Prescrição */}
              <TabsContent value="prescricao" className="space-y-6">
                <MedicalPrescription 
                  onSave={handlePrescriptionSave}
                  patientName={pacienteSelecionadoObj?.nome || "Selecione um paciente"}
                />
              </TabsContent>

              {/* Tab Atestado */}
              <TabsContent value="atestado" className="space-y-6">
                <MedicalCertificate 
                  onSave={handleCertificateSave}
                  patientName={pacienteSelecionadoObj?.nome || "Selecione um paciente"}
                />
              </TabsContent>

              {/* Tab Exames */}
              <TabsContent value="exames" className="space-y-6">
                <ExamRequest 
                  onSave={handleExamSave}
                  patientName={pacienteSelecionadoObj?.nome || "Selecione um paciente"}
                />
              </TabsContent>

              {/* Tab Declarações */}
              <TabsContent value="declaracoes" className="space-y-6">
                <Card className="shadow-lg border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <FileText className="mr-2 h-5 w-5" />
                      Declarações Médicas
                    </CardTitle>
                    <CardDescription>
                      Campo livre para declarações personalizadas
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="titulo-declaracao" className="text-lg font-semibold text-green-800">
                        Título da Declaração
                      </Label>
                      <Input
                        id="titulo-declaracao"
                        value={declaracao.titulo}
                        onChange={(e) => setDeclaracao({...declaracao, titulo: e.target.value})}
                        placeholder="Ex: Declaração de Comparecimento, Atestado de Saúde..."
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="texto-declaracao" className="text-lg font-semibold text-green-800">
                        Texto da Declaração
                      </Label>
                      <p className="text-sm text-gray-600 mb-2">Escreva o conteúdo da declaração</p>
                      <Textarea
                        id="texto-declaracao"
                        value={declaracao.texto}
                        onChange={(e) => setDeclaracao({...declaracao, texto: e.target.value})}
                        placeholder="Declaro que o(a) paciente [nome] esteve presente em consulta médica..."
                        rows={8}
                        className="mt-2"
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button 
                        onClick={handlePrintDeclaration}
                        className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                        disabled={!declaracao.titulo || !declaracao.texto}
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        Imprimir Declaração
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Painel Lateral */}
          <div className="space-y-6">
            <Card className="shadow-lg border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Ações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                  onClick={handleSalvar}
                  disabled={salvando}
                >
                  <Save className="mr-2 h-4 w-4" />
                  {salvando ? 'Salvando...' : 'Salvar Atendimento'}
                </Button>
                <Button variant="outline" className="w-full">
                  Agendar Retorno
                </Button>
                <Button variant="outline" className="w-full">
                  Finalizar Consulta
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Dados Disponíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Pacientes:</strong> {patients.length} cadastrados</p>
                  <p><strong>Profissionais:</strong> {professionals.length} cadastrados</p>
                  {patients.length === 0 && (
                    <p className="text-red-600">⚠️ Cadastre pacientes primeiro</p>
                  )}
                  {professionals.length === 0 && (
                    <p className="text-red-600">⚠️ Cadastre profissionais primeiro</p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Lembretes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">• Verificar exames anteriores</p>
                  <p className="text-gray-600">• Atualizar cartão de vacina</p>
                  <p className="text-gray-600">• Agendar check-up anual</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovoAtendimento;
