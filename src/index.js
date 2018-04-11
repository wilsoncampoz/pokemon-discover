import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReactDOM from 'react-dom';

import rootReducer from './api/reducers';
import rootSaga from './api/sagas';

import App from './components/App';

class Page extends Component {
  componentWillMount() {
    const sagaMiddleware = createSagaMiddleware();
    this.store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
  }

  render(){
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    );
  }
};

ReactDOM.render(<Page />, document.getElementById('root'));