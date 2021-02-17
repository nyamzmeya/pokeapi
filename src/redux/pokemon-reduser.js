import { pokemonsAPI } from "../api";



let initialState = {
    data: []
  };
  
const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "pokemon/pokemons/ADD-INFO":
            return { ...state, data: action.data};
        default:
            return state;
    }
  };
  
export const setPokemonInfo = (data) => {
    return {
      type: "pokemon/pokemons/ADD-INFO",
      data
    };
};
  
  



export const getPokemonInfo = (currentId) => async (dispatch) => {
  let data = await pokemonsAPI.getPokemon(currentId);
  dispatch(setPokemonInfo(data));
  
}

export default pokemonReducer;
  