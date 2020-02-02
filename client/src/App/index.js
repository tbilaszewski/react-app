import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import EventForm from '../components/EventForm';
import ValidationMessagesList from '../components/ValidationMessages';
import Submitinformation from '../components/SubmitInformation';
import './App.css';

import reducer from "../reducers";
export const store = createStore(reducer, {
  validationMessages: [], 
  filledFields: [],
  submitState : {
    submitted: false
  }
});


export default function App() {

  return (
    <Provider store={store}>
      <div class="form-container">
          <EventForm />
          <br/>
          <ValidationMessagesList />
      </div>
      <div class="information-container">
        <Submitinformation />
      </div>
    </Provider>
  )
}