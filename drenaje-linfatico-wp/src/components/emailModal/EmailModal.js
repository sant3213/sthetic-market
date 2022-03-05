import Modal from "react-bootstrap/Modal";
import React from "react";
import "./emailmodal.css";
const emailState = {
  email: "",
  error: "",
  showEmailModal: true
};
export class EmailModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = emailState;
    this.onChange = this.onChange.bind(this);
  }

  onTrigger = (event) => {
    this.props.parentcallback(event.target.myname.value, false);
    event.preventDefault();
  };

  onChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  emailValidation() {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!this.state.email || regex.test(this.state.email) === false) {
      this.setState({
        error: "Email is not valid",
      });
      return false;
    }
    return true;
  }

  onSubmit() {
    if (this.emailValidation()) {
      this.setState(emailState);
      this.props.parentcallback(this.state.email);
      emailState.showEmailModal = false;
    }
  }

  goToHome() {
    this.props.gohomeparentcall();
  }

  render() {
    return (
      emailState.showEmailModal ? 
      <Modal
        show={this.props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1 className="title">Escribe tu correo para enviarte un pdf con información del curso</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="form-group mb-3">
              <label>
                <strong>Email</strong>
              </label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                className="form-control"
              />
              <span className="text-danger">{this.state.error}</span>
            </div>
              {/* <button type="submit" className="btn btn-dark" onClick={()=>this.onSubmit()}>Submit</button> */}
              {/* <Button type="submit" onClick={() => this.onSubmit()}>
                Enviar
              </Button> */}
              <div className="container-btn">
                <div className="button">
                  <a href="#" className="btn btn-join" onClick={() => this.onSubmit()}>
                    Enviarme el PDF
                  </a>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal> :  <Modal
        show={this.props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h1 className="title">Gracias! En unos minutos llegará el pdf a tu correo!</h1>
            <p>En el pdf están las técnicas, pero ojo! tiene que seguir el protocolo para que estas técnicas sean efectivas y esas únicamente las vas a encontrar en el curso de
              drenaje linfatico brasileño que he preparado para ti
            </p>
            <div className="container-btn">
                <div className="button">
                  <a href="#" className="btn btn-join" onClick={() => this.goToHome()}>
                   Ver curso
                  </a>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
