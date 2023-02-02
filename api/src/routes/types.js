const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {Type} = require('../db')
const fetch = require("node-fetch");
const router = Router();

router.get('/',async(req,res)=>{
    const api = await fetch("https://pokeapi.co/api/v2/type")
    const types = await api.json()
    for (const e of types.results) {
        const exists = await Type.findOne({where:{name:e.name}})
        if(exists){
            return res.json(await Type.findAll())
        }
        await Type.create({name:e.name})
    }
    res.json(await Type.findAll())
  })

  module.exports= router

