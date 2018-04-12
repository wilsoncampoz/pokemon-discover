import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';

import List from './List';
import Detail from './Detail';
import logo from './pokemon-logo.png';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            <h1 className="App-title">Bem vindo ao descobrindo pokémons</h1>
          </header>
          <Route exact path="/" render={() => (<Link to="/pokemons">Descobrir</Link>)}/>
          <Route exact path="/pokemons" component={List} />
          <Route exact path="/pokemons/:limit(limit:[0-9]+)/:offset(offset:[0-9]+)" component={List} />
          <Route exact path="/pokemons/detail/:id([0-9]+)" component={Detail} />
        </div>
      </Router>
    );
  }
}

export default App;
