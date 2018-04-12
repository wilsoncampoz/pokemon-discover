import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from './Navigation';
import ListContainer from './ListContainer';
import Loader from './Loader';
import { pokemons, updateItemsPerPage } from '../api/actions';

class List extends Component {
  constructor(props){
    super(props);
    let limit = this.props.match.params.limit;
    this.state = { itemsPerPage: limit && limit.split(':')[1] || 20 };
  }
  
  componentDidMount(){
    this.loadPokemons();
  }

  componentWillReceiveProps(newProps){
    newProps.match.url !== this.props.match.url && this.loadPokemons(newProps);
  }

  getQueryParams(props){
    let { match : { params } } = props;
    let paramKeys = Object.keys(params);
    return paramKeys && paramKeys.reduce((str, key) => str += `${key}=${params[key].split(key + ':')[1]}&`, '?');
  }

  loadPokemons(props = this.props){
    let queryParams = this.getQueryParams(props);
    this.props.loadPokemons(queryParams);
  }

  updateItemsPerPage(value){
    this.setState({ itemsPerPage: value });
    let pathname = this.props.history.location.pathname;
    let regex = /limit:[0-9]+/;
    let hasParams = RegExp(regex).test(pathname);
    let queryParams = pathname.replace(regex, `limit:${value}`);
    this.props.history.push(hasParams ? queryParams : `pokemons/limit:${value}/offset:0`);
  }

  render() {
    let { pokemons, navigation } = this.props;

    return (
      <div>
        {pokemons.length ?

        <div className="list-container">
          <label className="select-group">
            Itens por página: 
            <select onChange={event => this.updateItemsPerPage(event.target.value)} value={this.state.itemsPerPage}>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
          <div>
            <ListContainer pokemons={pokemons} />
            <Navigation navigation={navigation} />          
          </div>
        </div> :

        <Loader />}        
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({ pokemons: state.pokemons, navigation: state.navigation });

export default connect(mapStateToProps, { loadPokemons: pokemons.request })(List);
