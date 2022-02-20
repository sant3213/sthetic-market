import "./App.css";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import Mockup from "./mockup/mockups";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {Progress} from './progress';
function App() {
  const firstMockup = {
    title: "Drenaje Linfático Brasileño",
    img: "/assets/mockup/drenajeLinfatico.png",
    copys: ["hola", "como", "estas"],
  };

  const secondMockup = {
    title: "Masaje moldeador Brasileño",
    img: "/assets/mockup/masajeMoldeador.png",
    copys: ["hola", "como", "estas"],
  };
  // const progress = document.getElementsByClassName('.progress-done');


  return (
    <div className="App">
      <header>
        <h2 className="urgent">
          Solo por hoy el <strong>80%</strong> de descuento!!
        </h2>
        <div className="brow">Esta tiene que ser la forma más sencilla de</div>
        <h2 className="title">
          Como puedes aumentar tus <strong>clientes e ingresos</strong>
           <div> mediante 6 nuevas técnicas de masajes</div> en tan solo 15 días con una
          <strong>inversión mínima</strong>
        </h2>
        {/* <h2 className="title-b">
          {" mediante técnicas de Drenaje linfático brasileño en tan solo 15 días con una inversión mínima "}
        </h2> */}
      </header>
      <div>
        <div className="portada">
          <img
            className="mockup-copy-main"
            src="/assets/drenaje-linfatico-portada.png"
          ></img>
        </div>
        <div className="first-list-container">
          <ul className="first-list">
            <li>
              <FontAwesomeIcon className="check" icon={faCircleCheck} /> Son
              técnicas muy<strong> fáciles y rápidas</strong> de aprender y
              practicar
            </li>

            <li>
              <FontAwesomeIcon className="check" icon={faCircleCheck} /> {"Aprenderás "}  <strong>{"paso a paso "}</strong>
             las 6 técnicas de drenaje linfático
              brasileño.
            </li>
            <li>
              <FontAwesomeIcon className="check" icon={faCircleCheck} /> Ve a tu
              propio ritmo
            </li>
            <li></li>
            <li>
              <FontAwesomeIcon className="check" icon={faCircleCheck} /> Cursos
              100% virtuales
            </li>
          </ul>
        </div>
      </div>
      Últimos 15 lugares disponibles!
      <Progress done="70"/>
      <div className="container-btn">
        <div className="button">
          <a href="#" className="btn btn-join">QUIERO UNIRME</a>
        </div>
      </div>
      <div>
        <h1 className="title">¿ Por qué debería tomar el curso?</h1>
        <div className="why-course">
          Es un tratamiento de resultados <strong> rápidos y evidentes</strong>{" "}
          desde la primera sesión. Actualmente es una de las técnicas más{" "}
          <strong>apetecidas</strong> en el mundo de la estética.
        </div>
      </div>
      <ul>
        <li>
          <FontAwesomeIcon className="check" icon={faCircleCheck} /> Debido a la
          alta demanda de estas técnicas en el mercado de la estética, podrás
          mejorar tu calidad de vida como resultado del incremento de tus
          finanzas.
        </li>
        <li>
          <FontAwesomeIcon className="check" icon={faCircleCheck} /> Con una
          inversión mínima podrás recuperar tu dinero en tan solo una sesión.
        </li>
        <li>
          <FontAwesomeIcon className="check" icon={faCircleCheck} />
          Tendrás 7 días de garantía luego de haber comprado el curso, si no
          llena tus espectativas te devolveremos el 100% de tu inversión.
        </li>
        <li>
          <FontAwesomeIcon className="check" icon={faCircleCheck} /> Queremos
          que te sientas acompañado en este proceso, por lo que tendrás apoyo en
          todo momento mediante un grupo privado en Telegram donde se anunciarán
          nuevos módulos, sesiones en vivo y promociones
        </li>
      </ul>

      <h1 className="title">¿ Qué vas Aprender?</h1>
      <div >
      <img className="main-mockup" src="/assets/mockup/main-mockup.png"></img>
      </div>
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
      </Container>
      <hr className="line"></hr>
      <div className="copy-one">
        <Mockup parentToChild={firstMockup} />
      </div>
      <div className="copy-one">
        <Mockup parentToChild={secondMockup} />
      </div>
      <hr className="line"></hr>
      <h1 className="title">Testimonios de alumnas</h1>
      <Carousel>
        <Carousel.Item interval={4000}>
          <img
            className="carousel-imgs"
            src="/assets/testimonios/IMG_6849.PNG"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="carousel-imgs-6854"
            src="/assets/testimonios/IMG_6854.PNG"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="carousel-imgs"
            src="/assets/testimonios/IMG_6871.PNG"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="carousel-imgs"
            src="/assets/testimonios/IMG_6882.PNG"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="carousel-imgs"
            src="/assets/testimonios/IMG_6881.PNG"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
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
      <div className="prices">
        <div className="first-currentPrice">
          <p className="currentPrice">$55 USD </p>
        </div>
        <p className="discount">
          80% OFF <span className="tachado">300</span>
        </p>
      </div>
    </div>
  );
}

export default App;
