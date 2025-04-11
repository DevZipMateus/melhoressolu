
import { Code, Wrench, Package, Laptop, HeartHandshake } from 'lucide-react';
import ServiceCard from './ServiceCard';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento de Sistemas',
      description: 'Criação de sistemas personalizados conforme a necessidade do cliente. Aplicações desktop, web ou híbridas, com integração e manutenção.',
      details: [
        'Criação de sistemas personalizados conforme a necessidade do cliente',
        'Aplicações desktop (Windows), web ou híbridas',
        'Integração com APIs e bancos de dados',
        'Manutenção e evolução de sistemas existentes'
      ]
    },
    {
      icon: Wrench,
      title: 'Consultoria em Software',
      description: 'Diagnóstico de processos, recomendação de ferramentas tecnológicas e apoio na implantação de sistemas de terceiros.',
      details: [
        'Diagnóstico de processos e fluxos internos',
        'Recomendação de ferramentas tecnológicas adequadas',
        'Apoio na escolha e implantação de sistemas de terceiros',
        'Treinamento e orientação para equipes'
      ]
    },
    {
      icon: Package,
      title: 'Implantação de Sistemas de Terceiros',
      description: 'Suporte técnico e funcional em plataformas como eGestor, com parametrização, integração e treinamento de usuários.',
      details: [
        'Suporte técnico e funcional em ferramentas como eGestor',
        'Parametrização, integração e configuração inicial',
        'Treinamento de usuários e acompanhamento pós-implantação'
      ]
    },
    {
      icon: Laptop,
      title: 'Manutenção de Notebooks',
      description: 'Formatação, reinstalação de sistemas, limpeza, upgrades e troca de peças para melhorar o desempenho dos equipamentos.',
      details: [
        'Formatação e reinstalação de sistemas operacionais',
        'Limpeza, upgrades e melhoria de desempenho',
        'Troca de peças (HD, SSD, memória, teclado, bateria, etc.)',
        'Solução de falhas e lentidão em equipamentos'
      ]
    },
    {
      icon: HeartHandshake,
      title: 'Suporte Técnico e Relacionamento',
      description: 'Atendimento personalizado com foco em resolução rápida e suporte remoto contínuo para garantir sua satisfação.',
      details: [
        'Atendimento personalizado com foco em resolução rápida',
        'Suporte remoto contínuo e acompanhamento pós-entrega',
        'Relacionamento próximo com cada cliente, com foco em parceria duradoura'
      ]
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
                details={service.details} 
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
