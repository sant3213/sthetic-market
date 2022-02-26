import "../../App.css";
import { Row, Col, Container } from "react-bootstrap";
import Mockup from "../mockup/mockups";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Progress } from "../progressBar/progress";
import Slide from "../slide/slide";
import React from "react";

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
        {/* <>
          <EmailModal
            show={this.state.modalShow}
            onHide={() => this.setModalShow(false)}
            parentcallback={this.handleCallback}
          />
        </> */}
        <header>
          <h2 className="center">
            Solo por hoy, <strong>80%</strong> de descuento!!
          </h2>
          <Row className="container-btn">
            <Progress done="80" />
          </Row>
          <div className="brow">Esta tiene que ser la forma más sencilla</div>
          <h2 className="title">
            Aumenta tus <strong>clientes</strong> e <strong>ingresos</strong> en
            tan sólo <strong>15 días</strong>
            <div>con 6 técnicas nuevas de masajes. </div>
            <div>
              <strong>!Inversión mínima!</strong>
            </div>
          </h2>
        </header>
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
              <li>
                <FontAwesomeIcon className="check" icon={faCircleCheck} />{" "}
                <span align="justify">
                  Imaginate en <strong>15 días</strong> recibiendo el
                  certificado como
                  <strong> experto</strong> en técnicas brasileñas y como en
                  pocos días <strong>incrementan exponencialmente </strong> tus
                  clientes, tanto que ya tu agenda no da abasto.
                </span>
              </li>
              <li>
                <FontAwesomeIcon className="check" icon={faCircleCheck} />{" "}
                <span align="justify">
                  Debido a la
                  <strong> alta demanda</strong> de estas técnicas en el mercado
                  de la estética, podrás mejorar tu{" "}
                  <strong>calidad de vida</strong> como resultado del{" "}
                  <strong>incremento</strong> de tus finanzas.
                </span>
              </li>
              <li>
                <FontAwesomeIcon className="check" icon={faCircleCheck} />{" "}
                <span align="justify">
                  Con una
                  <strong> inversión mínima</strong> podrás recuperar tu dinero
                  en tan solo una sesión.
                </span>
              </li>
              <li>
                <FontAwesomeIcon className="check" icon={faCircleCheck} />
                <span align="justify">
                  Tendrás 7 días de <strong>garantía</strong> luego de haber
                  comprado el curso, si no llena tus espectativas te
                  devolveremos el 100% de tu inversión.
                </span>
              </li>
              <li>
                <FontAwesomeIcon className="check" icon={faCircleCheck} />{" "}
                <span align="justify">
                  Queremos que te sientas <strong>acompañado</strong> en este
                  proceso, por lo que tendrás apoyo en todo momento mediante un{" "}
                  <strong>grupo privado</strong> en Telegram donde se anunciarán
                  nuevos módulos, sesiones en vivo y promociones
                </span>
              </li>
            </ul>
          </div>
        </div>

       

        <Row className="container-btn"></Row>
        <a  href="https://go.hotmart.com/S66618608K?ap=cbdc">
        <Row className="container-btn">
        <div className="blob"><h4 className="center">Últimos 15 lugares disponibles!</h4></div>
        </Row>
        </a>
        <h1 className="title">¿ Qué vas Aprender?</h1>
        <Container>
          <ul className="learn-list">
            <li>
              <img className="icon-list" alt="drenaje linfático" src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/skincare.jpg"></img>
              Lifting facial
            </li>
            <li>
              <img className="icon-list" alt="drenaje linfático" src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/hips.jpg"></img>Práctica
              moldeadora
            </li>
            <li>
              <img className="icon-list" alt="drenaje linfático" src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/massage.jpg"></img>
              Práctica linfática
            </li>
            <li>
              <img className="icon-list" alt="drenaje linfático" src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/massage_2.jpg"></img>
              Postoperatorio
            </li>
            <li>
              <img className="icon-list" alt="drenaje linfático" src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/ribsclose.jpg"></img>
              Cierre de costillas
            </li>
            <li>
              <img className="icon-list" alt="drenaje linfático" src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/waist.jpg"></img>Drenajes
            </li>
            <li>
              <img className="icon-list" alt="drenaje linfático" src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/cream.jpg"></img>
              Aplicaciones
            </li>
            <li>
              <img className="icon-list" alt="drenaje linfático" src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/products.jpg"></img>
              Insumos y productos
            </li>
            <li>
              <img className="icon-list" alt="drenaje linfático" src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/no_stopping.jpg"></img>
              Contraindicaciones
            </li>
            <li>
              <img className="icon-list" alt="drenaje linfático" src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/waist.jpg"></img>Auto
              drenaje Brasileño
            </li>
          </ul>
          <div className="first-list-container">
            <ul className="first-list">
              <li>
                <FontAwesomeIcon className="check" icon={faCircleCheck} /> Son
                técnicas muy<strong> fáciles y rápidas</strong> de aprender y
                practicar
              </li>

              <li>
                <FontAwesomeIcon className="check" icon={faCircleCheck} />{" "}
                {"Aprenderás "} <strong>{"paso a paso "}</strong>
                las 6 técnicas de drenaje linfático brasileño.
              </li>
              <li>
                <FontAwesomeIcon className="check" icon={faCircleCheck} /> Ve a
                tu propio ritmo
              </li>
              <li></li>
              <li>
                <FontAwesomeIcon className="check" icon={faCircleCheck} /> Curso
                100% virtual
              </li>
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
        <h1 className="title">Resultados en pacientes</h1>
        <Row>
          <Col>
            <img src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/Resultados/result1.jpg" className="result"></img>
          </Col>
          <Col>
            <img src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/Resultados/result2.jpg" className="result"></img>
          </Col>
          <Col>
            <img src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/Resultados/result3.jpg" className="result"></img>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/Resultados/result4.jpg" className="result"></img>
          </Col>
          <Col>
            <img src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/Resultados/result5.jpg" className="result"></img>
          </Col>
          <Col>
            <img src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/Resultados/result6.jpg" className="result"></img>
          </Col>
        </Row>
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
        <a  href="https://go.hotmart.com/S66618608K?ap=cbdc">
        <Row className="container-btn">
        <div className="blob-button"><h4 className="center" >Quiero aprender!</h4></div>
        </Row>
        </a>
      </div>
    );
  }
}
