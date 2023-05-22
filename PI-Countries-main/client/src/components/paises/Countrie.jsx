import { Link } from "react-router-dom";
import styles from "../paises/countrie.module.css"
const Countries = (props) => {
  return (
    
    <div className={styles.polaroid}>
    <div >
      <div className={styles.contenedor}>
      <p><Link to={`/detail/${props.id}`}> <h3 className="card-name">{props.name}</h3> </Link> </p>
      </div>
   <div className={styles.img} >
      <p> <img src={props.flag} alt=""/> </p>
   </div>
   <div className={styles.p}>
    <h1>{props.continents}</h1>  
   </div>
    </div>
    </div>
  );
};

export default Countries;
