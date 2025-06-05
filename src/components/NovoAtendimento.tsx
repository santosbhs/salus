
import React, { useState, useEffect } from 'react';
import { ArrowLeft, User, Stethoscope, FileText, Save, AlertCircle, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { usePatients, Patient } from '@/hooks/usePatients';
import { useProfessionals, Professional } from '@/hooks/useProfessionals';
import { useConsultations } from '@/hooks/useConsultations';
import { useToast } from '@/hooks/use-toast';

const NovoAtendimento = ({ onBack }) => {
  const [pacienteSelecionado, setPacienteSelecionado] = useState('');
  const [profissionalSelecionado, setProfissionalSelecionado] = useState('');
  const [subjetivo, setSubjetivo] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [avaliacao, setAvaliacao] = useState('');
  const [plano, setPlano] = useState('');
  const [receitas, setReceitas] = useState('');
  const [exames, setExames] = useState('');
  const [atestados, setAtestados] = useState('');
  const [relatorioTitulo, setRelatorioTitulo] = useState('');
  const [relatorioConteudo, setRelatorioConteudo] = useState('');
  const [salvando, setSalvando] = useState(false);

  const [patients, setPatients] = useState<Patient[]>([]);
  const [professionals, setProfessionals] = useState<Professional[]>([]);

  const { getPatients } = usePatients();
  const { getProfessionals } = useProfessionals();
  const { createConsultation } = useConsultations();
  const { toast } = useToast();

  useEffect(() => {
    const loadData = async () => {
      console.log('Carregando pacientes e profissionais...');
      const patientsData = await getPatients();
      const professionalsData = await getProfessionals();
      
      console.log('Pacientes encontrados:', patientsData);
      console.log('Profissionais encontrados:', professionalsData);
      
      setPatients(patientsData);
      setProfessionals(professionalsData);
    };
    
    loadData();
  }, []);

  const preencherReceitaAutomatica = () => {
    const receitaModelo = `RECEITUÁRIO MÉDICO

Paciente: ${patients.find(p => p.id === pacienteSelecionado)?.nome || '[Nome do Paciente]'}
Data: ${new Date().toLocaleDateString('pt-BR')}

Prescrição:
1. [Nome do medicamento] [Dosagem] - [Frequência] - [Duração]
   Via de administração: [oral/tópica/etc]
   
2. [Nome do medicamento] [Dosagem] - [Frequência] - [Duração]
   Via de administração: [oral/tópica/etc]

Orientações:
- Tomar conforme prescrito
- Não interromper o tratamento sem orientação médica
- Em caso de reações adversas, procurar atendimento médico

Dr(a). ${professionals.find(p => p.id === profissionalSelecionado)?.nome || '[Nome do Profissional]'}
${professionals.find(p => p.id === profissionalSelecionado)?.registro || '[Registro Profissional]'}`;
    
    setReceitas(receitaModelo);
    toast({
      title: "Receita preenchida automaticamente",
      description: "Modelo de receita inserido. Edite conforme necessário.",
    });
  };

  const preencherAtestadoAutomatico = () => {
    const atestadoModelo = `ATESTADO MÉDICO

Atesto para os devidos fins que o(a) Sr(a). ${patients.find(p => p.id === pacienteSelecionado)?.nome || '[Nome do Paciente]'}, portador(a) do CPF ${patients.find(p => p.id === pacienteSelecionado)?.cpf || '[CPF]'}, esteve sob meus cuidados médicos no dia ${new Date().toLocaleDateString('pt-BR')}.

Diagnóstico: [Inserir diagnóstico]

Recomendo afastamento de suas atividades habituais por [X] dias, a partir de ${new Date().toLocaleDateString('pt-BR')}.

Por ser verdade, firmo o presente atestado.

${new Date().toLocaleDateString('pt-BR')}

_________________________________
Dr(a). ${professionals.find(p => p.id === profissionalSelecionado)?.nome || '[Nome do Profissional]'}
${professionals.find(p => p.id === profissionalSelecionado)?.especialidade || '[Especialidade]'}
${professionals.find(p => p.id === profissionalSelecionado)?.registro || '[Registro Profissional]'}`;
    
    setAtestados(atestadoModelo);
    toast({
      title: "Atestado preenchido automaticamente",
      description: "Modelo de atestado inserido. Edite conforme necessário.",
    });
  };

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
    
    const relatorioCompleto = relatorioTitulo && relatorioConteudo 
      ? `${relatorioTitulo}\n\n${relatorioConteudo}` 
      : null;
    
    const consultaData = {
      patient_id: pacienteSelecionado,
      professional_id: profissionalSelecionado,
      subjetivo: subjetivo || null,
      objetivo: objetivo || null,
      avaliacao: avaliacao || null,
      plano: plano || null,
      receitas: receitas || null,
      exames: exames || null,
      atestados: atestados || null,
      relatorio: relatorioCompleto
    };

    console.log('Dados da consulta a serem salvos:', consultaData);
    
    const resultado = await createConsultation(consultaData);
    
    if (resultado) {
      // Limpar formulário
      setPacienteSelecionado('');
      setProfissionalSelecionado('');
      setSubjetivo('');
      setObjetivo('');
      setAvaliacao('');
      setPlano('');
      setReceitas('');
      setExames('');
      setAtestados('');
      setRelatorioTitulo('');
      setRelatorioConteudo('');
    }
    
    setSalvando(false);
  };

  const pacienteSelecionadoObj = patients.find(p => p.id === pacienteSelecionado);
  const profissionalSelecionadoObj = professionals.find(p => p.id === profissionalSelecionado);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mr-4 hover:bg-blue-50"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
              <FileText className="text-white h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Novo Atendimento</h1>
              <p className="text-gray-600">Registro de consulta médica - Método SOAP</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Formulário Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Seleção de Paciente e Profissional */}
            <Card className="shadow-lg border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <User className="mr-2 h-5 w-5" />
                  Dados do Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="paciente">Paciente *</Label>
                    <Select value={pacienteSelecionado} onValueChange={setPacienteSelecionado}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecione um paciente" />
                      </SelectTrigger>
                      <SelectContent>
                        {patients.length === 0 ? (
                          <SelectItem value="no-patients" disabled>
                            Nenhum paciente cadastrado
                          </SelectItem>
                        ) : (
                          patients.map((patient) => (
                            <SelectItem key={patient.id} value={patient.id}>
                              {patient.nome} - {patient.idade} anos - {patient.telefone}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="profissional">Profissional *</Label>
                    <Select value={profissionalSelecionado} onValueChange={setProfissionalSelecionado}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecione um profissional" />
                      </SelectTrigger>
                      <SelectContent>
                        {professionals.length === 0 ? (
                          <SelectItem value="no-professionals" disabled>
                            Nenhum profissional cadastrado
                          </SelectItem>
                        ) : (
                          professionals.map((professional) => (
                            <SelectItem key={professional.id} value={professional.id}>
                              {professional.nome} - {professional.especialidade}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {/* Informações do Paciente Selecionado */}
                {pacienteSelecionadoObj && (
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Informações do Paciente</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <p><strong>Nome:</strong> {pacienteSelecionadoObj.nome}</p>
                      <p><strong>Idade:</strong> {pacienteSelecionadoObj.idade} anos</p>
                      <p><strong>Telefone:</strong> {pacienteSelecionadoObj.telefone}</p>
                      <p><strong>Convênio:</strong> {pacienteSelecionadoObj.convenio || 'Particular'}</p>
                    </div>
                  </div>
                )}
                
                {/* Aviso se não há dados */}
                {patients.length === 0 && (
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                      <p className="text-yellow-800">
                        Nenhum paciente cadastrado. Cadastre pacientes primeiro na gestão de pacientes.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Método SOAP */}
            <Card className="shadow-lg border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <Stethoscope className="mr-2 h-5 w-5" />
                  Registro da Consulta - SOAP
                </CardTitle>
                <CardDescription>
                  Subjetivo, Objetivo, Avaliação e Plano
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="subjetivo">Subjetivo (S)</Label>
                  <Textarea
                    id="subjetivo"
                    value={subjetivo}
                    onChange={(e) => setSubjetivo(e.target.value)}
                    placeholder="Queixa principal, história da doença atual, sintomas relatados pelo paciente..."
                    className="mt-1"
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="objetivo">Objetivo (O)</Label>
                  <Textarea
                    id="objetivo"
                    value={objetivo}
                    onChange={(e) => setObjetivo(e.target.value)}
                    placeholder="Exame físico, sinais vitais, achados objetivos..."
                    className="mt-1"
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="avaliacao">Avaliação (A)</Label>
                  <Textarea
                    id="avaliacao"
                    value={avaliacao}
                    onChange={(e) => setAvaliacao(e.target.value)}
                    placeholder="Diagnóstico, impressão clínica, CID..."
                    className="mt-1"
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="plano">Plano (P)</Label>
                  <Textarea
                    id="plano"
                    value={plano}
                    onChange={(e) => setPlano(e.target.value)}
                    placeholder="Conduta, tratamento, orientações..."
                    className="mt-1"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Documentos Complementares */}
            <Card className="shadow-lg border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Documentos Complementares</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="receitas">Receitas</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={preencherReceitaAutomatica}
                      disabled={!pacienteSelecionado || !profissionalSelecionado}
                    >
                      <Wand2 className="mr-1 h-3 w-3" />
                      Preencher Automaticamente
                    </Button>
                  </div>
                  <Textarea
                    id="receitas"
                    value={receitas}
                    onChange={(e) => setReceitas(e.target.value)}
                    placeholder="Prescrições médicas..."
                    className="mt-1"
                    rows={6}
                  />
                </div>
                
                <div>
                  <Label htmlFor="exames">Solicitação de Exames</Label>
                  <Textarea
                    id="exames"
                    value={exames}
                    onChange={(e) => setExames(e.target.value)}
                    placeholder="Exames solicitados..."
                    className="mt-1"
                    rows={3}
                  />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="atestados">Atestados</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={preencherAtestadoAutomatico}
                      disabled={!pacienteSelecionado || !profissionalSelecionado}
                    >
                      <Wand2 className="mr-1 h-3 w-3" />
                      Preencher Automaticamente
                    </Button>
                  </div>
                  <Textarea
                    id="atestados"
                    value={atestados}
                    onChange={(e) => setAtestados(e.target.value)}
                    placeholder="Atestados médicos..."
                    className="mt-1"
                    rows={8}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Relatórios */}
            <Card className="shadow-lg border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Relatórios</CardTitle>
                <CardDescription>
                  Relatórios médicos personalizados
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="relatorio-titulo">Título do Relatório</Label>
                  <Input
                    id="relatorio-titulo"
                    value={relatorioTitulo}
                    onChange={(e) => setRelatorioTitulo(e.target.value)}
                    placeholder="Ex: Relatório de Evolução, Laudo Médico, etc."
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="relatorio-conteudo">Conteúdo do Relatório</Label>
                  <Textarea
                    id="relatorio-conteudo"
                    value={relatorioConteudo}
                    onChange={(e) => setRelatorioConteudo(e.target.value)}
                    placeholder="Digite o conteúdo livre do relatório médico..."
                    className="mt-1"
                    rows={6}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Painel Lateral */}
          <div className="space-y-6">
            {/* Ações */}
            <Card className="shadow-lg border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Ações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  onClick={handleSalvar}
                  disabled={salvando || patients.length === 0 || professionals.length === 0}
                >
                  <Save className="mr-2 h-4 w-4" />
                  {salvando ? 'Salvando...' : 'Salvar Consulta'}
                </Button>
              </CardContent>
            </Card>

            {/* Informações */}
            <Card className="shadow-lg border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Resumo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Pacientes cadastrados:</strong> {patients.length}</p>
                  <p><strong>Profissionais cadastrados:</strong> {professionals.length}</p>
                  
                  {profissionalSelecionadoObj && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="font-semibold text-blue-800">Profissional:</p>
                      <p className="text-sm">{profissionalSelecionadoObj.nome}</p>
                      <p className="text-sm">{profissionalSelecionadoObj.especialidade}</p>
                    </div>
                  )}
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
