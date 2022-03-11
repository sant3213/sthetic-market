import "../../App.css";
import { Row } from "react-bootstrap";
import MockupLeft from "../mockup/mockupLeft";
import MockupRight from "../mockup/mockupRight";

import Slide from "../slide/slide";
import React from "react";
import Header from "../header/header";
import { secondMockup,firstMockup } from "../../utils/constants";
import Results from "./results/results";
import Footer from "./footer/footer";
import Pleasures from './pleasures/pleasures';
import COPYS from "./copys/copys";

export class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <COPYS/>
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
