import { GET_POKEMONS } from "../actions";
import { GET_POKEMON_DETAIL } from "../actions";
import { CREATE_POKEMON } from "../actions";
import { GET_TYPE } from "../actions" 
import { GET_POKEMON_NAME } from "../actions";


const initialState = {
  pokemons: [],
  types:[],
  pokemonsDetail: {},
  pokemonbyName:{}



};

const rootReducer = (state =  initialState, action) => {
  switch (action.type) {
   case GET_POKEMONS:
    return{
      ...state,
      pokemons:action.payload

    }
    case GET_TYPE:{
      return{
        ...state,
        types:action.payload
      }
    }
    case GET_POKEMON_DETAIL:
      console.log(action.payload);
    return{
      ...state,
      pokemonsDetail: action.payload
    }
    case GET_POKEMON_NAME:
      return{
        ...state,
        pokemonbyName:action.payload
      }
    case CREATE_POKEMON:
    return{
      ...state,
      pokemons: state.pokemons.concat(action.payload)
    }
    default:
  }
  
  return state
};

export default rootReducer;