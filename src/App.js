import "./App.css";
import { Route, withRouter, Switch } from "react-router-dom";
import PokemonsContainer from "./Pokemons/PokemonsContainer";
import React from "react";
import PokemonContainer from "./Pokemon/PokemonContainer";

function App() {
  return (
    <Route
      render={({ location }) => (
          <Switch location={location}>
            <Route exact path="/" component={PokemonsContainer} />
            <Route path="/pokemon/:id" component={PokemonContainer} />
          </Switch>
      )}
    />
  );
}

export default withRouter(App);
