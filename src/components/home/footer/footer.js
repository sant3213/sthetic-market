import { Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div>
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
      <a href="https://go.hotmart.com/S66618608K?ap=cbdc">
        <Row className="container-btn">
          <div className="blob-button">
            <h4 className="center">Quiero aprender!</h4>
          </div>
        </Row>
      </a>
    </div>
  );
}
