import { useEffect } from 'react';

import { GalleryItem } from './GalleryItem';

import portfolio1Data from '@/data/portfolio1.json';

import { initIsotope } from '@/scripts';

export function PortfolioOne() {
  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio bg-white py-20">
      <div className="container-fluid">
        {/* HEADING */}
        <div className="container">
          <div className="section-head text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-10 mb-16">
                <h6 className="wow fadeInDown" data-wow-delay=".3s">
                  Best Works
                </h6>
                <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                  Our Portfolio
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* FILTER BOX */}
          <div
            className="filtering text-center w-full mb-3 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div
              className="filter bg-img bg-repeat"
              style={{ backgroundImage: 'url(/assets/img/line-pattern1.png' }}
            >
              <span data-filter="*" className="active">
                All
              </span>
              {portfolio1Data.filtersName.map(filter => (
                <span data-filter={filter.filterClass} key={filter.id}>
                  {filter.name}
                </span>
              ))}
            </div>
          </div>

          {/* GALLERY */}
          <div className="gallery twsty full-width max-w-xl mx-auto">
            {portfolio1Data.portfolio.map(
              ({ id, filterClass, image, title, tag }) => (
                <GalleryItem
                  id={id}
                  filterClass={filterClass}
                  image={image}
                  title={title}
                  tag={tag}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
