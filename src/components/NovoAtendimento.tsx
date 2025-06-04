
import React, { useState } from 'react';
import { ArrowLeft, FileText, User, Stethoscope, Save, Eye, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MedicalPrescription from './MedicalPrescription';
import MedicalCertificate from './MedicalCertificate';
import ExamRequest from './ExamRequest';

const NovoAtendimento = ({ onBack }) => {
  const [paciente, setPaciente] = useState('');
  const [soap, setSoap] = useState({
    subjetivo: '',
    objetivo: '',
    avaliacao: '',
    plano: ''
  });
  const [prescricao, setPrescricao] = useState(null);
  const [atestado, setAtestado] = useState(null);
  const [exames, setExames] = useState(null);

  const handleSalvar = () => {
    console.log('Atendimento salvo:', { paciente, soap, prescricao, atestado, exames });
    // Aqui você implementaria a lógica para salvar o atendimento
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
                <TabsTrigger value="revisao">Revisão</TabsTrigger>
              </TabsList>

              {/* Tab Anamnese */}
              <TabsContent value="anamnese" className="space-y-6">
                {/* Dados do Paciente */}
                <Card className="shadow-lg border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <User className="mr-2 h-5 w-5" />
                      Paciente
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="paciente">Nome do Paciente</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Selecione o paciente" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="maria">Maria Silva</SelectItem>
                            <SelectItem value="joao">João Santos</SelectItem>
                            <SelectItem value="ana">Ana Costa</SelectItem>
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
                  </CardContent>
                </Card>

                {/* SOAP */}
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
                  patientName={paciente || "Paciente Selecionado"}
                />
              </TabsContent>

              {/* Tab Atestado */}
              <TabsContent value="atestado" className="space-y-6">
                <MedicalCertificate 
                  onSave={handleCertificateSave}
                  patientName={paciente || "Paciente Selecionado"}
                />
              </TabsContent>

              {/* Tab Exames */}
              <TabsContent value="exames" className="space-y-6">
                <ExamRequest 
                  onSave={handleExamSave}
                  patientName={paciente || "Paciente Selecionado"}
                />
              </TabsContent>

              {/* Tab Revisão */}
              <TabsContent value="revisao" className="space-y-6">
                <Card className="shadow-lg border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <Eye className="mr-2 h-5 w-5" />
                      Revisão do Atendimento
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Subjetivo:</h4>
                      <p className="text-gray-700">{soap.subjetivo || 'Não informado'}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Objetivo:</h4>
                      <p className="text-gray-700">{soap.objetivo || 'Não informado'}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Avaliação:</h4>
                      <p className="text-gray-700">{soap.avaliacao || 'Não informado'}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Plano:</h4>
                      <p className="text-gray-700">{soap.plano || 'Não informado'}</p>
                    </div>
                    {prescricao && (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Prescrição:</h4>
                        <p className="text-gray-700">Receita gerada com {prescricao.medications?.length || 0} medicações</p>
                      </div>
                    )}
                    {atestado && (
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Atestado:</h4>
                        <p className="text-gray-700">Atestado de {atestado.days} dias por {atestado.reason}</p>
                      </div>
                    )}
                    {exames && (
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Exames Solicitados:</h4>
                        <p className="text-gray-700">{exames.exams?.length || 0} exames solicitados</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Painel Lateral */}
          <div className="space-y-6">
            {/* Ações */}
            <Card className="shadow-lg border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Ações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                  onClick={handleSalvar}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Salvar Atendimento
                </Button>
                <Button variant="outline" className="w-full">
                  Agendar Retorno
                </Button>
                <Button variant="outline" className="w-full">
                  Finalizar Consulta
                </Button>
              </CardContent>
            </Card>

            {/* Consultas Anteriores */}
            <Card className="shadow-lg border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Histórico</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                    <p className="text-sm font-semibold">15/01/2024</p>
                    <p className="text-sm text-gray-600">Consulta de rotina</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded border-l-4 border-gray-300">
                    <p className="text-sm font-semibold">10/12/2023</p>
                    <p className="text-sm text-gray-600">Exames laboratoriais</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lembretes */}
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
