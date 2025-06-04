import React, { useState } from 'react';
import { Plus, Trash2, FileSearch, Printer, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const ExamRequest = ({ onSave, patientName }) => {
  const [examData, setExamData] = useState({
    exams: [],
    clinicalHistory: '',
    clinicalQuestion: '',
    urgency: 'routine',
    observations: ''
  });

  const examCategories = {
    'Laboratório': [
      'Hemograma completo',
      'Glicemia de jejum',
      'Colesterol total e frações',
      'Triglicerídeos',
      'Ureia e Creatinina',
      'TGO/TGP',
      'TSH',
      'T3 e T4',
      'PSA',
      'Exame de urina',
      'Parasitológico de fezes',
      'Cultura de urina',
      'PCR',
      'VHS',
      'Ácido úrico'
    ],
    'Cardiologia': [
      'Eletrocardiograma (ECG)',
      'Ecocardiograma',
      'Teste ergométrico',
      'Holter 24h',
      'MAPA',
      'Cintilografia miocárdica'
    ],
    'Imagem': [
      'Radiografia de tórax',
      'Radiografia de abdome',
      'Ultrassonografia abdominal',
      'Ultrassonografia pélvica',
      'Tomografia de crânio',
      'Tomografia de abdome',
      'Ressonância magnética',
      'Mamografia',
      'Densitometria óssea'
    ],
    'Endoscopia': [
      'Endoscopia digestiva alta',
      'Colonoscopia',
      'Retossigmoidoscopia'
    ],
    'Outros': [
      'Espirometria',
      'Audiometria',
      'Oftalmoscopia',
      'Biopsia',
      'Punção',
      'Eletroencefalograma'
    ]
  };

  const urgencyLevels = [
    { value: 'routine', label: 'Rotina', color: 'text-green-600' },
    { value: 'priority', label: 'Prioritário', color: 'text-yellow-600' },
    { value: 'urgent', label: 'Urgente', color: 'text-red-600' }
  ];

  const addExam = (examName, category) => {
    const newExam = {
      id: Date.now(),
      name: examName,
      category: category,
      preparations: getExamPreparations(examName),
      selected: true
    };
    
    setExamData({
      ...examData,
      exams: [...examData.exams, newExam]
    });
  };

  const removeExam = (id) => {
    setExamData({
      ...examData,
      exams: examData.exams.filter(exam => exam.id !== id)
    });
  };

  const getExamPreparations = (examName) => {
    const preparations = {
      'Glicemia de jejum': 'Jejum de 8-12 horas',
      'Colesterol total e frações': 'Jejum de 12 horas',
      'Triglicerídeos': 'Jejum de 12 horas',
      'Ultrassonografia abdominal': 'Jejum de 8 horas',
      'Endoscopia digestiva alta': 'Jejum de 8 horas',
      'Colonoscopia': 'Preparo intestinal conforme orientação',
      'Exame de urina': 'Primeira urina da manhã, higiene íntima',
      'Parasitológico de fezes': 'Fezes frescas, sem uso de laxantes'
    };
    
    return preparations[examName] || '';
  };

  const handleSave = () => {
    const requestData = {
      ...examData,
      patientName,
      requestDate: new Date().toLocaleDateString('pt-BR'),
      doctorName: 'Dr(a). [Nome do Médico]',
      crm: '[CRM]'
    };
    onSave(requestData);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    const currentDate = new Date().toLocaleDateString('pt-BR');
    
    let examsHtml = '';
    examData.exams.forEach((exam, index) => {
      examsHtml += `
        <div style="margin: 10px 0; padding: 8px; border-left: 3px solid #3b82f6;">
          <strong>${index + 1}. ${exam.name}</strong>
          ${exam.category ? `<br><small style="color: #666;">Categoria: ${exam.category}</small>` : ''}
          ${exam.preparations ? `<br><small style="color: #666;">Preparo: ${exam.preparations}</small>` : ''}
        </div>
      `;
    });
    
    printWindow.document.write(`
      <html>
        <head>
          <title>Solicitação de Exames - ${patientName}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px; }
            .patient-info { margin-bottom: 20px; background: #f5f5f5; padding: 15px; border-radius: 5px; }
            .content { margin: 20px 0; }
            .footer { margin-top: 40px; text-align: center; font-size: 12px; color: #666; }
            .doctor-signature { margin-top: 50px; text-align: right; }
            h1 { color: #333; margin-bottom: 10px; }
            h2 { color: #666; margin-bottom: 15px; }
            .urgency { 
              display: inline-block; 
              padding: 4px 8px; 
              border-radius: 4px; 
              font-size: 12px; 
              font-weight: bold;
              ${examData.urgency === 'urgent' ? 'background: #fee2e2; color: #dc2626;' : 
                examData.urgency === 'priority' ? 'background: #fef3c7; color: #d97706;' : 
                'background: #dcfce7; color: #16a34a;'}
            }
            @media print { body { margin: 0; } }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Salus Healthcare Platform</h1>
            <h2>Solicitação de Exames Complementares</h2>
            <p>Data: ${currentDate}</p>
          </div>
          
          <div class="patient-info">
            <strong>Paciente:</strong> ${patientName}<br>
            <strong>Prioridade:</strong> 
            <span class="urgency">
              ${urgencyLevels.find(u => u.value === examData.urgency)?.label || 'Rotina'}
            </span>
          </div>
          
          ${examData.clinicalHistory ? `
            <div class="content">
              <h3>História Clínica:</h3>
              <p>${examData.clinicalHistory}</p>
            </div>
          ` : ''}
          
          ${examData.clinicalQuestion ? `
            <div class="content">
              <h3>Questão Clínica:</h3>
              <p>${examData.clinicalQuestion}</p>
            </div>
          ` : ''}
          
          <div class="content">
            <h3>Exames Solicitados:</h3>
            ${examsHtml}
          </div>
          
          ${examData.observations ? `
            <div class="content">
              <h3>Observações:</h3>
              <p>${examData.observations}</p>
            </div>
          ` : ''}
          
          <div class="doctor-signature">
            <p>_________________________________</p>
            <p>Dr(a). [Nome do Médico]</p>
            <p>CRM: [Número do CRM]</p>
          </div>
          
          <div class="footer">
            <p>Salus Healthcare Platform - Saúde e inovação em suas mãos!</p>
            <p>Este documento foi gerado eletronicamente em ${currentDate}</p>
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center">
            <FileSearch className="mr-2 h-5 w-5" />
            Solicitação de Exames - {patientName}
          </CardTitle>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handlePrint}
            disabled={examData.exams.length === 0}
          >
            <Printer className="h-4 w-4 mr-2" />
            Imprimir
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>História Clínica Resumida</Label>
            <Textarea
              value={examData.clinicalHistory}
              onChange={(e) => setExamData({...examData, clinicalHistory: e.target.value})}
              placeholder="Resumo da história clínica relevante..."
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label>Questão Clínica</Label>
            <Textarea
              value={examData.clinicalQuestion}
              onChange={(e) => setExamData({...examData, clinicalQuestion: e.target.value})}
              placeholder="Qual questão clínica os exames devem responder?"
              rows={3}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Prioridade</Label>
          <Select 
            value={examData.urgency} 
            onValueChange={(value) => setExamData({...examData, urgency: value})}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione a prioridade" />
            </SelectTrigger>
            <SelectContent>
              {urgencyLevels.map((level) => (
                <SelectItem key={level.value} value={level.value}>
                  <span className={level.color}>{level.label}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <Label className="text-base font-medium">Exames por Categoria</Label>
          
          {Object.entries(examCategories).map(([category, exams]) => (
            <Card key={category} className="border-gray-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {exams.map((exam) => (
                    <div key={exam} className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => addExam(exam, category)}
                        disabled={examData.exams.some(e => e.name === exam)}
                        className="flex-1 justify-start text-left"
                      >
                        <Plus className="h-3 w-3 mr-2" />
                        {exam}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {examData.exams.length > 0 && (
          <div className="space-y-4">
            <Label className="text-base font-medium">Exames Selecionados</Label>
            <div className="space-y-3">
              {examData.exams.map((exam, index) => (
                <div key={exam.id} className="flex items-start justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-blue-800">{index + 1}. {exam.name}</span>
                      <span className="text-xs bg-blue-200 text-blue-700 px-2 py-1 rounded">
                        {exam.category}
                      </span>
                    </div>
                    {exam.preparations && (
                      <p className="text-sm text-blue-600 mt-1">
                        <strong>Preparo:</strong> {exam.preparations}
                      </p>
                    )}
                  </div>
                  <Button 
                    onClick={() => removeExam(exam.id)} 
                    size="sm" 
                    variant="ghost"
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {examData.exams.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <FileSearch className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Nenhum exame selecionado</p>
            <p className="text-sm">Clique nos exames acima para adicioná-los à solicitação</p>
          </div>
        )}

        <div className="space-y-2">
          <Label>Observações Adicionais</Label>
          <Textarea
            value={examData.observations}
            onChange={(e) => setExamData({...examData, observations: e.target.value})}
            placeholder="Informações complementares, instruções especiais..."
            rows={3}
          />
        </div>

        <div className="flex justify-end space-x-3 pt-4 border-t">
          <Button variant="outline">
            Cancelar
          </Button>
          <Button 
            onClick={handleSave}
            disabled={examData.exams.length === 0}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            <Save className="h-4 w-4 mr-2" />
            Gerar Solicitação
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExamRequest;
