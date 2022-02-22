import servicesData from '@/data/services_1.json';
import { ServiceCard } from './ServiceCard';

import Link from 'next/link';

export function ServicesOne() {
  const renderServices = servicesData.services.map(({ id, title, content }) => (
    <ServiceCard key={id} id={id} title={title} content={content} />
  ));
  return (
    <>
      <section className="container bg-primary-light p-0">
        <div className="section-head text-center py-20">
          <h6 className="wow fadeInDown" data-wow-delay=".3s">
            Best Features
          </h6>
          <h4 className="playfont wow flipInX" data-wow-delay=".5s">
            Our Services
          </h4>
        </div>
        <div
          className="row bord-box bg-img wow fadeInUp"
          data-wow-delay=".3s"
          style={{ backgroundImage: `url(${servicesData.image}` }}
        >
          {renderServices}
        </div>
      </section>
      <h5 className="py-5">Theirs</h5>
      <section className="services section-padding bg-gray">
        <div className="container">
          {/* HEADER */}
          <div className="section-head text-center py-20">
            <h6 className="wow fadeInDown" data-wow-delay=".3s">
              Best Features
            </h6>
            <h4 className="playfont wow flipInX" data-wow-delay=".5s">
              Our Services
            </h4>
          </div>

          {/* CARDS */}
          <div
            className="row bord-box bg-img wow fadeInUp"
            data-wow-delay=".3s"
            style={{ backgroundImage: `url(${servicesData.image}` }}
          >
            {servicesData.services.map(item => (
              <div className="col-lg-3 col-md-6 item-bx" key={item.id}>
                <h2 className="numb">{item.id}</h2>
                <h6 className="mb-20">{item.title}</h6>
                <p>{item.content}</p>
                <Link href="/about">
                  <a className="more mt-30">Read More</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
