import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";
const emailState = {
  email: "",
  error: "",
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

  onSubmit(){
    if(this.emailValidation()){
        this.setState(emailState);
        this.props.parentcallback(this.state.email)
    }
}

  render() {
    return (
      <Modal
        show={this.props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Escribe tu correo para enviarte un pdf con información del curso
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form onSubmit={this.onTrigger}>
              {/* <input type = "text" 
                name = "myname" placeholder = "Ingresa el correo"   onChange={this.handleChange.bind(this, "email")}
                value={this.state.fields["email"]}/> */}
              <div className="form-group mb-3">
                    <label><strong>Email</strong></label>
                    <input type="email" name="email" value={this.state.email} onChange={this.onChange} className="form-control" />
                    <span className="text-danger">{this.state.error}</span>
                </div>
              <br></br>
              <br></br>
              <Button type="submit">Enviar</Button>
              <br></br>
              <br></br>
            </form>
          </div>
          <div>
                <div className="form-group mb-3">
                    <label><strong>Email</strong></label>
                    <input type="email" name="email" value={this.state.email} onChange={this.onChange} className="form-control" />
                    <span className="text-danger">{this.state.error}</span>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-dark" onClick={()=>this.onSubmit()}>Submit</button>
                </div>  
            </div>
        </Modal.Body>
        {/* <Modal.Footer>
      <Button type = "submit" value = "Submit" onSubmit={() => this.onTrigger}>Enviar</Button>
      </Modal.Footer> */}
      </Modal>
    );
  }
}
