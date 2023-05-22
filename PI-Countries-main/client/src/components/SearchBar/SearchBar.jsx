import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName,orderCards } from "../../redux/actions";
import styles from "./serachbar.module.css"
const SearchBar = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const onClickHandler = () => {
    dispatch(getName(input));
  };

  

  return (
    <div  >

      <input type="search" onChange={(e) => inputHandler(e)} value={input} />
      <button onClick={() => onClickHandler()}>Buscar Pais</button>
    </div>
  );
};

export default SearchBar;
