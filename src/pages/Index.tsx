import React, { useState, useEffect } from 'react';
import { Sun, Moon, Code, Smartphone, Globe, Users, Star, ArrowRight, Menu, X, ExternalLink, Github } from 'lucide-react';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Todos');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Criamos aplicações web modernas e responsivas usando as mais recentes tecnologias."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Apps Mobile", 
      description: "Desenvolvemos aplicativos nativos e híbridos para iOS e Android."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sistemas Corporativos",
      description: "Soluções personalizadas para automatizar e otimizar processos empresariais."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consultoria Tech",
      description: "Consultoria especializada em arquitetura de software e transformação digital."
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Plataforma de Vendas Online",
      description: "E-commerce completo com painel administrativo, integração de pagamentos e sistema de gestão de estoque.",
      category: "Web",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "e-commerce",
      type: "E-COMMERCE"
    },
    {
      id: 2,
      title: "App de Delivery",
      description: "Aplicativo completo para delivery com geolocalização, pagamentos online e sistema de avaliações.",
      category: "Mobile",
      technologies: ["React Native", "Firebase", "Maps API"],
      image: "delivery",
      type: "MOBILE APP"
    },
    {
      id: 3,
      title: "Sistema ERP Corporativo",
      description: "Sistema de gestão empresarial completo com módulos financeiro, estoque, vendas e relatórios avançados.",
      category: "Sistemas",
      technologies: ["Vue.js", "Laravel", "PostgreSQL"],
      image: "erp",
      type: "SISTEMA"
    },
    {
      id: 4,
      title: "Portal HealthCare",
      description: "Sistema de gestão hospitalar com agendamentos, prontuários eletrônicos e telemedicina.",
      category: "Web",
      technologies: ["React", "Python", "MySQL"],
      image: "healthcare",
      type: "HEALTHCARE"
    },
    {
      id: 5,
      title: "App Fintech",
      description: "Aplicativo financeiro com transferências, investimentos e carteira digital integrada.",
      category: "Mobile",
      technologies: ["Flutter", "Node.js", "PostgreSQL"],
      image: "fintech",
      type: "FINTECH APP"
    },
    {
      id: 6,
      title: "Dashboard Logística",
      description: "Sistema de controle logístico com rastreamento em tempo real e otimização de rotas.",
      category: "Sistemas",
      technologies: ["React", "Express", "MongoDB"],
      image: "logistics",
      type: "LOGISTICS"
    }
  ];

  const filters = ['Todos', 'Web', 'Mobile', 'Sistemas'];

  const filteredPortfolio = activeFilter === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const getProjectIcon = (type) => {
    switch (type) {
      case 'E-COMMERCE':
        return <Globe className="w-12 h-12 text-blue-600" />;
      case 'MOBILE APP':
        return <Smartphone className="w-12 h-12 text-green-600" />;
      case 'SISTEMA':
        return <Code className="w-12 h-12 text-purple-600" />;
      case 'HEALTHCARE':
        return <Users className="w-12 h-12 text-red-600" />;
      case 'FINTECH APP':
        return <Smartphone className="w-12 h-12 text-emerald-600" />;
      case 'LOGISTICS':
        return <Globe className="w-12 h-12 text-orange-600" />;
      default:
        return <Code className="w-12 h-12 text-blue-600" />;
    }
  };

  const getProjectBg = (type) => {
    switch (type) {
      case 'E-COMMERCE':
        return 'bg-gradient-to-br from-blue-500 to-blue-600';
      case 'MOBILE APP':
        return 'bg-gradient-to-br from-green-500 to-green-600';
      case 'SISTEMA':
        return 'bg-gradient-to-br from-purple-500 to-purple-600';
      case 'HEALTHCARE':
        return 'bg-gradient-to-br from-red-500 to-red-600';
      case 'FINTECH APP':
        return 'bg-gradient-to-br from-emerald-500 to-emerald-600';
      case 'LOGISTICS':
        return 'bg-gradient-to-br from-orange-500 to-orange-600';
      default:
        return 'bg-gradient-to-br from-blue-500 to-blue-600';
    }
  };

  const testimonials = [
    {
      name: "Maria Silva",
      company: "TechCorp",
      position: "CEO",
      text: "A equipe da SoftDev transformou nossa visão em realidade. O sistema desenvolvido superou todas as expectativas!",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "João Santos",
      company: "InnovaTech",
      position: "CTO", 
      text: "Profissionais excepcionais! Entregaram o projeto no prazo e com qualidade impecável. Recomendo fortemente.",
      rating: 5,
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      company: "FutureSoft",
      position: "Diretora de TI",
      text: "O aplicativo mobile que desenvolveram aumentou nossa produtividade em 300%. Simplesmente fantástico!",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Carlos Oliveira",
      company: "DataFlow",
      position: "Gerente de Projetos",
      text: "Comunicação clara, código limpo e suporte excepcional. Parceria que vale a pena investir!",
      rating: 5,
      avatar: "CO"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 text-gray-900 dark:text-white">
        
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Codetek
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-blue-600 transition-colors duration-200">Início</a>
              <a href="#services" className="hover:text-blue-600 transition-colors duration-200">Serviços</a>
              <a href="#portfolio" className="hover:text-blue-600 transition-colors duration-200">Portfólio</a>
              <a href="#testimonials" className="hover:text-blue-600 transition-colors duration-200">Depoimentos</a>
              <a href="#about" className="hover:text-blue-600 transition-colors duration-200">Sobre</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">Contato</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <a href="#home" className="hover:text-blue-600 transition-colors duration-200">Início</a>
                <a href="#services" className="hover:text-blue-600 transition-colors duration-200">Serviços</a>
                <a href="#portfolio" className="hover:text-blue-600 transition-colors duration-200">Portfólio</a>
                <a href="#testimonials" className="hover:text-blue-600 transition-colors duration-200">Depoimentos</a>
                <a href="#about" className="hover:text-blue-600 transition-colors duration-200">Sobre</a>
                <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">Contato</a>
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section id="home" className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                Transformamos
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}ideias{" "}
                </span>
                em software
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Somos especialistas em desenvolvimento de software sob medida. 
                Criamos soluções inovadoras que impulsionam o crescimento do seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://wa.me/5512991015266?text=Olá!%20Quero%20começar%20um%20projeto.">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                      <span>Começar Projeto</span>
              </button>
              </a>
               
                <a href= "#portfolio" className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 px-8 py-4 rounded-full transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                  Ver Portfolio
                </a>
              </div>
            </div>

            {/* Floating Animation Elements */}
            <div className="relative mt-16">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
              </div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-3xl font-bold text-blue-600">150+</div>
                  <div className="text-gray-600 dark:text-gray-300">Projetos Entregues</div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-3xl font-bold text-purple-600">100%</div>
                  <div className="text-gray-600 dark:text-gray-300">Satisfação</div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-3xl font-bold text-pink-600">5+</div>
                  <div className="text-gray-600 dark:text-gray-300">Anos Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4">Nossos Serviços</h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Oferecemos soluções completas em desenvolvimento de software para empresas de todos os tamanhos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4">Nosso Portfólio</h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                Projetos que transformaram negócios
              </p>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      activeFilter === filter
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPortfolio.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Project Image/Icon */}
                  <div className={`h-48 ${getProjectBg(project.type)} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-center">
                      {getProjectIcon(project.type)}
                      <div className="mt-2 text-white font-semibold text-sm tracking-wider">
                        {project.type}
                      </div>
                    </div>
                    
                    {/* Overlay with actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                        <Github className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
                <span>Ver Todos os Projetos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Veja os depoimentos de empresas que confiaram em nossos serviços
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h5 className="font-semibold">{testimonial.name}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-6">Sobre a SoftDev</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Somos uma empresa especializada em desenvolvimento de software com mais de 5 anos de experiência no mercado. 
                  Nossa missão é transformar ideias em soluções digitais inovadoras que geram resultados reais para nossos clientes.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Utilizamos as mais modernas tecnologias e metodologias ágeis para entregar projetos de alta qualidade, 
                  sempre focando na experiência do usuário e na performance das aplicações.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-2xl font-bold text-blue-600 mb-2">150+</h4>
                    <p className="text-gray-600 dark:text-gray-300">Projetos Concluídos</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-purple-600 mb-2">50+</h4>
                    <p className="text-gray-600 dark:text-gray-300">Clientes Satisfeitos</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
                  <h4 className="text-2xl font-bold mb-4">Nossa Tecnologia</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <Code className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                      <p className="font-semibold">React/Vue</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <Smartphone className="w-8 h-8 mx-auto mb-2 text-green-600" />
                      <p className="font-semibold">React Native</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <Globe className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      <p className="font-semibold">Node.js</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <Users className="w-8 h-8 mx-auto mb-2 text-red-600" />
                      <p className="font-semibold">Python</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto text-center text-white">
            <h3 className="text-4xl font-bold mb-6">Pronto para Começar?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar a transformar sua ideia em realidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5512991015266?text=Olá!%20Gostaria%20de%20realizar%20um%20orçamento.">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Solicitar Orçamento
              </button>
              </a>

              <a href="https://wa.me/5512991015266?text=Olá!%20Quero%20começar%20um%20projeto.">
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300">
                Falar no WhatsApp
              </button>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-xl font-bold">SoftDev</h4>
                </div>
                <p className="text-gray-400">
                  Transformando ideias em soluções digitais inovadoras desde 2019.
                </p>
              </div>
              
                <div>
                <h5 className="font-semibold mb-4">Serviços</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#services" className="hover:text-white transition-colors">Desenvolvimento Web</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Apps Mobile</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Sistemas Corporativos</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Consultoria</a></li>
                </ul>
                </div>
              
              <div>
                <h5 className="font-semibold mb-4">Empresa</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                  <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-4">Contato</h5>
                <ul className="space-y-2 text-gray-400">
                  <li>codsdigital@gmail.com</li>
                  <li>(12) 99101-5266</li>
                  <li>São Paulo, SP</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 SoftDev. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Index;
