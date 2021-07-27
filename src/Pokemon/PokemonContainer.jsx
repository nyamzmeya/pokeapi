import { getPokemonInfo } from "../redux/pokemon-reduser";
import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from 'antd';
import s from './Pokemon.module.css';

let mapStateToProps = (state) => {
    return {
        data: state.pokemonPage.data
    }
};


class PokemonComponent extends React.Component {

    
    id = this.props.match.params.id;
    async componentDidMount() {
        await this.props.getPokemonInfo(this.id);
        console.log(this.props.data);
        
    }

   
    render() {

        return (
            <div className= {s.page}>
                <div className={s.content}>
                    <div className={s.pokemon}>
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${this.id}.png`} alt=""/>
                    <div className={s.descr}>
                        <span>Name: {this.props.data.name}</span>
                        <span>Height: {this.props.data.height}</span>
                        <span>Weight: {this.props.data.weight}</span>
                    </div>
                    </div>
                <NavLink to='/'><Button className={s.button}>All pokemons</Button></NavLink>
                </div>
            </div>
        )
        }
    }
    




let PokemonContainer = withRouter(connect(mapStateToProps, {getPokemonInfo}) (PokemonComponent));



export default PokemonContainer;