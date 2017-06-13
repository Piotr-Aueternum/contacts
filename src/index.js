import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers/index';
import App from './components/App';

const middleware = process.env.NODE_ENV === 'production'
  ? applyMiddleware()
  : applyMiddleware(logger);
const store = createStore(
  reducer,
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
