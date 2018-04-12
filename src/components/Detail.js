import React, { Component } from 'react';
import { connect } from 'react-redux';

import { detail } from '../api/actions';
import Loader from './Loader';

class List extends Component {
  componentDidMount(){
    this.props.loadDetail(this.props.params.id);
  }

  render() {
    let { detail } = this.props;

    return (
      <div>
        {detail ?

          <div>
            <img align="center" alt={detail.name} src={detail.sprites.front_default} />

            <ul>            
              <li>Nome: {detail.name}</li>
              <li>Peso: {detail.weight}</li>
              <li>Altura: {detail.height}</li>
              <li>Habilidades: {detail.abilities.map(ability => (ability.ability.name + ', '))}</li>
            </ul>
          </div> :

          <Loader />}
      </div>
    );
  }
}

const mapStateToProps = (state, { match: { params }}) => ({ detail: state.detail, params });

export default connect(mapStateToProps, { loadDetail: detail.request })(List);
