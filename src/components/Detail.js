import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadPokemonDetail } from '../api/actions';

class List extends Component {
  componentDidMount(){
    this.props.loadPokemonDetail(this.props.params.id);
  }

  render() {
    let { detail } = this.props;

    return (
      <div>
        {detail ?
          <div>
            Nome: {detail.name}
            Peso: {detail.weight}
            Altura: {detail.height}
            Habilidades: {detail.abilities.map(ability => (<p>{ability.ability.name}</p>))}
          </div> :

          <p>Carregando...</p>
      }
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => ({ 
  detail: state.detail,
  params: match.params
})

export default connect(mapStateToProps, { 
  loadPokemonDetail 
})(List);
