import React from 'react';
import { shallow } from 'enzyme';
import App from '.';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});