import { useDispatch } from "react-redux";
import { useEffect } from "react";
import  axios from "axios";
import { useState } from "react";
import styles from "./home.module.css"
import {
  getall,
  orderCards,
  poblationCards,
  filterContinets,
  filterActi,
} from "../../redux/actions";
import CardP from "../CardPais/CardP";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getall());
  }, []);
  // Obtener la lista de actividades del estado de Redux
  const [actNames, setActNames] = useState([]);
  useEffect(() => {
    const endpoint = "http://localhost:3001/activities";
    axios
      .get(endpoint)
      .then((res) => {
        const names = res.data.map((activity) => activity.name);
        setActNames(names);
      })
      .catch((err) => alert(err));
  }, []);

  const handleOrder = (evento) => {
    dispatch(orderCards(evento.target.value));
  };

  const handleOrderS = (evento) => {
    dispatch(poblationCards(evento.target.value));
  };

  const handleOrderC = (evento) => {
    dispatch(filterContinets(evento.target.value));
  };

  const handleOrderA = (evento) => {
    dispatch( filterActi(evento.target.value));
  };

  return (
    <div >
      <div className={styles.home}>
        <select onChange={handleOrder}>
          <option value="order" disabled="disabled">
            orden alphabet
          </option>
          <option value="A">Alfab Asc</option>
          <option value="D">Alfab Des</option>
        </select>

        <select onChange={handleOrderS}>
          <option value="order" disabled="disabled">
          POPULATION
          </option>
          <option value="PA">Max POPULATION</option>
          <option value="PD">Min POPULATION</option>
        </select>

        <select onChange={handleOrderC}>
          <option value="" disabled="disabled">
          Continets
          </option>
          <option value="Asia">Asia</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        <select  onChange= {handleOrderA}>
          <option value="">Seleccionar actividad </option>
          {actNames.map((name) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
      </div>
      <CardP />
    </div>
  );
};

export default Home;