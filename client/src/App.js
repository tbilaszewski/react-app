import React from 'react';

import EventForm from './EventForm'
import ValidationMessagesList from './ValidationMessagesList'


import './App.css'

export default function App() {
  return (
    <div class="form-container">
        <EventForm />
        <br/>
        <ValidationMessagesList />
    </div>
  )
}