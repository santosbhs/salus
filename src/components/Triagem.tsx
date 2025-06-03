
import React, { useState } from 'react';
import { ArrowLeft, User, Heart, Thermometer, Activity, AlertTriangle, Clock, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Triagem = ({ onBack }) => {
  const [paciente, setPaciente] = useState('');
  const [queixaPrincipal, setQueixaPrincipal] = useState('');
  const [sinaisVitais, setSinaisVitais] = useState({
    pressao: '',
    temperatura: '',
    frequenciaCardiaca: '',
    saturacao: ''
  });
  const [classificacao, setClassificacao] = useState('');

  const classificacoesManchester = [
    { nivel: 'vermelho', nome: 'Emergência', tempo: 'Imediato', cor: 'bg-red-500' },
    { nivel: 'laranja', nome: 'Muito Urgente', tempo: '10 min', cor: 'bg-orange-500' },
    { nivel: 'amarelo', nome: 'Urgente', tempo: '60 min', cor: 'bg-yellow-500' },
    { nivel: 'verde', nome: 'Pouco Urgente', tempo: '120 min', cor: 'bg-green-500' },
    { nivel: 'azul', nome: 'Não Urgente', tempo: '240 min', cor: 'bg-blue-500' }
  ];

  const handleSalvar = () => {
    console.log('Triagem salva:', { paciente, queixaPrincipal, sinaisVitais, classificacao });
    // Aqui você implementaria a lógica para salvar a triagem
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mr-4 hover:bg-red-50"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center">
              <AlertTriangle className="text-white h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Sistema de Triagem</h1>
              <p className="text-gray-600">Protocolo de Manchester</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Formulário Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Dados do Paciente */}
            <Card className="shadow-lg border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center text-red-800">
                  <User className="mr-2 h-5 w-5" />
                  Dados do Paciente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="paciente">Nome do Paciente</Label>
                  <Input
                    id="paciente"
                    value={paciente}
                    onChange={(e) => setPaciente(e.target.value)}
                    placeholder="Digite o nome completo do paciente"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="queixa">Queixa Principal</Label>
                  <Textarea
                    id="queixa"
                    value={queixaPrincipal}
                    onChange={(e) => setQueixaPrincipal(e.target.value)}
                    placeholder="Descreva a queixa principal do paciente"
                    className="mt-1"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Sinais Vitais */}
            <Card className="shadow-lg border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center text-red-800">
                  <Activity className="mr-2 h-5 w-5" />
                  Sinais Vitais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="pressao">Pressão Arterial</Label>
                    <Input
                      id="pressao"
                      value={sinaisVitais.pressao}
                      onChange={(e) => setSinaisVitais({...sinaisVitais, pressao: e.target.value})}
                      placeholder="120/80"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="temperatura">Temperatura (°C)</Label>
                    <Input
                      id="temperatura"
                      value={sinaisVitais.temperatura}
                      onChange={(e) => setSinaisVitais({...sinaisVitais, temperatura: e.target.value})}
                      placeholder="36.5"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fc">Frequência Cardíaca</Label>
                    <Input
                      id="fc"
                      value={sinaisVitais.frequenciaCardiaca}
                      onChange={(e) => setSinaisVitais({...sinaisVitais, frequenciaCardiaca: e.target.value})}
                      placeholder="80 bpm"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="saturacao">Saturação O2 (%)</Label>
                    <Input
                      id="saturacao"
                      value={sinaisVitais.saturacao}
                      onChange={(e) => setSinaisVitais({...sinaisVitais, saturacao: e.target.value})}
                      placeholder="98%"
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Classificação */}
            <Card className="shadow-lg border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center text-red-800">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Classificação de Risco
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {classificacoesManchester.map((nivel, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        classificacao === nivel.nivel
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setClassificacao(nivel.nivel)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-6 h-6 ${nivel.cor} rounded-full`}></div>
                          <div>
                            <p className="font-semibold text-gray-900">{nivel.nome}</p>
                            <p className="text-sm text-gray-600">Tempo máximo: {nivel.tempo}</p>
                          </div>
                        </div>
                        <Clock className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Painel Lateral */}
          <div className="space-y-6">
            {/* Ações */}
            <Card className="shadow-lg border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800">Ações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                  onClick={handleSalvar}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Salvar Triagem
                </Button>
                <Button variant="outline" className="w-full">
                  Imprimir Protocolo
                </Button>
              </CardContent>
            </Card>

            {/* Status Atual */}
            {classificacao && (
              <Card className="shadow-lg border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-800">Classificação Atual</CardTitle>
                </CardHeader>
                <CardContent>
                  {classificacoesManchester
                    .filter(nivel => nivel.nivel === classificacao)
                    .map((nivel, index) => (
                      <div key={index} className="text-center">
                        <div className={`w-16 h-16 ${nivel.cor} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                          <AlertTriangle className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{nivel.nome}</h3>
                        <p className="text-gray-600">Atendimento em até {nivel.tempo}</p>
                      </div>
                    ))}
                </CardContent>
              </Card>
            )}

            {/* Últimas Triagens */}
            <Card className="shadow-lg border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800">Últimas Triagens</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                    <span className="text-sm">João Silva</span>
                    <Badge className="bg-red-500">Emergência</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                    <span className="text-sm">Maria Santos</span>
                    <Badge className="bg-yellow-500 text-black">Urgente</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                    <span className="text-sm">Pedro Costa</span>
                    <Badge className="bg-green-500">Pouco Urgente</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Triagem;
