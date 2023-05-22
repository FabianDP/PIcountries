import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getdet } from "../../redux/actions";
import styles from "./detail.module.css";

const Detail = () => {
  let { id } = useParams();
  const country = useSelector((state) => state.allActivity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getdet(id));
  }, []);

  return (
    <div className={styles["detail-container"]}>
      <div className={styles["image-container"]}>
        <img src={country?.flag} alt="" />
      </div>
      <div className={styles["content-container"]}>
        <h1>
          <label>ID DE PAIS:</label>
        </h1>
        <h2>{country?.id}</h2>
        <h1>
          <label>NOMBRE DEL PAIS:</label>
        </h1>
        <h2>{country?.name}</h2>
        <h1>
          <label>CONTIENTE:</label>
        </h1>
        <h2>{country?.continent}</h2>
        <h1>
          <label>CAPITAL:</label>
        </h1>
        <h2>{country?.capital}</h2>
        <h1>
          <label>SUB REGION:</label>
        </h1>
        <h2>{country?.subregion}</h2>
        <h1>
          <label># DE AREA:</label>
        </h1>
        <h2>{country?.area}</h2>
        <h1>
          <label>POBLACION:</label>
        </h1>
        <h2>{country?.population}</h2>

        <h1>
          <label>ACTIVIDADES:</label>
        </h1>
        {country?.activities && country.activities.length > 0 ? (
          country.activities.map((activity) => (
            <div key={activity.id}>
              <h2>{activity.name}</h2>
              <p>Difficulty: {activity.difficulty}</p>
              <p>Duration: {activity.duration} horas</p>
              <p>Season: {activity.season}</p>
            </div>
          ))
        ) : (
          <p>No hay actividades disponibles</p>
        )}
      </div>
    </div>
  );
};

export default Detail;
