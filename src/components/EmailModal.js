import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";
export class EmailModal extends React.Component {
  constructor(props) { super(props);}
  onTrigger = (event) => {
    this.props.parentcallback(event.target.myname.value, false);
    event.preventDefault();
}
  render() {
    return(
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
            <form onSubmit = {this.onTrigger}>
                <input type = "text" 
                name = "myname" placeholder = "Enter Name"/>
                <br></br><br></br>
                <Button type = "submit" >Enviar</Button>
                <br></br><br></br>
            </form>
        </div>
      
      </Modal.Body>
      {/* <Modal.Footer>
      <Button type = "submit" value = "Submit" onSubmit={() => this.onTrigger}>Enviar</Button>
      </Modal.Footer> */}
    </Modal>
  );
}}
