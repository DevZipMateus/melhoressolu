
import EgestorERP from './EgestorERP';
import AnimatedSection from './AnimatedSection';

const PlansSection = () => {
  return (
    <section id="planos" className="bg-white py-16">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">ERPeGestor</h2>
          <p className="section-subtitle">
            A solução completa para gestão do seu negócio
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <EgestorERP />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PlansSection;
