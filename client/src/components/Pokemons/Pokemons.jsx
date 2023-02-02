import React,{ useEffect} from "react";
import { getPokemons } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Pokemons.css"

export default function Pokemons(){
    const dispatch = useDispatch()
    const pokemons = useSelector(state=>state.pokemons)

    useEffect(()=>{
        dispatch(getPokemons())
    })

    return(
    <div className="fondo">
        <Navbar/>
       
        <div  >
        {
            pokemons.map(e=>(
                <div className="cards" >
                    <img key={e.img} src={e.img} alt=""></img>
                    <Link to={`pokemons/${e.id}`} key={e.name}>{e.name}</Link>
                    <h2 key={e.type}>{e.type}</h2>
                    <h3 key={e.id}>#{e.id}</h3>
                </div>
            ))
        }
        </div>
     
    </div>
    )
}