import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { secondBenefits } from "../../../utils/constants";
import {IMAGES_DATA} from '../../../utils/constants';
export default function Pleasures() {
  
  return (
    <div>
      <h1 className="title">¿ Qué vas Aprender?</h1>
      <Container>
        <ul className="learn-list">
          {IMAGES_DATA.map((imageData) => (
            <li key={imageData.id}>
              <img
                className="icon-list"
                alt="drenaje linfático"
                src={`${imageData.source}`}
              ></img>
              {imageData.title}
            </li>
          ))}
        </ul>
        <div className="first-list-container">
          <ul className="first-list">
            {secondBenefits.map((list) => (
              <li key={list.id}>
                <FontAwesomeIcon className="check" icon={faCircleCheck} />
                {list.value}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
