import "../../App.css";
import { Row } from "react-bootstrap";
import MockupLeft from "../mockup/mockupLeft";
import MockupRight from "../mockup/mockupRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Slide from "../slide/slide";
import React from "react";
import Header from "../header/header";
import { FIRST_BENEFITS } from "../information/BenefitsList";
import Results from "./results/results";
import Footer from "./footer/footer";
import Pleasures from './pleasures/pleasures';
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
              {FIRST_BENEFITS.map((listInfo) => (
                <li key={listInfo.id}>
                  <FontAwesomeIcon className="check" icon={faCircleCheck} />
                  {listInfo.value}
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
        <Pleasures/>
        <hr className="line"></hr>
        <MockupLeft parentToChild={firstMockup} />
        <MockupRight parentToChild={secondMockup} />
        <hr className="line"></hr>
        <Slide />
        <hr className="line"></hr>
        <Results />
        <Footer />
      </div>
    );
  }
}
