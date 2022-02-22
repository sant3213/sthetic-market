import { EmailModal } from "../emailModal/EmailModal";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function BlankPage(props) {

let state = {
    modalShow: true,
          email: ""
};
const navigation = useNavigate();
  function setModalShow() {
    this.setState({ modalShow: !this.state.modalShow });
  }

  function handleCallback(childData, modalShow){
    console.log(childData);
    // Call service to send the email
    // Send to home page with a thanks modal
    // navigation("/home");
  };

  function goHome() {
    navigation("/home");
  }
 
//   render() {
    const newStyle = {
      backgroundColor: "#664d48",
    };
    return (
      <div style={newStyle}>
        <>
          <EmailModal
            show={state.modalShow}
            onHide={() => setModalShow(false)}
            parentcallback={handleCallback}
            gohomeparentcall ={goHome}
          />
        </>
      </div>
    );
  }
// }
