import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

import { ListGroup, Alert, Form } from "react-bootstrap";

import App from '.';
import EventForm from '../components/EventForm';
import SubmitInformation from '../components/SubmitInformation';
import ValidationMessages from '../components/ValidationMessages';
import thunk from 'redux-thunk';

const middlewares = [thunk];


const mockStore = configureStore(middlewares);

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


  it('contains no SubmitInformation length', () => {
    expect(app.find(Alert).at(0).prop('show')).toEqual(false);
  });
  
});
