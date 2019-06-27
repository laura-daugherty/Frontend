import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import './index.scss';
import App from './App';
import reducer from './reducers'; 

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>, 
  document.getElementById('root'));
