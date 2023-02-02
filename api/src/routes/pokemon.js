const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getPokemons, getDbInfo,getAll, getPokemonsName} = require('../handler/apiHandler')
const fetch = require("node-fetch");
const Pokemon = require('../models/Pokemon');
let { Types} = require("../db");




const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", async (req, res) => {
    try {
        let { name, by } = req.query;
    let pokemonInfo = [];
    if (name) {
      name = name.toLowerCase();
      pokemonInfo = await getPokemonsName(name);
      if (!pokemonInfo.length)
        return res.json({ info: "No se encontro el pokemon" });
      return res.json(pokemonInfo);
    }
  
    pokemonInfo = await getPokemons(by);
    if (!pokemonInfo.length) return res.json({ info: "No hay mas registros" });
  
    res.json(pokemonInfo);
    } catch (error) {
        res.send(error)
    }
  });

  router.get('/:id',async(req,res)=>{
        const {id} = req.params
    let pokemons = await getPokemons()
    let pokeId = pokemons.filter(e=>e.id == id)
    if(pokeId.length){
        res.json(pokeId)
    }
   
  })

  router.post('/',async(req,res)=>{
 try {
    const { name ,hp, defense, speed, height,type, weight,pokeId }= req.body

    let newPokemon = Pokemon.create({
        name ,hp, defense, speed, height, weight,pokeId 
    })
    let typeBd = await Types.findAll({
        where:{
            name:type,
        }
    })
    newPokemon.addTypes(typeBd)
    res.send("Pokemon creado con exito!")
 } catch (error) {
    res.send(error)
 }
  })




module.exports = router;