import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/ListContainer.sass';

const pokemonItem = (pokemon, index) => (
  <div className="container-item" key={index}>
    <p>{pokemon.name}</p>
    <Link to={`/pokemons/detail/${pokemon.id}`}><button className="button">Ver detalhes</button></Link>
  </div>
);

class ListContainer extends Component {
  render(){
    return (
      <div className="container">
        {this.props.pokemons.map((pokemon, index) => pokemonItem(pokemon, index))}
      </div>
    );
  }
}

export default ListContainer;
