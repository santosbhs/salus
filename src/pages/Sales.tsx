
import React from 'react';
import { SalesHero } from '@/components/sales/SalesHero';
import { SalesFeatures } from '@/components/sales/SalesFeatures';
import { SalesPlatformPreview } from '@/components/sales/SalesPlatformPreview';
import { SalesStats } from '@/components/sales/SalesStats';
import { SalesTestimonials } from '@/components/sales/SalesTestimonials';
import { SalesCTA } from '@/components/sales/SalesCTA';
import { Check, Star, Users, Shield, Clock, TrendingUp, Calendar, FileText, Heart, Award, Zap, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Sales = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50 animate-fade-in">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-700 to-emerald-700 rounded-lg flex items-center justify-center animate-pulse">
              <Zap className="text-white h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">Salus</h1>
              <p className="text-xs text-gray-600">Saúde e inovação</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-green-700 hover:scale-105 transition-transform duration-200">
                Entrar
              </Button>
            </Link>
            <Link to="/subscription">
              <Button className="bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 transform hover:scale-105 transition-all duration-300">
                Assinar Agora
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <SalesHero />
      <SalesFeatures />
      <SalesPlatformPreview />
      <SalesStats />

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full opacity-60 animate-bounce"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-green-400 rotate-45 animate-ping"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Planos que crescem com sua clínica
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in">
              Escolha o plano ideal para suas necessidades
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${plan.color} ${plan.popular ? 'ring-2 ring-green-500 scale-105 animate-pulse' : ''} animate-fade-in`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <Badge className="bg-green-600 text-white">
                      <Award className="h-3 w-3 mr-1" />
                      Mais Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl group-hover:text-green-700 transition-colors duration-300">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-green-700 my-4 animate-pulse">
                    {plan.price}
                    <span className="text-lg text-gray-500 font-normal">{plan.period}</span>
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center hover:scale-105 transition-transform duration-200">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 animate-pulse" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/subscription" className="block w-full">
                    <Button 
                      className={`w-full mt-6 transform hover:scale-105 transition-all duration-300 ${plan.popular 
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

      <SalesTestimonials />
      <SalesCTA />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 relative overflow-hidden">
        {/* Animated footer elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-2 h-20 bg-white/10 rotate-12 animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-3 h-16 bg-white/10 -rotate-12 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white/20 rotate-45 animate-ping"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-700 to-emerald-700 rounded-lg flex items-center justify-center animate-pulse">
                  <Zap className="text-white h-5 w-5" />
                </div>
                <span className="text-xl font-bold">Salus</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Modernizando a gestão médica com tecnologia de ponta e segurança total.
              </p>
            </div>
            <div className="animate-fade-in">
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-200">Funcionalidades</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-200">Preços</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-200">Integrações</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-200">Segurança</li>
              </ul>
            </div>
            <div className="animate-fade-in">
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-200">Central de Ajuda</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-200">Documentação</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-200">Treinamentos</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-200">Contato</li>
              </ul>
            </div>
            <div className="animate-fade-in">
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-200">Sobre nós</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-200">Blog</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-200">Carreiras</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-200">Privacidade</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 animate-fade-in">
            <p>&copy; 2024 Salus - SalusHub.com. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sales;
