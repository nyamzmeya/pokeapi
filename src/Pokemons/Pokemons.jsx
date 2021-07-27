import Paginator from "./Paginator";
import Pokemon from "./Pokemon";
import s from './Pokemons.module.css';
import Image from "../img/logo-pokemon.svg";

const Pokemons = (props) => {

    let PokemonsEl = props.pokemons.map(u =>
        {return <Pokemon name={u.name}
        url={u.url}/>});


    return <div className={s.page}>
        <div className= {s.content}>
        <img src={Image}/>
        <Paginator 
            currentNumber={props.currentNumber} 
            onPageChange={props.onPageChange}
            currentPage = {props.currentPage}/>
        <div className= {s.pokemons}>
            {PokemonsEl}
        </div>
        </div>
    </div>
    
}

export default Pokemons;