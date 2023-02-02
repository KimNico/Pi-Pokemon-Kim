import React from "react";
import { Link } from "react-router-dom";
import pokelogo from "../../img/pngegg.png"
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar"

export default function Navbar(){
  return (
    <div>
        <div >
        <Link to="/"><img src={pokelogo} alt="" className="logo"></img></Link>
        </div>
       <SearchBar/>
    
    </div>
  );
};