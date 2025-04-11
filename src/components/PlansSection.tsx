
import PlanCard from './PlanCard';
import AnimatedSection from './AnimatedSection';

const PlansSection = () => {
  const plans = [{
    title: "Básico",
    price: "Consulte",
    description: "Para pequenas empresas",
    features: ["Desenvolvimento de sistema básico", "Consultoria inicial", "Suporte técnico básico", "Manutenção de notebooks"],
    isPopular: false
  }, {
    title: "E-gestor",
    price: "Consulte",
    description: "Para micro e pequenas empresas",
    features: ["Implantação completa do E-gestor", "Treinamento da equipe", "Parametrização personalizada", "Suporte técnico dedicado", "Integrações básicas"],
    isPopular: true
  }, {
    title: "Empresarial",
    price: "Consulte",
    description: "Para empresas em crescimento",
    features: ["Sistema personalizado completo", "Consultoria avançada", "Suporte técnico prioritário", "Integrações completas", "Treinamento avançado", "Manutenção preventiva"],
    isPopular: false
  }];

  return (
    <section id="planos" className="bg-white py-16">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Planos</h2>
          <p className="section-subtitle">
            Escolha o plano que melhor se adapta às necessidades da sua empresa
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.title} animation="fade-in-up" delay={index * 150}>
              <PlanCard 
                title={plan.title} 
                price={plan.price} 
                description={plan.description} 
                features={plan.features} 
                isPopular={plan.isPopular} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-3">Precisa de um plano personalizado?</h3>
          <p className="text-gray-600 mb-6">
            Oferecemos planos personalizados para empresas com necessidades específicas. 
            Entre em contato conosco para uma proposta sob medida.
          </p>
          <a href="#contato" className="btn-primary inline-block">
            Solicitar Plano Personalizado
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PlansSection;
