import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getall } from "../../redux/actions";
import axios from "axios";
import styles from "./actiForm.module.css";
import validaciones from "./validation";

const Form = () => {
  const users = useSelector((state) => state.allCountrie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getall());
  }, []);

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const addCountrie = (evento) => {
    const countri = evento.target.options[evento.target.selectedIndex].value;
    if (countri && !form.countries.includes(countri)) {
      setForm((prevForm) => ({
        ...prevForm,
        countries: [...prevForm.countries, countri],
      }));
    }
  };

  const removeCount = (index) => {
    setForm((prevForm) => {
      const newCountries = [...prevForm.countries];
      newCountries.splice(index, 1);
      return {
        ...prevForm,
        countries: newCountries,
      };
    });
  };

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: "",
  });

  const changeHandler = (evento) => {
    const property = evento.target.name;
    const value = evento.target.value.toUpperCase();
    setForm((prevForm) => ({
      ...prevForm,
      [property]: value,
    }));

    setErrors(
      validaciones({
        ...form,
        [property]: value,
      })
    );
  };

  const submitHandler = (evento) => {
    // evento.preventDefault();
  
    if (form.countries.length === 0) {
      alert("Debes seleccionar al menos un país.");
      return;
    }
  
    console.log(form);
    const endpoint = "http://localhost:3001/activities/newActivity";
    axios
      .post(endpoint, form)
      .then((res) => alert("actividad creada"))
      .catch((err) => alert("Hay campos repetidos o sin llenar."));
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
        />
        <br />
        {errors.name && <p>{errors.name}</p>}

        <label>Difficulty:</label>
        <select
          value={form.difficulty}
          onChange={changeHandler}
          name="difficulty"
        >
          <option value="" disabled="disabled">
            difficulty
          </option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>

      <div>
        <label>Duration:</label>
        <input
          type="text"
          value={form.duration}
          onChange={changeHandler}
          name="duration"
        />
        <br />
        {errors.duration && <p>{errors.duration}</p>}
      </div>

      <div>
        <label>Season:</label>
        <select value={form.season} onChange={changeHandler} name="season">
          <option value="" disabled="disabled">
            -Temporada-
          </option>
          <option value="AUTUMN">Autumn</option>
          <option value="WINTER">Winter</option>
          <option value="SPRING">Spring</option>
          <option value="SUMMER">Summer</option>
        </select>
      </div>

      <div>
        <label>Countries:</label>
        <select value={form.countries} onChange={addCountrie} name="countries">
        <option value="" disabled="disabled">
            -Temporada-
          </option>
          {users.map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <label>Selected Countries:</label>
        <div className={styles.label}>
          
          {form.countries.map((country, index) => (
            <div className={styles.div1} key={index}>
              {country} <button onClick={() => removeCount(country)}>X</button>
            </div>
          ))}
        </div>
      </div>
      <button
        type="submit"
        disabled={
          !form.name ||
          !form.difficulty ||
          !form.duration ||
          !form.season ||
          !form.countries.length === 0
        }
      >
        AGREGAR
      </button>
    </form>
  );
};

export default Form;
