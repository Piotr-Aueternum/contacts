import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers/index';
import App from './components/App';
import localStorage from './localStorage';
import { inputs } from './initialState';
import setLocalStorage from './services';

let storageState;
if (localStorage()) {
  storageState = {
    data: localStorage(),
    inputs,
  };
}

const thunk = store => next => (action) => {
  if (typeof action === 'function') {
    action(store.dispatch, store.getState);
    setLocalStorage(store.getState().data);
  } else {
    next(action);
    setLocalStorage(store.getState().data);
  }
};

const middleware = process.env.NODE_ENV === 'production'
  ? applyMiddleware(thunk)
  : applyMiddleware(thunk, logger);

const store = createStore(
  reducer,
  storageState,
  middleware,
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
