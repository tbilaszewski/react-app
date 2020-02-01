import { combineReducers } from 'redux'
import validationMessages from './validations'
import filledFields from './filledFields'

export default combineReducers({
  validationMessages,
  filledFields
})