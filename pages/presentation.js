import About from "@/components/aboutSection";
import Layout from "@/components/layout";
import PHeader from "@/components/PHeader";
import Parallax from "@/components/Parallax";

import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { aboutcontent } from "@/data";
import aboutpic2 from "@/images/aboutpic2.jpg";
import Scale from "@/components/Scale";

export default function présentation() {
  return (
    <div>
      <Layout PageTitle="présentation">
        <PHeader ptitle="présentation" />
        <About isabout={false} />
        <Container className="mt-5">
          <Row>
          <div className="p-5">
            <h4 className="sub_title text-center">APPRENDRE A NOUS CONNAITRE</h4>
            <h2 className="sec_title text-center">INTERNATIONAL SPEED FREIGHT?</h2>

          </div>
          
            <Col className="" lg={6} md={6} sm={12}>
              <Scale>
                <Image src={aboutpic2.src} className="img-fluid" />
              </Scale>
            </Col>
            <Col lg={6} md={6} sm={12} className="">
              
                <p className="sec_desc p_desc">{aboutcontent.text1} </p>
                <p className="sec_desc p_desc">{aboutcontent.text2} </p>
              
            </Col>
          </Row>
        </Container>
        <Container className="commonContainer  testimonial text-center" fluid>
  <Row className=" justify-content-md-center align-items-center m-0 h-100">
    <Col className="col-md-9">
    <h2 className="sec_title red_color">Notre mission</h2>
            <p className="testimonial_content">International Speed Freight se veut une entreprise citoyenne par excellence et grâce à ses valeurs, à savoir, la longue expérience aussi bien au niveau national qu international, son réseau de partenaires stratégiques sur les 5 continents et son équipe de spécialistes lui confère un place privilégiée sur l échiquier Marocain et mondial du transport international.</p>
    </Col>
  </Row>
</Container>
      </Layout>
    </div>
  );
}
