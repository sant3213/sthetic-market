import { Row } from "react-bootstrap";
import { Progress } from "../progressBar/progress";
import "./header.css";

export default function Header() {
  return (
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
  );
}
