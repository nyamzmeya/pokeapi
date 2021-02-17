import './App.css';
import {Route, withRouter} from "react-router-dom";
import PokemonsContainer from './Pokemons/PokemonsContainer';
import React from 'react';
import PokemonContainer from './Pokemon/PokemonContainer';



function App() {

 

  return (
    <>
      <Route exact path="/" component= {PokemonsContainer}/>    
      <Route path="/pokemon/:id" component={PokemonContainer}/>
    </>
  );
}

export default withRouter(App);
