import React from 'react';

import EventForm from '../components/EventForm';
import ValidationMessagesList from '../components/ValidationMessages';
import Submitinformation from '../components/SubmitInformation';


import './App.css';

export default function App() {

  return (
    <>
      <div class="form-container">
          <EventForm />
          <br/>
          <ValidationMessagesList />
      </div>
      <div class="information-container">
        <Submitinformation />
      </div>
    </>
  )
}