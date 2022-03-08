import "../../App.css";
import { Row, Container } from "react-bootstrap";
import Mockup from "../mockup/mockups";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Slide from "../slide/slide";
import React from "react";
import Header from "../header/header";
import { pleasures } from "../information/BenefitsList";
import Results from "./results/results";

export class Home extends React.Component {
  render() {
    const firstMockup = {
      title: "¿Cuáles técnicas vas aplicar?",
      img: "https://drenaje-linfatico.s3.amazonaws.com/public/assets/mockup/drenajeLinfatico.png",
      copys: [
        "Técnica de moldeado brasileño",
        "Técnica de drenaje brasileño",
        "Técnica postoperatoria",
        "Técnica de autodrenaje",
        "Técnica de Lifting facial",
        "Técnica de cierre de costillas",
        "Técnicas complementarias",
      ],
    };
    const secondMockup = {
      title: "Además llevate estos Bonus!!",
      img: "https://drenaje-linfatico.s3.amazonaws.com/public/assets/mockup/smartmockups_kzxcup2d.jpg",
      copys: [
        "Ficha para historia clínica",
        "Manuales para elaborar tus insumos",
        "Guías de lectura complementaria",
        "Descuentos en productos brasileños",
      ],
    };

    return (
      <div className="App">
        <Header />
        <div>
          <div className="portada">
            <img
              className="mockup-copy-main"
              alt="drenaje linfático"
              src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/drenaje_linfatico_po_W1RwK.jpg"
            ></img>
          </div>
          <div className="list-description">
            <h1 className="title">¿ Por qué debería tomar el curso?</h1>
            <div className="why-course">
              <p align="justify">
                Es un tratamiento de resultados{" "}
                <strong> rápidos y evidentes</strong> desde la primera sesión.
                Actualmente es una de las técnicas más{" "}
                <strong>apetecidas</strong> en el mundo de la estética.
              </p>
            </div>
          </div>
          <div className="list-description">
            <ul>
              {pleasures.first.map((listInfo) => (
                <li key={listInfo}>
                  <FontAwesomeIcon className="check" icon={faCircleCheck} />
                  {listInfo}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Row className="container-btn"></Row>
        <a href="https://go.hotmart.com/S66618608K?ap=cbdc">
          <Row className="container-btn">
            <div className="blob">
              <h4 className="center">Quiero tomar el curso</h4>
            </div>
          </Row>
        </a>
        <h1 className="title">¿ Qué vas Aprender?</h1>
        <Container>
          <ul className="learn-list">
            <li>
              <img
                className="icon-list"
                alt="drenaje linfático"
                src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/skincare.jpg"
              ></img>
              Lifting facial
            </li>
            <li>
              <img
                className="icon-list"
                alt="drenaje linfático"
                src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/hips.jpg"
              ></img>
              Práctica moldeadora
            </li>
            <li>
              <img
                className="icon-list"
                alt="drenaje linfático"
                src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/massage.jpg"
              ></img>
              Práctica linfática
            </li>
            <li>
              <img
                className="icon-list"
                alt="drenaje linfático"
                src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/massage_2.jpg"
              ></img>
              Postoperatorio
            </li>
            <li>
              <img
                className="icon-list"
                alt="drenaje linfático"
                src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/ribsclose.jpg"
              ></img>
              Cierre de costillas
            </li>
            <li>
              <img
                className="icon-list"
                alt="drenaje linfático"
                src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/waist.jpg"
              ></img>
              Drenajes
            </li>
            <li>
              <img
                className="icon-list"
                alt="drenaje linfático"
                src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/cream.jpg"
              ></img>
              Aplicaciones
            </li>
            <li>
              <img
                className="icon-list"
                alt="drenaje linfático"
                src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/products.jpg"
              ></img>
              Insumos y productos
            </li>
            <li>
              <img
                className="icon-list"
                alt="drenaje linfático"
                src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/no_stopping.jpg"
              ></img>
              Contraindicaciones
            </li>
            <li>
              <img
                className="icon-list"
                alt="drenaje linfático"
                src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/waist.jpg"
              ></img>
              Auto drenaje Brasileño
            </li>
          </ul>
          <div className="first-list-container">
            <ul className="first-list">
              {pleasures.second.map((listInfo) => (
                <li key={listInfo}>
                  <FontAwesomeIcon className="check" icon={faCircleCheck} />
                  {listInfo}
                </li>
              ))}
            </ul>
          </div>
        </Container>
        <hr className="line"></hr>
        <div className="copy-one">
          <Mockup parentToChild={firstMockup} />
        </div>
        <div className="copy-one">
          <Mockup parentToChild={secondMockup} />
        </div>
        <hr className="line"></hr>
        <h1 className="title">Testimonios de alumnos</h1>
        <Slide />
        <hr className="line"></hr>
        <Results />
        <div className="container-btn">
          <div className="prices">
            <p className="discount">
              80% OFF <span className="tachado">300</span>
            </p>
            <div className="first-currentPrice">
              <p className="currentPrice">$55 USD </p>
            </div>
          </div>
        </div>
        <a href="https://go.hotmart.com/S66618608K?ap=cbdc">
          <Row className="container-btn">
            <div className="blob-button">
              <h4 className="center">Quiero aprender!</h4>
            </div>
          </Row>
        </a>
      </div>
    );
  }
}
