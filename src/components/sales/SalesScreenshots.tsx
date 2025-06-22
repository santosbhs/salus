
import React from 'react';
import { Monitor, Calendar, FileText, Users, BarChart3, Stethoscope } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const SalesScreenshots = () => {
  const screenshots = [
    {
      title: "Dashboard Profissional",
      description: "Visão geral completa com métricas em tempo real",
      icon: Monitor,
      mockup: {
        type: "dashboard",
        stats: [
          { label: "Pacientes", value: "125", color: "blue" },
          { label: "Consultas Hoje", value: "15", color: "green" },
          { label: "Taxa Ocupação", value: "78%", color: "purple" }
        ]
      }
    },
    {
      title: "Agenda Inteligente",
      description: "Agendamento automático com confirmações",
      icon: Calendar,
      mockup: {
        type: "calendar",
        appointments: [
          { time: "09:00", patient: "Maria Silva", type: "Consulta" },
          { time: "10:30", patient: "João Santos", type: "Retorno" },
          { time: "14:00", patient: "Ana Costa", type: "Exame" }
        ]
      }
    },
    {
      title: "Prontuário Digital",
      description: "Histórico completo e prescrições digitais",
      icon: FileText,
      mockup: {
        type: "record",
        patient: "Maria Silva",
        fields: ["Anamnese", "Exame Físico", "Diagnóstico", "Prescrição"]
      }
    },
    {
      title: "Gestão de Pacientes",
      description: "Cadastro completo com histórico médico",
      icon: Users,
      mockup: {
        type: "patients",
        list: [
          { name: "Maria Silva", age: "35", lastVisit: "15/12/2024" },
          { name: "João Santos", age: "42", lastVisit: "14/12/2024" },
          { name: "Ana Costa", age: "28", lastVisit: "13/12/2024" }
        ]
      }
    },
    {
      title: "Triagem Manchester",
      description: "Classificação de risco automatizada",
      icon: Stethoscope,
      mockup: {
        type: "triage",
        patients: [
          { name: "Pedro Lima", priority: "red", time: "5 min" },
          { name: "Lucia Ferreira", priority: "yellow", time: "12 min" },
          { name: "Carlos Souza", priority: "green", time: "25 min" }
        ]
      }
    },
    {
      title: "Relatórios Gerenciais",
      description: "Analytics completos e insights estratégicos",
      icon: BarChart3,
      mockup: {
        type: "reports",
        charts: ["Faturamento Mensal", "Pacientes por Especialidade", "Performance por Médico"]
      }
    }
  ];

  const renderMockup = (mockup: any, index: number) => {
    switch (mockup.type) {
      case "dashboard":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg border">
            <div className="grid grid-cols-3 gap-4 mb-4">
              {mockup.stats.map((stat: any, i: number) => (
                <div key={i} className={`bg-${stat.color}-50 p-3 rounded-lg border border-${stat.color}-200`}>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-blue-200 rounded animate-pulse"></div>
              <div className="h-3 bg-green-200 rounded animate-pulse"></div>
              <div className="h-3 bg-purple-200 rounded animate-pulse"></div>
            </div>
          </div>
        );
      
      case "calendar":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg border">
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-3">Agenda de Hoje</h4>
              <div className="space-y-3">
                {mockup.appointments.map((apt: any, i: number) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline" className="text-blue-700">{apt.time}</Badge>
                      <div>
                        <div className="font-medium text-gray-900">{apt.patient}</div>
                        <div className="text-sm text-gray-600">{apt.type}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "record":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg border">
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-1">Prontuário</h4>
              <p className="text-sm text-gray-600">{mockup.patient}</p>
            </div>
            <div className="space-y-3">
              {mockup.fields.map((field: string, i: number) => (
                <div key={i} className="border border-gray-200 rounded-lg p-3">
                  <div className="font-medium text-gray-700 mb-2">{field}</div>
                  <div className="space-y-1">
                    <div className="h-2 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-2 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "patients":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg border">
            <h4 className="font-semibold text-gray-900 mb-4">Lista de Pacientes</h4>
            <div className="space-y-3">
              {mockup.list.map((patient: any, i: number) => (
                <div key={i} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{patient.name}</div>
                    <div className="text-sm text-gray-600">{patient.age} anos</div>
                  </div>
                  <div className="text-sm text-gray-500">{patient.lastVisit}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "triage":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg border">
            <h4 className="font-semibold text-gray-900 mb-4">Triagem - Pacientes Aguardando</h4>
            <div className="space-y-3">
              {mockup.patients.map((patient: any, i: number) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${
                      patient.priority === 'red' ? 'bg-red-500' :
                      patient.priority === 'yellow' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <div className="font-medium text-gray-900">{patient.name}</div>
                  </div>
                  <div className="text-sm text-gray-600">{patient.time}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "reports":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg border">
            <h4 className="font-semibold text-gray-900 mb-4">Relatórios</h4>
            <div className="space-y-4">
              {mockup.charts.map((chart: string, i: number) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4">
                  <div className="font-medium text-gray-700 mb-3">{chart}</div>
                  <div className="flex items-end space-x-2 h-20">
                    {[...Array(6)].map((_, j) => (
                      <div
                        key={j}
                        className="bg-blue-400 rounded-t animate-pulse"
                        style={{
                          height: `${Math.random() * 60 + 20}px`,
                          width: '20px'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Conheça a plataforma SALUS na prática
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore as principais funcionalidades através de capturas de tela reais do sistema
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {screenshots.map((screenshot, index) => {
              const Icon = screenshot.icon;
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full border-2 hover:border-blue-300 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{screenshot.title}</h3>
                          <p className="text-sm text-gray-600">{screenshot.description}</p>
                        </div>
                      </div>
                      
                      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        {renderMockup(screenshot.mockup, index)}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Teste todas essas funcionalidades gratuitamente por 14 dias
          </p>
          <Link to="/subscription">
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              Começar Teste Grátis
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
