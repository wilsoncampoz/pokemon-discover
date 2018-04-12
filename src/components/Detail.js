import React, { Component } from 'react';
import { connect } from 'react-redux';

import { detail } from '../api/actions';
import Loader from './Loader';

const style = { "margin-top": "30px" };

class List extends Component {
  componentDidMount(){
    this.props.loadDetail(this.props.params.id);
  }

  render() {
    let { detail } = this.props;

    return (
      <div style={style}>
        {detail ?

          <div>
            <img align="center" alt={detail.name} src={detail.sprites.front_default} />                        
            <p>Nome: {detail.name}</p>
            <p>Peso: {detail.weight}</p>
            <p>Altura: {detail.height}</p>
            <p>Habilidades: {detail.abilities.map(ability => (ability.ability.name + ', '))}</p>            
          </div> :

          <Loader />}
      </div>
    );
  }
}

const mapStateToProps = (state, { match: { params }}) => ({ detail: state.detail, params });

export default connect(mapStateToProps, { loadDetail: detail.request })(List);
