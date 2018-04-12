import React, { Component } from 'react';
import '../styles/Loader.css';

class Loader extends Component {
  render(){
    return (
      <div className="spinner">
        <p>Carregando</p>        
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    );
  }
}

export default Loader;