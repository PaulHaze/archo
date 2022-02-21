import { ServiceCard } from './ServiceCard';

export function ServicesOne() {
  return (
    <div className="container bg-primary-light p-0">
      <div className="header py-10 text-center">
        <p>Services Placeholder</p>
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
