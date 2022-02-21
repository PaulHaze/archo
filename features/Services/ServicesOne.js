import servicesData from '@/data/services_1.json';
import { ServiceCard } from './ServiceCard';

export function ServicesOne() {
  return (
    <div className="container bg-primary-light p-0">
      <div className="section-head bb text-center py-20">
        <h6 className="wow fadeInDown" data-wow-delay=".3s">
          Best Features
        </h6>
        <h4 className="playfont wow flipInX" data-wow-delay=".5s">
          Our Services
        </h4>
      </div>
      <div className="cards space-y-2 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}
