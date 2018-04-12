import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from './Navigation';
import ListContainer from './ListContainer';
import { pokemons } from '../api/actions';

class List extends Component {
  componentDidMount(){
    this.loadPokemons();
  }

  componentWillReceiveProps(newProps){
    newProps.match.url !== this.props.match.url && this.loadPokemons(newProps);
  }

  loadPokemons(props = this.props){
    let { match : { params } } = props;
    let paramKeys = Object.keys(params);
    let queryParams = paramKeys && paramKeys.reduce((str, key) => str += `${key}=${params[key].split(key+':')[1]}&`, '?');
    this.props.loadPokemons(queryParams);
  }

  render() {
    let { pokemons, navigation } = this.props;

    return (
      <div>
        {pokemons.length ?

        <div className="list-container">
          <ListContainer pokemons={pokemons} />
          <Navigation navigation={navigation} />          
        </div> :

        <p>Carregando pokemons...</p>}        
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({ pokemons: state.pokemons, navigation: state.navigation });

export default connect(mapStateToProps, { loadPokemons: pokemons.request })(List);
