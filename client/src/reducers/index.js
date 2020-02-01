import { combineReducers } from 'redux';
import validationMessages from './validations';
import filledFields from './filledFields';
import submitState from './submitState';

export default combineReducers({
  validationMessages,
  filledFields,
  submitState
})