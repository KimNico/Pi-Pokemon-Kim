export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL"
export const GET_POKEMON_NAME="GET_POKEMON_NAME"
export const GET_TYPE= "GET_TYPE"
export const CREATE_POKEMON = "CREATE_POKEMON";



export const getPokemons = () => async (dispatch) => {
    const response = await fetch(`http://localhost:3001/pokemons`);
    const data = await response.json();
    dispatch({
      type: GET_POKEMONS,
      payload: data,
    });
  };


export const getPokemonDetail = (id) => {
    return async function(dispatch) {
        const response  = await fetch(`http://localhost:3001/pokemons/${id}`);
        const data  = await response.json()
        console.log(data);
        dispatch({

            type: "GET_POKEMON_DETAIL",
            payload: data[0]
        })
      };
};
export const getTypes = ()=>async (dispatch) => {
  const response = await fetch("http://localhost:3001/types");
  console.log(response);
  const data = await response.json();
  console.log(data);
  dispatch({
    type: "GET_TYPE",
    payload: data,
  });
};

export const getPokemonName = (name)=>{
  return async function(dispatch){
    const response = await fetch (`https://localhost:3001/pokemons?name=${name}`)
    const data = await response.json()
    dispatch({
      type:"GET_POKEMON_NAME",
      payload:data
    })
  }
}





