import React from 'react';
import { Container } from "react-bootstrap";
export default function Slide() {
      return (
        <Container>
           <h1 className="title">Testimonios de alumnos</h1>
        <ul className="testimonios">
          <li ><img alt="drenaje linfático" src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/testimonios/1.jpg" className='carousel-imgs'></img></li>
          <li ><img alt="drenaje linfático" src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/testimonios/2.jpg" className='carousel-imgs-3'></img></li>
          <li ><img alt="drenaje linfático" src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/testimonios/3.jpg" className='carousel-imgs'></img></li>
        </ul>
      </Container>
              
      )
}