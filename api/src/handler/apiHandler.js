const fetch = require("node-fetch")

const {Pokemon, Type} = require('../db')

const getPokemonsName=async(name)=>{
  const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const data = await api.json()
  const pokemonName = [
    {
      id: data.id,
      name: data.name,
      type: data.types.map((t) => t.type.name),
      img: data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
    },
  ];
  return pokemonName
}

const getPokemons = async (by) => {
    const api = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await api.json();
    const bd = await Pokemon.findAll({ include: Type });
  
    let base = [...bd, ...data.results];
  
    if (by === "2") {
      base = [...bd];
    } else if (by === "1") {
      base = [...data.results];
    }
  
    let pokemonInfo = [];
    for (i = 0; i < base.length; i++) {
      if (!base[i]) return pokemonInfo;
      if (base[i].url) {
        const pokemon = await fetch(base[i].url);
        const info = await pokemon.json();
  
      
        pokemonInfo.push({
          id: info.id,
          name: info.name,
          type: info.types.map((t) => t.type.name),
          img: info.sprites.versions["generation-v"]["black-white"].animated
            .front_default,
            hp:info.stats[0].base_stat,
          attack: info.stats[1].base_stat,
          defense: info.stats[2].base_stat,
          speed: info.stats[3].base_stat,
          height: info.stats[4].base_stat,
          weight:info.stats[5].base_stat

        });
      } else {
        pokemonInfo.push({
          id: base[i].id,
          idPoke: base[i].idPoke,
          name: base[i].name,
          type: base[i].tipos.map((t) => t.name),
          hp:base[i].hp,
          attack: base[i].attack,
          defense:base[i].defense,
          speed:base[i].speed,
          height:base[i].height,
          weight:base[i].weight,
          img: "https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif",
        });
      }
    }
   
    return pokemonInfo;
  };
  
// const getDbInfo= async()=>{
//     return await Pokemon.findAll({
//         include:{
//             model:Type,
//             attributes:['name'],
//             trhough:{
//                 attributes:[],
//             }
//         }
//     })
    
// }

// const getAll = async()=>{
//     const apiInfo = await getPokemons();
//     const dbInfo = await getDbInfo();
//     const info =  apiInfo.concat(dbInfo)
//     return info
// }

module.exports= {
    getPokemons,
    getPokemonsName,
}