
import React from 'react';
import { Check, Star, Users, Shield, Clock, TrendingUp, Calendar, FileText, Heart, Award, Zap, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Sales = () => {
  const features = [
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description: "Sistema automatizado de agendamento com confirmação por SMS e WhatsApp"
    },
    {
      icon: FileText,
      title: "Prontuário Digital",
      description: "Histórico médico completo, prescrições digitais e laudos integrados"
    },
    {
      icon: Users,
      title: "Gestão de Pacientes",
      description: "Cadastro completo com foto, documentos e histórico de consultas"
    },
    {
      icon: TrendingUp,
      title: "Relatórios Gerenciais",
      description: "Dashboard completo com métricas de performance e faturamento"
    },
    {
      icon: Shield,
      title: "Segurança LGPD",
      description: "Dados criptografados e conformidade total com a Lei Geral de Proteção de Dados"
    },
    {
      icon: Heart,
      title: "Telemedicina",
      description: "Consultas online integradas com prescrição digital"
    }
  ];

  const plans = [
    {
      name: "Básico",
      price: "R$ 97",
      period: "/mês",
      description: "Ideal para consultórios individuais",
      features: [
        "Até 500 pacientes",
        "Agendamento online",
        "Prontuário digital",
        "Prescrições digitais",
        "Suporte por email",
        "Backup automático"
      ],
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Profissional",
      price: "R$ 197",
      period: "/mês",
      description: "Para clínicas com múltiplos profissionais",
      features: [
        "Até 2.000 pacientes",
        "Múltiplos usuários",
        "Relatórios avançados",
        "Telemedicina incluída",
        "Integração WhatsApp",
        "Suporte prioritário",
        "Customização da marca"
      ],
      popular: true,
      color: "border-green-500"
    },
    {
      name: "Enterprise",
      price: "R$ 397",
      period: "/mês",
      description: "Para hospitais e redes de clínicas",
      features: [
        "Pacientes ilimitados",
        "Usuários ilimitados",
        "API personalizada",
        "Integração TISS",
        "Suporte 24/7",
        "Treinamento incluído",
        "Gerente de conta dedicado"
      ],
      popular: false,
      color: "border-purple-500"
    }
  ];

  const testimonials = [
    {
      name: "Dr. João Silva",
      specialty: "Cardiologista",
      rating: 5,
      comment: "O Salus revolucionou minha clínica. Reduzi o tempo administrativo em 70% e meus pacientes adoram o agendamento online."
    },
    {
      name: "Dra. Maria Santos",
      specialty: "Pediatra",
      rating: 5,
      comment: "Segurança dos dados e facilidade de uso excepcionais. Recomendo para todos os colegas médicos."
    },
    {
      name: "Dr. Carlos Oliveira",
      specialty: "Ortopedista",
      rating: 5,
      comment: "Interface intuitiva e suporte técnico fantástico. Minha produtividade aumentou significativamente."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-700 to-emerald-700 rounded-lg flex items-center justify-center">
              <Zap className="text-white h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">Salus</h1>
              <p className="text-xs text-gray-600">Saúde e inovação</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-green-700">
                Entrar
              </Button>
            </Link>
            <Link to="/subscription">
              <Button className="bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800">
                Assinar Agora
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
            🚀 Novo: Telemedicina integrada
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
            Modernize sua clínica com tecnologia de ponta
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            O sistema de gestão clínica mais completo do Brasil. Aumente sua produtividade, 
            melhore a experiência dos pacientes e potencialize seus resultados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/subscription">
              <Button size="lg" className="bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 text-lg px-8 py-6">
                Começar Teste Grátis <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white text-lg px-8 py-6">
              Ver Demonstração
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-600 mr-2" />
              30 dias grátis
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-600 mr-2" />
              Sem compromisso
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-600 mr-2" />
              Suporte incluído
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tudo que sua clínica precisa em um só lugar
            </h2>
            <p className="text-xl text-gray-600">
              Funcionalidades completas para revolucionar sua gestão médica
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-700 to-emerald-700 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-700 to-emerald-700 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div className="text-green-100">Médicos ativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500k+</div>
              <div className="text-green-100">Pacientes atendidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-green-100">Uptime garantido</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-green-100">Suporte técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Planos que crescem com sua clínica
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano ideal para suas necessidades
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all ${plan.color} ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-600 text-white">
                      <Award className="h-3 w-3 mr-1" />
                      Mais Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-green-700 my-4">
                    {plan.price}
                    <span className="text-lg text-gray-500 font-normal">{plan.period}</span>
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/subscription" className="block w-full">
                    <Button 
                      className={`w-full mt-6 ${plan.popular 
                        ? 'bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800' 
                        : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                    >
                      Começar Agora
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
              Histórias reais de sucesso com o Salus
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-700 to-emerald-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para revolucionar sua clínica?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Junte-se a milhares de profissionais que já transformaram sua prática médica com o Salus
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/subscription">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-6">
                Começar Teste Grátis Agora
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 text-lg px-8 py-6">
              Falar com Especialista
            </Button>
          </div>
          <p className="mt-6 text-green-100">
            💳 Sem cartão de crédito • ⚡ Ativação imediata • 🛡️ Dados 100% seguros
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-700 to-emerald-700 rounded-lg flex items-center justify-center">
                  <Zap className="text-white h-5 w-5" />
                </div>
                <span className="text-xl font-bold">Salus</span>
              </div>
              <p className="text-gray-400">
                Modernizando a gestão médica com tecnologia de ponta e segurança total.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Funcionalidades</li>
                <li>Preços</li>
                <li>Integrações</li>
                <li>Segurança</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Central de Ajuda</li>
                <li>Documentação</li>
                <li>Treinamentos</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre nós</li>
                <li>Blog</li>
                <li>Carreiras</li>
                <li>Privacidade</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Salus - SalusHub.com. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sales;
