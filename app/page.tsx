import Hero3D from './src/components/Hero/Hero3D';
import ServicesCard from './src/components/ServicesCard/ServicesCard';
import SkillsCarrousel from './src/components/SkillsCard/SkillsCarrousel';
import ProposalCard from './src/components/ProposalCard/ProposalCard';
import ValuesCard from './src/components/ValuesCard/ValuesCard';
import ArchitectureDiagram from './src/components/ArchitectureDiagram/ArchitectureDiagram';
import Footer from './src/components/Footer/Footer';

const servicesCardsOne = [
  {
    title: 'Desarrollo Web',
    image: '/images/services/web.webp',
    description: 'Creamos sitios modernos, optimizados y escalables.',
  },
  {
    title: 'Aplicaciones Móviles',
    image: '/images/services/mobile.png',
    description: 'Diseñamos apps intuitivas para Android y iOS.',
  },
  {
    title: 'Consultoría TI',
    image: '/images/services/consulting.jpeg',
    description: 'Te ayudamos a definir estrategias tecnológicas efectivas.',
  },
];

const servicesCardsTwo = [
  {
    title: 'Automatización de sistemas',
    image: '/images/services/automatizacion.jpg',
    description: 'Mejoramos la eficiencia operativa de tu negocio.',
  },
  {
    title: 'Inteligencia Artificial',
    image: '/images/services/ia.jpg',
    description: 'Potenciamos tus soluciones con IA.',
  },
  {
    title: 'Integraciones a la Nube',
    image: '/images/services/cloud.jpg',
    description: 'Llevamos tu infraestructura al siguiente nivel.',
  },
];

const skillsCardsFront = [
  {
    title: 'React/React-native',
    image: '/images/skills/front/react.png',
  },
  {
    title: 'Vue',
    image: '/images/skills/front/vuejs.png',
  },
  {
    title: 'Angular',
    image: '/images/skills/front/Angularjs.png',
  },
  {
    title: 'Ionic',
    image: '/images/skills/front/ionic.png',
  },
  {
    title: 'Flutter',
    image: '/images/skills/front/flutter.svg',
  },
  {
    title: '.NET',
    image: '/images/skills/front/net.png',
  },
  {
    title: 'Php',
    image: '/images/skills/front/php.png',
  },
];

const skillsCardsBack = [
  {
    title: 'Java',
    image: '/images/skills/back/java.png',
  },
  {
    title: 'Spring Boot',
    image: '/images/skills/back/spring boot.png',
  },
  {
    title: 'NodeJS',
    image: '/images/skills/back/nodejs.webp',
  },
  {
    title: 'NestJS',
    image: '/images/skills/back/nestjs.svg',
  },
  {
    title: '.Net Core',
    image: '/images/skills/back/netCore.png',
  },
];

const skillsCardsDB = [
  {
    title: 'Oracle',
    image: '/images/skills/db/oracle.png',
  },
  {
    title: 'Posgresql',
    image: '/images/skills/db/posgresql.png',
  },
  {
    title: 'Sql Server',
    image: '/images/skills/db/sqlServer.webp',
  },
  {
    title: 'MySql',
    image: '/images/skills/db/mysql.avif',
  },
  {
    title: 'MongoDB',
    image: '/images/skills/db/mongodb.png',
  },
  {
    title: 'DynamoDB',
    image: '/images/skills/db/DynamoDB.png',
  },
  {
    title: 'Firestore',
    image: '/images/skills/db/firestore.svg',
  },
];

const skillsCardsCloud = [
  {
    title: 'Aws',
    image: '/images/skills/cloud/aws.webp',
  },
  {
    title: 'Azure',
    image: '/images/skills/cloud/azure.png',
  },
  {
    title: 'Google Cloud',
    image: '/images/skills/cloud/gcp.webp',
  },
];

const skillsCardsRepository = [
  {
    title: 'Bitbucket',
    image: '/images/skills/repositories/bitbucket.jpg',
  },
  {
    title: 'GitHub',
    image: '/images/skills/repositories/github.jpg',
  },
  {
    title: 'GitLab',
    image: '/images/skills/repositories/gitlab.png',
  },
];

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
