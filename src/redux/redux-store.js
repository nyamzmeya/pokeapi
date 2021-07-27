import thunk from "redux-thunk";
import pokemonReducer from "./pokemon-reduser";

const { createStore, combineReducers, applyMiddleware} = require("redux");
const { default: pokemonsReducer } = require("./pokemons-reducer");




let reducers = combineReducers({
    pokemonsPage: pokemonsReducer,
    pokemonPage: pokemonReducer
});

const store = createStore(reducers,applyMiddleware(thunk));

export default store;