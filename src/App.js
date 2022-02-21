import "./App.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import Mockup from "./mockup/mockups";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Progress } from "./progress";
import Slide from "./slide";
import React from "react";
import {EmailModal} from "./components/EmailModal";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: true,
      email: ''
    };
  }

  setModalShow() {
    this.setState({ modalShow: !this.state.modalShow });
  }

  handleCallback = (childData, modalShow) =>{
    this.setState({email: childData, modalShow: modalShow});
}
  render() {
    const firstMockup = {
      title: "¿Cuáles técnicas vas aplicar?",
      img: "/assets/mockup/drenajeLinfatico.png",
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
    return (
      <div className="App">
        <>
          <EmailModal
            show={this.state.modalShow}
            onHide={() => this.setModalShow(false)}
            parentcallback = {this.handleCallback}
          />
        </>
        <header>
          <h2 className="urgent">
            Solo por hoy el <strong>80%</strong> de descuento!!
          </h2>
          <div className="brow">
            Esta tiene que ser la forma más sencilla de
          </div>
          <h2 className="title">
            Como puedes aumentar tus <strong>clientes e ingresos</strong>
            <div> mediante 6 nuevas técnicas de masajes</div> en tan solo 15
            días con una
            <strong>inversión mínima</strong>
          </h2>
        </header>
        <div>
          <div className="portada">
            <img
              className="mockup-copy-main"
              src="/assets/drenaje-linfatico-portada.png"
            ></img>
          </div>
          <div>
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
          <ul>
            <li>
              <FontAwesomeIcon className="check" icon={faCircleCheck} />{" "}
              <span align="justify">
                Imaginate en <strong>15 días</strong> recibiendo el certificado
                como
                <strong> experto</strong> en técnicas brasileñas y como en pocos
                días <strong>incrementan exponencialmente </strong> tus
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
                <strong> inversión mínima</strong> podrás recuperar tu dinero en
                tan solo una sesión.
              </span>
            </li>
            <li>
              <FontAwesomeIcon className="check" icon={faCircleCheck} />
              <span align="justify">
                Tendrás 7 días de <strong>garantía</strong> luego de haber
                comprado el curso, si no llena tus espectativas te devolveremos
                el 100% de tu inversión.
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

        <div className="container-btn">
          <div className="button">
            <a href="#" className="btn btn-join">
              QUIERO UNIRME
            </a>
          </div>
        </div>

        <Row className="container-btn">Últimos 15 lugares disponibles!</Row>
        <Row className="container-btn">
          <Progress done="80" />
        </Row>
        <h1 className="title">¿ Qué vas Aprender?</h1>
        <Container>
          <ul className="learn-list">
            <li>
              <img className="icon-list" src="/assets/skincare.png"></img>
              Lifting facial
            </li>
            <li>
              <img className="icon-list" src="/assets/hips.png"></img>Práctica
              moldeadora
            </li>
            <li>
              <img className="icon-list" src="/assets/massage.png"></img>
              Práctica linfática
            </li>
            <li>
              <img className="icon-list" src="/assets/massage-2.png"></img>
              Postoperatorio
            </li>
            <li>
              <img className="icon-list" src="/assets/ribsClose.png"></img>
              Cierre de costillas
            </li>
            <li>
              <img className="icon-list" src="/assets/waist.png"></img>Drenajes
            </li>
            <li>
              <img className="icon-list" src="/assets/cream.png"></img>
              Aplicaciones
            </li>
            <li>
              <img className="icon-list" src="/assets/products.png"></img>
              Insumos y productos
            </li>
            <li>
              <img className="icon-list" src="/assets/no-stopping.png"></img>
              Contraindicaciones
            </li>
            <li>
              <img className="icon-list" src="/assets/waist.png"></img>Auto
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
                <FontAwesomeIcon className="check" icon={faCircleCheck} />{" "}
                Cursos 100% virtuales
              </li>
            </ul>
          </div>
        </Container>
        <hr className="line"></hr>
        <div className="copy-one">
          <Mockup parentToChild={firstMockup} />
        </div>
        <div className="copy-one">
          <h2 className="title">Además llevate estos Bonus!!</h2>
          <div className="bonus">
            <ul>
              <li>
                <FontAwesomeIcon className="check" icon={faCircleCheck} /> Ficha
                para historia clínica
              </li>
              <li>
                <FontAwesomeIcon className="check" icon={faCircleCheck} />{" "}
                Manuales para elaborar tus insumos
              </li>
              <li>
                <FontAwesomeIcon className="check" icon={faCircleCheck} /> Guías
                de lectura complementaria
              </li>
              <li>
                <FontAwesomeIcon className="check" icon={faCircleCheck} />{" "}
                Descuentos en productos brasileños
              </li>
            </ul>
          </div>
        </div>
        <hr className="line"></hr>
        <h1 className="title">Testimonios de alumnos</h1>
        <Slide />
        <div className="container-btn ">
          <div className="button">
            <a href="#" className="btn btn-join">
              QUIERO UNIRME
            </a>
          </div>
        </div>
        <hr className="line"></hr>
        <h1 className="title">Resultados en pacientes</h1>
        <Row>
          <Col>
            <img src="/assets/Resultados/result1.png" className="result"></img>
          </Col>
          <Col>
            <img src="/assets/Resultados/result2.png" className="result"></img>
          </Col>
          <Col>
            <img src="/assets/Resultados/result3.png" className="result"></img>
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
      </div>
    );
  }
}
