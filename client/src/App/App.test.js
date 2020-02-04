import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

import { Alert } from "react-bootstrap";

import App from '.';
import EventForm from '../components/EventForm';


const mockStore = configureStore([]);

it('renders without crashing', () => {
  shallow(<App />);
});


describe('<App /> initial state', () => {
  
  let store, app;

  beforeEach(() => {
    store = mockStore({
      validationMessages: [], 
      filledFields: [],
      submitState : {
        submitted: false
      }
    });

    app = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('contains <EventForm />', () => {
    expect(app.find(EventForm)).toHaveLength(1);
  });


  it('contains no SubmitInformation', () => {
    expect(app.find(Alert).at(0).prop('show')).toEqual(false);
  });
  
});
