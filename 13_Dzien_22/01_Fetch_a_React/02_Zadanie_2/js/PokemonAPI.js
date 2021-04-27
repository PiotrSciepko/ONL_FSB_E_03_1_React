import React, {useEffect, useState} from 'react';

const PokemonApi = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon ")
            .then(resp => resp.ok && resp.json())
            .then(data => setPokemons(data.results))
            .catch(() => "Błędne dane")
    }, [])

    return pokemons.length ?
        <ul className={"list"}>{pokemons.map(item => <li>{item.name}</li>)}</ul> : "Czekam na dane...";
};

export default PokemonApi;