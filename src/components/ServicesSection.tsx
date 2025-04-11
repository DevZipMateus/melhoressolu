
import { Code, LineChart, FileText, Users, Server, Database } from 'lucide-react';
import ServiceCard from './ServiceCard';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento de Sistemas',
      description: 'Criação de sistemas próprios sob medida para atender as necessidades específicas do seu negócio.'
    },
    {
      icon: LineChart,
      title: 'Consultoria em Software',
      description: 'Análise e otimização de processos internos através de soluções tecnológicas adequadas ao seu negócio.'
    },
    {
      icon: FileText,
      title: 'Coordenação de Projetos',
      description: 'Gestão completa de projetos de implementação e transição para novas soluções tecnológicas.'
    },
    {
      icon: Server,
      title: 'Suporte Técnico',
      description: 'Assistência técnica especializada para garantir o funcionamento contínuo e eficiente dos sistemas.'
    },
    {
      icon: Database,
      title: 'Implantação de Sistemas',
      description: 'Implementação, configuração e treinamento para novas plataformas e sistemas em sua empresa.'
    },
    {
      icon: Users,
      title: 'Representação de Plataformas',
      description: 'Representação de plataformas consolidadas com suporte técnico e estratégico para sua empresa.'
    }
  ];

  return (
    <section id="serviços" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Soluções tecnológicas personalizadas para impulsionar o crescimento do seu negócio
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <ServiceCard 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <a href="#contato" className="btn-primary inline-block">
            Solicite um orçamento
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
