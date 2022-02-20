import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
export default function Mockup({parentToChild}) {

    return (
      <Container>
        <Row>
          <Col xs={4}>
            <h3 className="title"> {parentToChild.title}</h3>
            <div>
              <img
                className="mockup-copy-left"
                src={parentToChild.img}
                alt="drenaje linfático brasielño"
              ></img>
            </div>
          </Col>
          <Col xs={8}>
            <ul className="copy-one-list">
            {parentToChild.copys.map(function(name, index){
                    return <li key={ index }> <FontAwesomeIcon className="check" icon={faCircleCheck} /> <span>{name}</span></li>;
                  })}
              {/* <li>
                <FontAwesomeIcon className="check" icon={faCircleCheck} />
                <span>
                  Descrube como ganar dinero realizando drenaje linfatico
                  braseileño
                </span>
              </li>
              <li>
                <FontAwesomeIcon className="check" icon={faCircleCheck} />
                <span>
                  Descrube como ganar dinero realizando drenaje linfatico
                  braseileño
                </span>
              </li>
              <li>
                <FontAwesomeIcon className="check" icon={faCircleCheck} />
                <span>Con este curso podras gastar dinerito</span>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    );
}
