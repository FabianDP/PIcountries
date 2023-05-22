import { NavLink } from "react-router-dom";
import styles from "./inicio.module.css"
const Inicio = () => {

  return (
    //userParams userNavigate
    <div>
      <div className={styles.inicio}>
        <h1>EL MUNDO EN TUS MANOS </h1>
         <button>
        <NavLink to="/home">COMENZAR</NavLink>
      </button>
      </div>
    </div>
  );
};

export default Inicio;
