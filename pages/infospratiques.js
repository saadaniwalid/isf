import Layout from "@/components/layout";
import PHeader from "@/components/PHeader";
import Scale from "@/components/Scale";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { infop } from "@/data";
import holidays from "@/images/Holidays.jpg";
import info1 from "@/images/info1.gif";
import info2 from "@/images/info2.gif";
import info3 from "@/images/info3.gif";



import Infolist from "@/components/Infolist";
import SwiperCore, {
    Pagination
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Pagination]);
  
export default function infospratiques() {
  return (
    <div>
      <Layout PageTitle="infospratiques" >
        <PHeader ptitle="infospratiques" />
        <Container className="my-5">
          <Row>
            <div className="p-5">
              <h2 className="sec_title text-center">{infop.title1}</h2>
            </div>

            <Col lg={6} md={6} sm={12} className=" mb-5">
              <ul className="list-group list-group">
              {infop.list.map((list , Index) => (
                 <Infolist title={list.title} desc={list.desc} key={Index} /> 
              ))}
              </ul>
            </Col>
            <Col className="" lg={6} md={6} sm={12}>
             
                <Image src={holidays.src} className="img-fluid" />
              
              <Swiper spaceBetween={30} pagination={{
  "clickable": true
}} className="mySwiper mt-5">
  <SwiperSlide><img className="infoimg" src={info1.src} /></SwiperSlide>
  <SwiperSlide><img className="infoimg" src={info2.src} /></SwiperSlide>
  <SwiperSlide><img className="infoimg" src={info3.src} /></SwiperSlide>

  </Swiper>
   
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}
