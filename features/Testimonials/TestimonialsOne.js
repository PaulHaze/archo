/* eslint-disable no-return-assign */
import React, { useRef } from 'react';
import Slider from 'react-slick';

import { TestimonialCard } from './TestimonialCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonials1Data from '@/data/testimonials1.json';

export function TestimonialsOne() {
  const customSlider = useRef();
  const renderArrows = () => (
    <div className="navs mt-[30px]">
      <button
        type="button"
        className="prev"
        onClick={() => customSlider.current.slickPrev()}
      >
        <i className="fas fa-long-arrow-alt-left" />
      </button>
      <button
        type="button"
        className="next"
        onClick={() => customSlider.current.slickNext()}
      >
        <i className="fas fa-long-arrow-alt-right" />
      </button>
    </div>
  );
  return (
    <section className="testimonials grid py-20 bg-white">
      <div className="container">
        {/* HEADING */}
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10 mb-16">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">
                Testimonials
              </h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                Satisfied Clients
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Slider
              className="testim"
              {...{
                ref: slider => (customSlider.current = slider),
                dots: false,
                arrows: true,
                autoplay: false,
                rows: 1,
                slidesToScroll: 1,
                slidesToShow: 2,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2,
                    },
                  },
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                  {
                    breakpoint: 380,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                ],
              }}
            >
              {testimonials1Data.map(item => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </Slider>
            {renderArrows()}
          </div>
        </div>
      </div>
    </section>
  );
}
