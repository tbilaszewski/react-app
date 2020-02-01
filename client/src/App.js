import React from 'react';

import EventForm from './EventForm';
import ValidationMessagesList from './ValidationMessagesList';
import Submitinformation from './SubmitInformation';


import './App.css'

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