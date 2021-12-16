import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import profile from '@/images/profile.png'
import "swiper/css";
import SwiperCore, { Mousewheel, Pagination } from "swiper";

SwiperCore.use([Mousewheel, Pagination]);

export default function Testimonials() {
  return (
    <section className="testimonials-section">
    <h4 className="sub_title white">témoignage</h4>
      <h2 className="sec_title white pb-5">la parole a nos client</h2>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={{
          invert: false,
        }}
        pagination={{
          el: ".testimonials-slider__pagination",
          clickable: true,
        }}
        className="testimonials-slider"
      >
        <SwiperSlide className="testimonials-slider__item swiper-slide">
          {/*<div className="testimonials-slider__img">
            <img
              src={profile.src}
              alt=""
            />
          </div>*/}
          <div className="testimonials-slider__content">
            <span className="testimonials-slider__code">PDG-  IFS</span>
            <div className="testimonials-slider__title">Hamdi ahmed</div>
            <div className="testimonials-slider__text">
            Parmi les leaders dans le marché du transport international ISF ira toujours plus loin pour vous satisfaire.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonials-slider__item swiper-slide">
          {/*<div className="testimonials-slider__img">
            <img
              src={profile.src}
              alt=""
            />
          </div>*/}
          <div className="testimonials-slider__content">
            <span className="testimonials-slider__code">PDG-  IFS</span>
            <div className="testimonials-slider__title">Amina bouchaara</div>
            <div className="testimonials-slider__text">
            Parmi les leaders dans le marché du transport international ISF ira toujours plus loin pour vous satisfaire.
            </div>
          </div>
        </SwiperSlide>
        <div className="testimonials-slider__pagination"></div>
      </Swiper>
    </section>
  );
}
