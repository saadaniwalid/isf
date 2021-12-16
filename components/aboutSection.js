import React from "react";
import { Aboutdata } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Parallax from "./Parallax";
import Link from "next/link";
 
const About = ({isabout}) => {
  const { scrollY } = useViewportScroll();

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 3,
    triggerOnce: true
  });

  const { sectionContent, button, gallery } = Aboutdata;
  return (
    <motion.section initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}  layoutId="title" className="commonSection ab_agency">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className="PR_79">
            <h4  className="sub_title">{sectionContent.subTitle}</h4>
            <h2 className="sec_title MB_45">{sectionContent.title}</h2>
            <p className="sec_desc p_desc">{sectionContent.text}</p>
            {isabout && <Link href="/presentation" ><a className="common_btn ">
                  <span>{button.label}</span>
                  </a></Link>}
          </Col>
          <Col lg={6} md={6} sm={12} className="position-relative">
          <Parallax >
            {gallery.map((item, index) => (
              <div className={`ab_img${index + 2}`}  key={index}>
                <img src={item.src} alt="" />
              </div>
            ))}
            </Parallax>
          </Col>
          
        </Row>
      </Container>
    </motion.section>
  );
};

export default About;
