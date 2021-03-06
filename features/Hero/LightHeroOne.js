import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Parallax } from 'swiper';

// import { Split } from '@Components';
import { SplitFn } from '@/components/Split/SplitFn';

// eslint-disable-next-line import/extensions
import { removeSlashFromPagination } from '@/scripts';
import introData from '@/data/hero.json';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Navigation, Pagination, Parallax]);

export function LightHeroOne() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    });
    setTimeout(() => {
      removeSlashFromPagination();
    }, 1000);
  }, []);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <header className="slider">
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={1000}
            parallax
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              type: 'fraction',
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={swiper => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={swiper => {
              setTimeout(() => {
                for (let i = 0; i < swiper.slides.length; i += 1) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    'data-swiper-parallax',
                    0.75 * swiper.width,
                  );
                }

                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {introData.map(slide => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div
                  className="bg-img valign"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-overlay-dark="6"
                >
                  <div className="relative z-10">
                    <div className="flex px-2">
                      <div className="caption l-divider mt-100">
                        <h5 className="thin">{slide.title.first}</h5>
                        <SplitFn>
                          <h1 data-splitting className="words chars splitting">
                            <Link href="#">{slide.title.second}</Link>
                          </h1>
                        </SplitFn>
                        {slide?.content && (
                          <p className="mt-10">
                            {slide.content.first} <br />
                            {slide.content.second}
                          </p>
                        )}
                        <Link href="#">
                          <a className="btn-curve btn-bord btn-lit mt-30">
                            <span>Read More</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
        <div className="setone">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl"
          >
            <i className="fas fa-chevron-right" />
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl"
          >
            <i className="fas fa-chevron-left" />
          </div>
        </div>
        <div ref={paginationRef} className="swiper-pagination top playfont" />
      </div>
    </header>
  );
}
