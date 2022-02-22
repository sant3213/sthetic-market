import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/home";
import BlankPage from "./components/blankPage/blankPage";

// export class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modalShow: true,
//       email: ''
//     };
//   }

//   setModalShow() {
//     this.setState({ modalShow: !this.state.modalShow });
//   }

//   handleCallback = (childData, modalShow) =>{
//     this.setState({email: childData, modalShow: modalShow});
//     console.log(childData);
//     // Call service to send the email
// }
export default function App() {
  
  return (
    <div>
      <div>
        <Routes>
          <Route exact path="" element={<Home/>} />
          <Route exact path="/modal" element={<BlankPage/>} />
        </Routes>
      </div>
    </div>
  );
}
