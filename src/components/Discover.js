import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Colors } from 'react-foundation';

class Discover extends Component {
  render(){
    return (
      <Link to="/pokemons"><Button color={Colors.SUCCESS}>Descobrir</Button></Link>
    );
  }
};

export default Discover;