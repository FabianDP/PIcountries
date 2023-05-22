import './App.css';
import { Route,Routes, useLocation } from 'react-router-dom';
import Inicio from './components/inicio/Inicio.jsx';
import Detail from './components/detail/Detail';
import Nav from './components/nav/Nav';
import Home from './components/paises/Home';
import Form from './components/Activity/ActivityForm';

function App() {
let location=useLocation()
  return (
    <div className="App">
     {location.pathname !=='/' && <Nav />}
        <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/home' element={<Home/>} /> 
         <Route path='/detail/:id' element={<Detail/>} /> 
         <Route path='/Activity' element={<Form/>}/>
         </Routes>
    </div>
  );
}

export default App;
