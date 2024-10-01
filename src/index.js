
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducer';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(allReducers,composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
