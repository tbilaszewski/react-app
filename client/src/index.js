import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import reducer from "./reducers";
export const store = createStore(reducer, {
  validationMessages: [], 
  filledFields: [],
  submitState : {
    submitted: false
  }
});

window.store = store;
render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

