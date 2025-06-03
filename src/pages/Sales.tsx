
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
    <div className="min-h-screen salus-green-bg">
      {/* Header com marca Salus em destaque */}
      <header className="bg-white/95 backdrop-blur-sm border-b-2 border-green-200 sticky top-0 z-50 animate-gentle-fade-in shadow-lg">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 salus-green-bg rounded-xl flex items-center justify-center animate-gentle-spin shadow-xl">
              <Zap className="text-white h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold salus-green-text">Salus</h1>
              <p className="text-lg text-green-700 font-medium">Saúde e Inovação</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/login">
              <Button variant="ghost" className="text-green-700 hover:bg-green-50 text-lg px-6 py-3 font-semibold hover:scale-105 transition-all duration-300">
                Entrar
              </Button>
            </Link>
            <Link to="/subscription">
              <Button className="salus-green-bg text-white hover:shadow-xl text-lg px-8 py-4 font-bold transform hover:scale-105 transition-all duration-300 rounded-xl">
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

      {/* Pricing Section com mais verde */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 relative overflow-hidden">
        {/* Elementos animados de fundo mais suaves */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-full animate-gentle-float"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-r from-emerald-200/20 to-green-200/20 rounded-full animate-gentle-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-green-500 rotate-45 animate-gentle-pulse"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-gentle-fade-in">
              Planos que crescem com sua <span className="salus-green-text">clínica</span>
            </h2>
            <p className="text-2xl text-gray-700 animate-gentle-fade-in">
              Escolha o plano ideal para suas necessidades
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${plan.color} ${plan.popular ? 'ring-4 ring-green-400 scale-105 animate-gentle-pulse border-green-400' : ''} animate-gentle-fade-in bg-white/90 backdrop-blur-sm`}>
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 animate-gentle-bounce">
                    <Badge className="salus-green-bg text-white text-lg py-2 px-4 shadow-lg">
                      <Award className="h-4 w-4 mr-2" />
                      Mais Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl group-hover:text-green-700 transition-colors duration-300">{plan.name}</CardTitle>
                  <div className="text-5xl font-bold salus-green-text my-6 animate-gentle-pulse">
                    {plan.price}
                    <span className="text-xl text-gray-500 font-normal">{plan.period}</span>
                  </div>
                  <CardDescription className="text-lg text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center hover:scale-105 transition-transform duration-300">
                        <Check className="h-6 w-6 text-green-600 mr-4 flex-shrink-0 animate-gentle-pulse" />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/subscription" className="block w-full">
                    <Button 
                      className={`w-full mt-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 ${plan.popular 
                        ? 'salus-green-bg hover:shadow-xl text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
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

      {/* Footer com mais verde */}
      <footer className="salus-green-bg text-white py-16 px-4 relative overflow-hidden">
        {/* Elementos animados do footer mais suaves */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-3 h-24 bg-white/10 rotate-12 animate-gentle-pulse"></div>
          <div className="absolute bottom-10 right-20 w-4 h-20 bg-white/10 -rotate-12 animate-gentle-float"></div>
          <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-white/20 rotate-45 animate-gentle-bounce"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="animate-gentle-fade-in">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center animate-gentle-spin">
                  <Zap className="text-white h-7 w-7" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Salus</span>
                  <p className="text-green-100 text-sm">Saúde e Inovação</p>
                </div>
              </div>
              <p className="text-green-100 leading-relaxed text-lg">
                Modernizando a gestão médica com tecnologia de ponta e segurança total.
              </p>
            </div>
            <div className="animate-gentle-fade-in">
              <h3 className="font-bold mb-6 text-xl">Produto</h3>
              <ul className="space-y-3 text-green-100">
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-300 text-lg">Funcionalidades</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-300 text-lg">Preços</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-300 text-lg">Integrações</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-300 text-lg">Segurança</li>
              </ul>
            </div>
            <div className="animate-gentle-fade-in">
              <h3 className="font-bold mb-6 text-xl">Suporte</h3>
              <ul className="space-y-3 text-green-100">
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-300 text-lg">Central de Ajuda</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-300 text-lg">Documentação</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-300 text-lg">Treinamentos</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-300 text-lg">Contato</li>
              </ul>
            </div>
            <div className="animate-gentle-fade-in">
              <h3 className="font-bold mb-6 text-xl">Empresa</h3>
              <ul className="space-y-3 text-green-100">
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-300 text-lg">Sobre nós</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-300 text-lg">Blog</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-300 text-lg">Carreiras</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:scale-105 transform duration-300 text-lg">Privacidade</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-green-100 animate-gentle-fade-in">
            <p className="text-lg">&copy; 2024 <span className="font-bold text-white">Salus - Saúde e Inovação</span>. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sales;
