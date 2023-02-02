import React,{useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux";


export default function Filter(){
    const [pokeFilter, setPokeFilter] = useState('')
    const dispatch = useDispatch()
    
    

    return(
        <div>
            <input type='text' name="search" ></input>
            <button type="submit">Search</button>
        </div>
    )
}
