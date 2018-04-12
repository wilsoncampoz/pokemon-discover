import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const linkItem = (item, description) => (
   <li><Link to={`/pokemons/limit:${item.limit}/offset:${item.offset || 0}`}>{description}</Link></li>
);

class Navigation extends Component {
  render(){
    let { navigation: { previous, next } } = this.props;
    
    return (
      <ul>
        {previous && linkItem(previous, 'Anterior')}
        {next && linkItem(next, 'Próximo')}
      </ul>
    );
  }
}

export default Navigation;