import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import mainReducer from './store/reducers/index'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(mainReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename='/app'>
        <App />
      </Router>
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
