import { NavLink } from 'react-router-dom';
import s from './Pokemons.module.css';

const Pokemon = (props) => {

    let id = props.url.slice(34, -1);

    return (
        <div className= {s.pokemon}>
            <NavLink to= {`/pokemon/` + id}>
            <img src={`https://img.pokemondb.net/artwork/${props.name}.jpg`} alt=""/>
            </NavLink>
            <div className= {s.name}>
            {props.name}
            </div>   
        </div>
    )
}

export default Pokemon;