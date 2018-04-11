import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import List from './List';
import Detail from './Detail';

import logo from './pokemon-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            <h1 className="App-title">Bem vindo ao descubra pokémons</h1>
          </header>
          <Route exact={true} path="/" render={() => (<Link to="/pokemons">Descobrir</Link>)}/>
          <Route exact={true} path="/pokemons" component={List} />
          <Route path="/pokemons/:id" component={Detail} />
        </div>
      </Router>
    );
  }
}

export default App;
