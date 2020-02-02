import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import EventForm from '../components/EventForm';
import ValidationMessagesList from '../components/ValidationMessages';
import SubmitInformation from '../components/SubmitInformation';
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
      <div className="form-container">
          <EventForm />
          <br/>
          <ValidationMessagesList />
      </div>
      <div className="information-container">
        <SubmitInformation />
      </div>
    </Provider>
  )
}