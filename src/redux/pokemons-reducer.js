import { pokemonsAPI } from "../api";

let initialState = {
  pokemons: [],
  currentNumber: 0,
  currentPage: 1,
  images: []
};

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "pokemon/pokemons/SET-POKEMONS":
      return { ...state, pokemons: action.pokemons };

    case "pokemon/pokemons/SET-CURRENT-PAGE":
      return { ...state, currentPage: action.currentPage };

    case "pokemon/pokemons/SET-CURRENT-NUMBER":
        return { ...state, currentNumber: action.currentNumber };
   

    default:
      return state;
  }
};


export const setPokemons = (pokemons) => {
  return {
    type: "pokemon/pokemons/SET-POKEMONS",
    pokemons,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: "pokemon/pokemons/SET-CURRENT-PAGE",
    currentPage,
  };
};

export const setCurrentNumber = (currentNumber) => {
  return {
    type: "pokemon/pokemons/SET-CURRENT-NUMBER",
    currentNumber,
  };
};





export const getPokemons = (currentNumber) => async (dispatch) => {
  let data = await pokemonsAPI.getPokemons(currentNumber);
  dispatch(setPokemons(data.results));
};



export default pokemonsReducer;