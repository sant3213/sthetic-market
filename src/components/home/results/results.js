import { Row, Col } from "react-bootstrap";
import { imagesSrc } from "../../information/imageSources";
export default function Results() {
  return (
    <div>
      <h1 className="title">Resultados en pacientes</h1>
      <Row>
        {imagesSrc.first.map((image) => (
          <Col key={image}>
            <img alt="drenaje linfatico" src={image} className="result"></img>
          </Col>
        ))}
      </Row>
      <Row>
        {imagesSrc.second.map((image) => (
          <Col key={image}>
            <img alt="drenaje linfatico" src={image} className="result"></img>
          </Col>
        ))}
      </Row>
    </div>
  );
}
