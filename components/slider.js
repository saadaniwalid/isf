import React from "react";
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { SliderOneData } from "@/data";
SwiperCore.use([Autoplay, Navigation, EffectFade]);
const Slider = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: false,
    effect: "fade",
    navigation: {
      nextEl: "#main-slider-next",
      prevEl: "#main-slider-prev",
    },

  };
  console.log(SliderOneData)
  return (
    <section className="main-slider">
      <Swiper {...mainSlideOptions}>
        {SliderOneData.map(({ image, subTitle, title, button }, index) => (
          <SwiperSlide key={index}>
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${image.src})` }}
            ></div>
            <Container>
              <Row>
                <Col lg={12} className="text-center">
                  <p className="main-slider__subtext">{subTitle}</p>
                  <h3 className="main-slider__title">{title}</h3>
                  <Link href={button.url} ><a className="common_btn ">
                  <span>{button.label}</span>
                  </a></Link>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
