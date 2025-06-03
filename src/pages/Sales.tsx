
import React from 'react';
import { Check, Star, Users, Shield, Clock, TrendingUp, Calendar, FileText, Heart, Award, Zap, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';

const Sales = () => {
  const features = [
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description: "Sistema automatizado de agendamento com confirmação por SMS e WhatsApp",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop"
    },
    {
      icon: FileText,
      title: "Prontuário Digital",
      description: "Histórico médico completo, prescrições digitais e laudos integrados",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop"
    },
    {
      icon: Users,
      title: "Gestão de Pacientes",
      description: "Cadastro completo com foto, documentos e histórico de consultas",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop"
    },
    {
      icon: TrendingUp,
      title: "Relatórios Gerenciais",
      description: "Dashboard completo com métricas de performance e faturamento",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop"
    },
    {
      icon: Shield,
      title: "Segurança LGPD",
      description: "Dados criptografados e conformidade total com a Lei Geral de Proteção de Dados",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop"
    },
    {
      icon: Heart,
      title: "Telemedicina",
      description: "Consultas online integradas com prescrição digital",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop"
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
      comment: "O Salus revolucionou minha clínica. Reduzi o tempo administrativo em 70% e meus pacientes adoram o agendamento online.",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Dra. Maria Santos",
      specialty: "Pediatra",
      rating: 5,
      comment: "Segurança dos dados e facilidade de uso excepcionais. Recomendo para todos os colegas médicos.",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Dr. Carlos Oliveira",
      specialty: "Ortopedista",
      rating: 5,
      comment: "Interface intuitiva e suporte técnico fantástico. Minha produtividade aumentou significativamente.",
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face"
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

      {/* Hero Section with Image */}
      <section className="py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
                🚀 Novo: Telemedicina integrada
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent leading-tight">
                Modernize sua clínica com tecnologia de ponta
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                O sistema de gestão clínica mais completo do Brasil. Aumente sua produtividade, 
                melhore a experiência dos pacientes e potencialize seus resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/subscription">
                  <Button size="lg" className="bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 text-lg px-8 py-6">
                    Começar Teste Grátis <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white text-lg px-8 py-6">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Demonstração
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-500">
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
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <AspectRatio ratio={16/10}>
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop" 
                    alt="Sistema Salus em uso" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-green-700 to-emerald-700 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-emerald-700 to-green-700 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Images */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tudo que sua clínica precisa em um só lugar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Funcionalidades completas para revolucionar sua gestão médica com interface moderna e intuitiva
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-green-700" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Interface moderna e intuitiva
            </h2>
            <p className="text-xl text-gray-600">
              Desenvolvido pensando na experiência do usuário
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <AspectRatio ratio={16/9}>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop" 
                  alt="Dashboard do Sistema Salus" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-700 to-emerald-700 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">10k+</div>
              <div className="text-green-100">Médicos ativos</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">500k+</div>
              <div className="text-green-100">Pacientes atendidos</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">99.9%</div>
              <div className="text-green-100">Uptime garantido</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">24/7</div>
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
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.color} ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}>
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
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
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

      {/* Testimonials Section with Avatars */}
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
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.specialty}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic leading-relaxed">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop" 
            alt="Clínica moderna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-900/90"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para revolucionar sua clínica?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto leading-relaxed">
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
          <p className="mt-6 text-green-100 text-sm">
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
              <p className="text-gray-400 leading-relaxed">
                Modernizando a gestão médica com tecnologia de ponta e segurança total.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Funcionalidades</li>
                <li className="hover:text-white transition-colors cursor-pointer">Preços</li>
                <li className="hover:text-white transition-colors cursor-pointer">Integrações</li>
                <li className="hover:text-white transition-colors cursor-pointer">Segurança</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Central de Ajuda</li>
                <li className="hover:text-white transition-colors cursor-pointer">Documentação</li>
                <li className="hover:text-white transition-colors cursor-pointer">Treinamentos</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contato</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Sobre nós</li>
                <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-white transition-colors cursor-pointer">Carreiras</li>
                <li className="hover:text-white transition-colors cursor-pointer">Privacidade</li>
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
