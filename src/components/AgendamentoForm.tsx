
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, User, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { usePatients, Patient } from '@/hooks/usePatients';
import { useProfessionals, Professional } from '@/hooks/useProfessionals';
import { useAppointments } from '@/hooks/useAppointments';
import { useToast } from '@/hooks/use-toast';

interface AgendamentoFormProps {
  onBack: () => void;
  onSave: () => void;
}

const AgendamentoForm = ({ onBack, onSave }: AgendamentoFormProps) => {
  const [pacienteSelecionado, setPacienteSelecionado] = useState('');
  const [profissionalSelecionado, setProfissionalSelecionado] = useState('');
  const [dataAgendamento, setDataAgendamento] = useState('');
  const [horaAgendamento, setHoraAgendamento] = useState('');
  const [tipoConsulta, setTipoConsulta] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [salvando, setSalvando] = useState(false);

  const [patients, setPatients] = useState<Patient[]>([]);
  const [professionals, setProfessionals] = useState<Professional[]>([]);

  const { getPatients } = usePatients();
  const { getProfessionals } = useProfessionals();
  const { createAppointment } = useAppointments();
  const { toast } = useToast();

  useEffect(() => {
    const loadData = async () => {
      const patientsData = await getPatients();
      const professionalsData = await getProfessionals();
      setPatients(patientsData);
      setProfessionals(professionalsData);
    };
    
    loadData();
  }, []);

  const handleSalvar = async () => {
    if (!pacienteSelecionado || !profissionalSelecionado || !dataAgendamento || !horaAgendamento || !tipoConsulta) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos obrigatórios",
        variant: "destructive",
      });
      return;
    }

    setSalvando(true);
    
    const dataCompleta = new Date(`${dataAgendamento}T${horaAgendamento}:00`);
    
    const agendamentoData = {
      patient_id: pacienteSelecionado,
      professional_id: profissionalSelecionado,
      data_agendamento: dataCompleta.toISOString(),
      tipo: tipoConsulta,
      status: 'Agendado',
      observacoes: observacoes || null
    };

    const resultado = await createAppointment(agendamentoData);
    
    if (resultado) {
      onSave();
    }
    
    setSalvando(false);
  };

  const tiposConsulta = [
    'Consulta de Rotina',
    'Consulta de Retorno',
    'Primeira Consulta',
    'Consulta de Urgência',
    'Exame Clínico',
    'Procedimento'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
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
              <Calendar className="text-white h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Novo Agendamento</h1>
              <p className="text-gray-600">Agendar consulta ou procedimento</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Formulário Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Dados do Agendamento */}
            <Card className="shadow-lg border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <Calendar className="mr-2 h-5 w-5" />
                  Dados do Agendamento
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
                        {patients.map((patient) => (
                          <SelectItem key={patient.id} value={patient.id}>
                            {patient.nome} - {patient.telefone}
                          </SelectItem>
                        ))}
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
                        {professionals.map((professional) => (
                          <SelectItem key={professional.id} value={professional.id}>
                            {professional.nome} - {professional.especialidade}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="data">Data *</Label>
                    <Input
                      id="data"
                      type="date"
                      value={dataAgendamento}
                      onChange={(e) => setDataAgendamento(e.target.value)}
                      className="mt-1"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="hora">Horário *</Label>
                    <Input
                      id="hora"
                      type="time"
                      value={horaAgendamento}
                      onChange={(e) => setHoraAgendamento(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="tipo">Tipo de Consulta *</Label>
                  <Select value={tipoConsulta} onValueChange={setTipoConsulta}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione o tipo de consulta" />
                    </SelectTrigger>
                    <SelectContent>
                      {tiposConsulta.map((tipo) => (
                        <SelectItem key={tipo} value={tipo}>
                          {tipo}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="observacoes">Observações</Label>
                  <Textarea
                    id="observacoes"
                    value={observacoes}
                    onChange={(e) => setObservacoes(e.target.value)}
                    placeholder="Observações sobre o agendamento..."
                    className="mt-1"
                    rows={3}
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
                  disabled={salvando}
                >
                  <Save className="mr-2 h-4 w-4" />
                  {salvando ? 'Salvando...' : 'Agendar Consulta'}
                </Button>
              </CardContent>
            </Card>

            {/* Informações */}
            <Card className="shadow-lg border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Informações</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Pacientes:</strong> {patients.length} cadastrados</p>
                  <p><strong>Profissionais:</strong> {professionals.length} cadastrados</p>
                </div>
                {(patients.length === 0 || professionals.length === 0) && (
                  <p className="text-sm text-red-500 mt-2">
                    Cadastre pacientes e profissionais antes de agendar
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendamentoForm;
