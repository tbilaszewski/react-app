import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

import { ListGroup } from "react-bootstrap";

import ValidationMessages from '../ValidationMessages';

const mockStore = configureStore([]);


describe('<ValidationMessages /> initial state', () => {
  
let store = mockStore({
    validationMessages: [], 
    filledFields: [],
    submitState : {
      submitted: false
    }
  });

  let component = mount(
    <Provider store={store}>
      <ValidationMessages />
    </Provider>
  );

  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <ValidationMessages />
      </Provider>
    );
  });

  it('contains no SubmitInformation length', () => {
    expect(component.find(ListGroup.Item)).toHaveLength(0);
  });
  
});

describe('<ValidationMessages /> all fields not correct', () => {
  
  let store = mockStore({
      validationMessages: [{
        text: 'First name must not be empty',
        id: 'formFirstName'
      },
      {
        text: 'Last name must not be empty',
        id: 'formLastName'
      },
      {
        text: 'Email must not be empty',
        id: 'formBasicEmail'
      },
      {
        text: 'Date must not be empty',
        id: 'formDate'
      }
      ,
      {
        text: 'Email must be valid',
        id: 'formBasicEmail_valid'
      }], 
      filledFields: [],
      submitState : {
        submitted: false
      }
    });

  let component = mount(
      <Provider store={store}>
        <ValidationMessages />
      </Provider>
    );

  it('contains no SubmitInformation length', () => {
    expect(component.find(ListGroup.Item)).toHaveLength(5);
  });
  
});
