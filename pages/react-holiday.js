import React, { useEffect, useState, Fragment } from 'react';
import Layout from '../components/MyLayout';

async function fetchPokemon(id = '') {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (res.ok) {
        return await res.json();
    } else {
        return Promise.reject(res.status);
    }
}

const Pokemon = function({info, ...props}) {
    const { name, sprites: { front_default } } = info;
    return <div>
        <h1 {...props}>{name}</h1>
        <img src={front_default} />
    </div>
}

// have to use "As" because jsx assumes it's a host element and not a component
const PokemonList = function({items, as: As = Fragment, ...props}) {
    return (
        <As {...props}>{items.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}</As>
    )
}

const usePokemon = function(index) {
    let [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetchPokemon(index).then(json => setPokemon(json))
        .catch(err => console.log(`error [${err}] for id [${index}]`));
    }, [index]);
    return pokemon;
}

const ReactHoliday = function() {
    let [index, setIndex] = useState(1);
    let pokemon = usePokemon(index);
    let collection = usePokemon("");

    return (
        <Layout>
            <button type='button' onClick={() => setIndex(index + 1)}>Next pokemon</button>
            {pokemon ? 
                <Pokemon info={pokemon}/> : 
                <div>No pokemon for {index} </div>
            }

            {collection ?
                <ol><PokemonList items={collection.results} /></ol> :
                <div>Fetching pokemon...</div>
            }
        </Layout>
    );
}

export default ReactHoliday;