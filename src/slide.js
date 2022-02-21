import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
export default function Slide() {
      return (
        <Container>
        <Row>
          <Col xs><img src="/assets/testimonios/1.png" className='carousel-imgs'></img></Col>
          <Col xs={{ order: 12 }}><img src="/assets/testimonios/2.png" className='carousel-imgs-3'></img></Col>
          <Col xs={{ order: 1 }}><img src="/assets/testimonios/3.png" className='carousel-imgs'></img></Col>
        </Row>
      </Container>
              
      )
}