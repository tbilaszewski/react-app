import React from 'react';
import { render } from 'react-dom';
import EventForm from '.';

describe('<EventForm />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<EventForm />, div);
  });
});
