import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const pokemonItem = pokemon => (
  <li>
    <p>{pokemon.name}</p>
    <p><Link to={`/pokemons/detail/${pokemon.id}`}>Ver detalhes</Link></p>
  </li>
);

class ListContainer extends Component {
  render(){
    return (
      <ul>
        {this.props.pokemons.map(pokemon => pokemonItem(pokemon))}
      </ul>
    );
  }
}

export default ListContainer;
