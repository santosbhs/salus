
import React, { useState } from 'react';
import { Stethoscope, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useProfessionals } from '@/hooks/useProfessionals';

const ProfessionalForm = ({ onBack, onSave }) => {
  const { toast } = useToast();
  const { createProfessional, loading } = useProfessionals();
  const [formData, setFormData] = useState({
    nome: '',
    tipo: '',
    registro: '',
    especialidade: '',
    telefone: '',
    email: '',
    horario_inicio: '08:00',
    horario_fim: '18:00',
    dias_atendimento: [],
    observacoes: ''
  });

  const professionTypes = [
    { value: 'medico', label: 'Médico', registro: 'CRM' },
    { value: 'dentista', label: 'Dentista', registro: 'CRO' },
    { value: 'nutricionista', label: 'Nutricionista', registro: 'CRN' },
    { value: 'psicologo', label: 'Psicólogo', registro: 'CRP' },
    { value: 'fisioterapeuta', label: 'Fisioterapeuta', registro: 'CREFITO' },
    { value: 'enfermeiro', label: 'Enfermeiro', registro: 'COREN' },
    { value: 'farmaceutico', label: 'Farmacêutico', registro: 'CRF' },
    { value: 'fonoaudiologo', label: 'Fonoaudiólogo', registro: 'CRFa' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Salvando profissional:', formData);
    
    try {
      // Validar campos obrigatórios
      if (!formData.nome || !formData.tipo || !formData.registro || !formData.especialidade || !formData.telefone || !formData.email) {
        toast({
          title: "Campos obrigatórios",
          description: "Preencha todos os campos obrigatórios.",
          variant: "destructive",
        });
        return;
      }
      
      // Salvar no banco de dados via Supabase
      const newProfessional = await createProfessional(formData);
      
      if (newProfessional) {
        if (onSave) {
          onSave(newProfessional);
        }
      }
    } catch (error) {
      console.error("Erro ao salvar profissional:", error);
      toast({
        title: "Erro ao salvar",
        description: error.message || "Ocorreu um erro ao salvar o profissional.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const selectedProfessionType = professionTypes.find(p => p.value === formData.tipo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mr-4 hover:bg-emerald-50"
          >
            <X className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center">
              <Stethoscope className="text-white h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Novo Profissional</h1>
              <p className="text-gray-600">Cadastro completo de profissional de saúde</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="shadow-lg border-emerald-200">
            <CardHeader>
              <CardTitle className="text-emerald-800">Dados do Profissional</CardTitle>
              <CardDescription>
                Preencha todos os campos obrigatórios para cadastrar o profissional
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nome">Nome Completo *</Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => handleInputChange('nome', e.target.value)}
                    placeholder="Nome completo do profissional"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="tipo">Tipo de Profissional *</Label>
                  <Select
                    value={formData.tipo}
                    onValueChange={(value) => handleInputChange('tipo', value)}
                    required
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      {professionTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="registro">
                    Número do Registro {selectedProfessionType && `(${selectedProfessionType.registro})`} *
                  </Label>
                  <Input
                    id="registro"
                    value={formData.registro}
                    onChange={(e) => handleInputChange('registro', e.target.value)}
                    placeholder="Ex: 12345-SP"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="especialidade">Especialidade *</Label>
                  <Input
                    id="especialidade"
                    value={formData.especialidade}
                    onChange={(e) => handleInputChange('especialidade', e.target.value)}
                    placeholder="Especialidade do profissional"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input
                    id="telefone"
                    value={formData.telefone}
                    onChange={(e) => handleInputChange('telefone', e.target.value)}
                    placeholder="(11) 99999-9999"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="email@clinica.com"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="horario_inicio">Horário de Início</Label>
                  <Input
                    id="horario_inicio"
                    type="time"
                    value={formData.horario_inicio}
                    onChange={(e) => handleInputChange('horario_inicio', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="horario_fim">Horário de Fim</Label>
                  <Input
                    id="horario_fim"
                    type="time"
                    value={formData.horario_fim}
                    onChange={(e) => handleInputChange('horario_fim', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="observacoes">Observações</Label>
                <Input
                  id="observacoes"
                  value={formData.observacoes}
                  onChange={(e) => handleInputChange('observacoes', e.target.value)}
                  placeholder="Observações adicionais sobre o profissional"
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-4 mt-6">
            <Button type="button" variant="outline" onClick={onBack} disabled={loading}>
              Cancelar
            </Button>
            <Button 
              type="submit"
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Salvando...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Cadastrar Profissional
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfessionalForm;
