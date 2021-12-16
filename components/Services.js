import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@/components/section-title";
import { FeatureTabData } from "@/data";
import Scale from "./Scale";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = ({spage}) => {
  const [active, setActive] = useState(1);
  const { sectionContent, posts } = FeatureTabData;
  return (
    <motion.section  initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}   layoutId="service" className="commonSection  ">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={sectionContent} />
          </Col>
        </Row>
        <div id="tabs">
          <Row>
            <Col lg={12}>
              <ul className="services_title">
                {posts.map(({ title }, index) => (
                  <li
                    key={index}
                    className={`${active === index ? "active" : " "}`}
                  >
                    <a
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        setActive(index);
                      }}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <div className="tab-content">
            {posts.map((post, index) => {
              return index === active ? (
                <div
                  className="tab-pane fade show active animated fadeIn"
                  id={`tes_tab_${index}`}
                  key={index}
                >
                  <Row
                    className={` justify-content-md-center align-items-center ${
                      0 === index % 2 ? " " : "flex-lg-row-reverse"
                    }`}
                  >
                    <Col lg={spage ? 7 : 12}>
                      <div className={`wh_choose ${!spage && 'text-center' }`}>
                        <p>{post.content}</p>
                       { spage && <ul>
                          {post.lists.map(({ item }, index) => (
                            <li key={index}>
                              <i className="fa fa-check-square"></i> {item}
                            </li>
                          ))}
                        </ul>}
                        {!spage && <Link href="/services" ><a className="common_btn spbutton">
                  <span>savoir plus</span>
                  </a></Link> }
                      </div>
                    </Col>
                   { spage && <Col lg={5}>
                    <Scale>
                      <div className="chose_img">
                        <img src={post.image} alt={`chose_img-${index}`} />
                      </div></Scale>
                    </Col>}
                    
                  </Row>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Services;
