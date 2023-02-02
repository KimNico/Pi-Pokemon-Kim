
import React, {useEffect} from "react"
import { Route  } from "react-router-dom";
import { useDispatch, } from "react-redux";
import  Poke  from "./components/Poke/Poke.jsx";
import Navbar from './components/Navbar/Navbar.jsx';
import Details from './components/Details/Details';
import { getPokemons, getTypes } from "./redux/actions/index.js";
import Pokemons from "./components/Pokemons/Pokemons.jsx";





function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTypes())
    dispatch(getPokemons())
  })

  return (
    <>
    <Route exact path="/pokemons/:id">
    <Details/>
    </Route>
    <Route exact path="/">
    <Pokemons/>
    </Route>
    
    </>
  );
}

export default App;
