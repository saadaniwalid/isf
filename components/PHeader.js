import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import PHimage from "@/images/PHimage.jpg";
import { motion } from 'framer-motion';

export default function PHeader({ptitle}) {
    return (
        <Container className="pheader" fluid>
  <Row>
  <Col lg={12} className="text-center">
                  <h3 className="phtitle">{ptitle}</h3> 
                </Col>
  </Row>
</Container>
    )
}
