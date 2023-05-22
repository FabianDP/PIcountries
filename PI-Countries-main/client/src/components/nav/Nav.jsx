import {NavLink} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { getall } from "../../redux/actions";
import styles from "./nav.module.css"
const Nav=()=>{
      
  const dispatch = useDispatch();
  const homeHandler = () => {
    dispatch(getall());
  };
  return(
        <nav className={styles.nav}>
          <SearchBar/> 
          <button className={styles.left}> <NavLink to='/' >inicio</NavLink></button>
          <button onClick={()=>homeHandler()}> <NavLink to='/home' >HOME </NavLink></button>
          <button className={styles.right}> <NavLink to='/Activity' >ACTIVITY </NavLink></button>
        </nav>      
    )
}
export default Nav




// const [characters, setCharacters] = useState([])
// const onSearch= async(name)=>{
//   try {
//     const findName=characters.find(pais=>pais.name===name)
//     console.log(findName)
//     if(findName){
//       return alert('esta aca')
//     }
//     const{data}= await axios.get(`http://localhost:3001/countrie?name=${name}`)
//     if(data.name)
//     {
//       setCharacters((oldChars)=>[...oldChars],data)
//     }
//   } catch (error) {
//     alert('no hay paise con ese nombre')
//   }
// }