import { connect } from "react-redux";
import React from 'react';
import { requestCurrentNumber, requestCurrentPage, requestPokemons } from "../redux/pokemons-selector";
import {setCurrentPage, setCurrentNumber, getPokemons} from '../redux/pokemons-reducer';
import Pokemons from "./Pokemons";



let mapStateToProps = (state) => {
    return {
        pokemons: requestPokemons(state),
        currentNumber: requestCurrentNumber(state),
        currentPage: requestCurrentPage(state)
    }
};



class PokemonsComponent extends React.Component {


    componentDidMount() {
        
        this.props.getPokemons(this.props.currentNumber);
        
    }
        

    onPageChange = (currentPage) => {

        if (currentPage == 1) {
            this.props.setCurrentNumber(0);
            this.props.getPokemons(0);
            this.props.setCurrentPage(currentPage);
        } else {
            this.props.setCurrentNumber(currentPage * 10 - 10);
            this.props.getPokemons(currentPage * 10 - 10);
            this.props.setCurrentPage(currentPage);
        }
    }


    render() {
        return <Pokemons
            pokemons = {this.props.pokemons}
            currentNumber = {this.props.currentNumber}
            currentPage = {this.props.currentPage}
            onPageChange= {this.onPageChange}
            />    
        }
            
};



let PokemonsContainer = connect(mapStateToProps,
    {setCurrentPage, setCurrentNumber, getPokemons})(PokemonsComponent);

export default PokemonsContainer;