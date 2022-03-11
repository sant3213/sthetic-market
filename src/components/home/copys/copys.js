import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FIRST_BENEFITS } from "../../utils/constants";
export default function COPYS(){
    return (
        <div>
          <div className="portada">
            <img
              className="mockup-copy-main"
              alt="drenaje linfático"
              src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/drenaje_linfatico_po_W1RwK.jpg"
            ></img>
          </div>
          <div className="list-description">
            <h1 className="title">¿ Por qué debería tomar el curso?</h1>
            <div className="why-course">
              <p align="justify">
                Es un tratamiento de resultados
                <strong> rápidos y evidentes</strong> desde la primera sesión.
                Actualmente es una de las técnicas más
                <strong>apetecidas</strong> en el mundo de la estética.
              </p>
            </div>
          </div>
          <div className="list-description">
            <ul>
              {FIRST_BENEFITS.map((listInfo) => (
                <li key={listInfo.id}>
                  <FontAwesomeIcon className="check" icon={faCircleCheck} />
                  {listInfo.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
    )
}