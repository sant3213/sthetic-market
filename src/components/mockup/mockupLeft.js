import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function MockupLeft({ parentToChild }) {
  return (
    <div className="copy-one">
      <Container>
        <h3 className="title"> {parentToChild.title}</h3>
        <Row className="copy-list">
          <Col xs={4}>
            <div>
              <img
                className="mockup-copy-left"
                src={parentToChild.img}
                alt="drenaje linfático brasielño"
              ></img>
            </div>
          </Col>
          <Col xs={8}>
            <ul className="mockup-list">
              {parentToChild.copys.map(function (name, index) {
                  return (<li key={index}>
                    <p align="justify">
                      <FontAwesomeIcon className="check" icon={faCircleCheck} />
                      {name}
                    </p>
                  </li>)
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
