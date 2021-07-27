import Axios from "axios";


const instance= Axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})



export const pokemonsAPI = {
    getPokemons(currentNumber) {
        return instance
        .get(`?offset=${currentNumber}&limit=10`)
        .then(responce => {
            return responce.data
    })},


    getPokemon(currentId) {
        return instance
        .get(`${currentId}/`)
        .then(response => response.data)
    }
}


