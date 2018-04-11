import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import List from './List';
import Detail from './Detail';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Pokemons</h1>
          </header>
          <Route exact={true} path="/pokemons" component={List} />
          <Route path="/pokemons/:id" component={Detail} />
        </div>
      </Router>
    );
  }
}

export default App;
