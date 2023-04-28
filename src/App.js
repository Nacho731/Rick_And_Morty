import style from "./App.module.css"
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav"
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

//const API_KEY = "9f6f86a9dd23.a3f53317ae5fc80268a5"
//const URL_BASE = "https://be-a-rym.up.railway.app/api/character"
const email = "nacho@gmail.com"
const password = "explosion"

function App() {

const[access, setAccess] = useState(false);
const location = useLocation();
const navigate = useNavigate();
const [characters, setCharacters] = useState([]);

const login = (userData) => {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';
   axios(URL + `?email=${email}&password=${password}`)
   .then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
   });
}

useEffect(()=>{
   !access && navigate("/")
}, [access])

const onSearch = (id) => {
   axios(`http://localhost:3001/rickandmorty/character/${id}`)
   .then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         alert('¡No hay personajes con este ID!');
      }
   });
}


const onClose = (id) => {
   const charactersFiltered = characters.filter(character =>
      character.id !== (id))
      setCharacters (charactersFiltered)
}


   return (
      <div className='App' style={{padding:"25px"}}>
         {
            location.pathname !== "/"
            ? <div className={style.nav}>
              <Nav onSearch={onSearch} />
              </div>
            : null
         }
         
        
         
         <br />
         <Routes>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path= "/home" element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="detail/:id" element={<Detail/>}/>
            <Route path="/favorites" element={<Favorites/>}/>

         </Routes>
         
         <br />
         
         <br />
         
      </div>
  
   );
}

export default App;
