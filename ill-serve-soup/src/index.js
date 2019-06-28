import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from 'redux-logger';

import './index.scss';
import App from './App';
import reducer from './reducers'; 
import { loadState, saveState } from './utilities/persistState';

const persistedStore = loadState();
const store = createStore(
  reducer,
  persistedStore,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

store.subscribe(() => {
  saveState(store.getState())
});

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>, 
  document.getElementById('root'));
