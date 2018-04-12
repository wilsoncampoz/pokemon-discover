import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const linkItem = (item, description) => (
  <li className={`pagination ${!item && 'disabled'}`}>
    {item ?
      <Link to={`/pokemons/limit:${item && item.limit}/offset:${item && item.offset || 0}`}>{description}</Link> :
      description
    }    
    <span className="show-for-sr">page</span>
  </li>
);

class Navigation extends Component {
  render(){
    let { navigation: { previous, next } } = this.props;
    
    return (
      <nav aria-label="Pagination">
        <ul className="pagination">
          {linkItem(previous, 'Anterior')}
          {linkItem(next, 'Próximo')}
        </ul>
      </nav>      
    );
  }
}

export default Navigation;