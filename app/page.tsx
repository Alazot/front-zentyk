import Hero3D from '@/components/Hero/Hero3D';
import ServicesCard from '@/components/ServicesCard/ServicesCard';
import SkillsCarrousel from '@/components/SkillsCard/SkillsCarrousel';
import ValuesCard from '@/components/ValuesCard/ValuesCard';
import ArchitectureDiagram from '@/components/ArchitectureDiagram/ArchitectureDiagram';
import Footer from '@/components/Footer/Footer';
import {
  servicesCardsOne,
  servicesCardsTwo,
  skillsCardsFront,
  skillsCardsBack,
  skillsCardsDB,
  skillsCardsCloud,
  skillsCardsRepository,
} from '@/common/objects/valuesImages';
import ProposalCard from '@/components/ProposalCard/ProposalCard';

const HomePage = () => {
  return (
    <div>
      {/* Hero interactivo */}
      <Hero3D />
      {/* Sección de servicios */}
      <section id="proposalId">
        <div>
          <h2 className="text-4xl font-bold mt-24 mb-0 text-center">
            Nuestra Propuesta
          </h2>
          <ProposalCard />
        </div>
      </section>

      <section id="valuesId">
        <div>
          <h2 className="text-4xl font-bold mt-24 text-center">Valores</h2>
          <ValuesCard />
        </div>
      </section>

      {/* Sección de servicios */}
      <section id="servicesId">
        <div>
          <h2 className="text-4xl font-bold mt-12 mb-12 text-center">
            Nuestros Servicios
          </h2>
          <ServicesCard services={servicesCardsOne} />
          <ServicesCard services={servicesCardsTwo} />
        </div>
      </section>
      {/* Sección de skills */}
      <section id="tecnologiesId">
        <div>
          <h2 className="text-4xl font-bold mt-24 mb-2 text-center text-gray-900">
            Tecnologías
          </h2>
          {/* Aquí insertas el diagrama animado */}
          <ArchitectureDiagram />
          <SkillsCarrousel
            skills={[
              ...skillsCardsFront,
              ...skillsCardsBack,
              ...skillsCardsDB,
              ...skillsCardsCloud,
              ...skillsCardsRepository,
            ]}
            titleSection={''}
          />
        </div>
      </section>
      {/* Sección de contacto */}
      <section id="contactId" className="max-w-7xl mt-36 mx-auto my-20 px-6">
        <h2 className="text-4xl font-bold mt-24 mb-24 text-center text-gray-900">
          Contacto
        </h2>
        <form className="flex flex-col gap-4 mb-48">
          <input
            type="text"
            placeholder="Nombre"
            className="p-3 rounded-lg border"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg border"
          />
          <textarea placeholder="Mensaje" className="p-3 rounded-lg border" />
          <button
            type="submit"
            className="bg-accent text-black py-3 px-6 rounded-lg font-bold"
          >
            Enviar
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
