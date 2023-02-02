import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getPokemonDetail } from "../../redux/actions";
import  Poke  from "../Poke/Poke";
import Navbar from "../Navbar/Navbar";
import  './Detail.css'


export default function Details(){
    // const [detail, setDetail] = useState(useSelector(state => state.pokemonsDetail))
    const { id }  = useParams()
    const dispatch = useDispatch();
    const detail = useSelector(state => state.pokemonsDetail);

    useEffect(()=>{
console.log("useEffect");
        dispatch(getPokemonDetail(id))
        //eslint-disable-next-line
    },[])
    
    console.log(detail);
    console.log(detail.name);

    return(
        <div >
             <Navbar/>
             <div className="detail_poke">
         <Poke 
         img={detail.img}
         name={detail.name}
         type={detail.type}
         id={id}
         />
         </div>
        </div>
    )
}


