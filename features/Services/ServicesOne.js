import { ServiceCard } from './ServiceCard';
import servicesData from '@/data/services_1.json';

export function ServicesOne() {
  const renderServices = servicesData.services.map(({ id, title, content }) => (
    <ServiceCard key={id} id={id} title={title} content={content} />
  ));
  return (
    <section className="container services bg-primary-light p-0 mb-28 w-full">
      <div className="section-head text-center py-20">
        <h6 className="wow fadeInDown" data-wow-delay=".3s">
          Best Features
        </h6>
        <h4 className="playfont wow flipInX" data-wow-delay=".5s">
          Our Services
        </h4>
      </div>

      <div
        className="flex flex-wrap bord-box bg-img wow fadeInUp max-w-lg mx-auto"
        data-wow-delay=".3s"
        style={{ backgroundImage: `url(${servicesData.image}` }}
      >
        {renderServices}
      </div>
    </section>
  );
}
