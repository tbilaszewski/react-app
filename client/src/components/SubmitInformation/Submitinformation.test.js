import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

import { Alert } from "react-bootstrap";

import SubmitInformation from '../SubmitInformation';

const mockStore = configureStore([]);


describe('<SubmitInformation /> initial state', () => {
  
let store = mockStore({
    validationMessages: [], 
    filledFields: [],
    submitState : {
      submitted: false
    }
  });

  let component = mount(
    <Provider store={store}>
      <SubmitInformation />
    </Provider>
  );

  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <SubmitInformation />
      </Provider>
    );
  });

  it('SubmitInformation not visible', () => {
    expect(component.find(Alert.Heading)).toHaveLength(0);
  });
  
});

describe('<ValidationMessages /> form submitted correctly', () => {
  
  let store = mockStore({
      validationMessages: [],
      filledFields: [],
      submitState : {
        submitted: true,
        description: 'Form submitted',
        code: 'OK'
      }
    });

  let component = mount(
      <Provider store={store}>
        <SubmitInformation />
      </Provider>
    );

  it('SubmitInformation visible', () => {
    expect(component.find(Alert.Heading)).toHaveLength(1);
  });
  
  it('SubmitInformation type', () => {
    expect(component.find(Alert).props().variant).toEqual('success');
  });

});

describe('<ValidationMessages /> form not submitted', () => {
  
  let store = mockStore({
      validationMessages: [],
      filledFields: [],
      submitState : {
        submitted: true,
        description: 'Form not submitted',
        code: 'ERROR'
      }
    });

  let component = mount(
      <Provider store={store}>
        <SubmitInformation />
      </Provider>
    );

  it('SubmitInformation visible', () => {
    expect(component.find(Alert.Heading)).toHaveLength(1);
  });

  it('SubmitInformation type', () => {
    expect(component.find(Alert).props().variant).toEqual('danger');
  });
  
});
