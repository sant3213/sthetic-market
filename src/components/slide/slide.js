import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
export default function Slide() {
      return (
        <Container>
        <ul className="testimonios">
          <li ><img src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/testimonios/1.png" className='carousel-imgs'></img></li>
          <li ><img src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/testimonios/2.png" className='carousel-imgs-3'></img></li>
          <li ><img src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/testimonios/3.PNG" className='carousel-imgs'></img></li>
        </ul>
      </Container>
              
      )
}