import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
export default function Mockup({parentToChild}) {

    return (
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
            <ul >
            {parentToChild.copys.map(function(name, index){
                    return <li key={ index }> <FontAwesomeIcon className="check" icon={faCircleCheck} />   <span align="justify">{name}</span></li>;
                  })}
            </ul>
          </Col>
        </Row>
      </Container>
    );
}
