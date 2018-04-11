import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPokemons } from '../api/actions';

class List extends Component {
  componentDidMount(){
    this.props.loadPokemons();
  }

  render() {
    return (
      <div>
        {this.props.pokemons.length ?

        <ul>
          {this.props.pokemons.map((pokemon, index) => (<li key={index}>{pokemon.name}</li>))}
        </ul> :

        <p>Carregando pokemons...</p>}
        
      </div>
    );
  }
}

const mapStateToProps = state => ({ 
  pokemons: state.pokemons, 
  navigation: state.navigation 
});

export default connect(mapStateToProps, { 
  loadPokemons 
})(List);
