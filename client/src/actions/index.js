import  {store} from '../index';

export function addValidationMessage(id, text) {
  store.dispatch({
      type: 'ADD_ERROR',
      text: text,
      id
    });
}
export function removeValidationMessage(id) {
  store.dispatch({
      type: 'REMOVE_ERROR',
      id
    });
}

export function addToFilledList(fieldName) {
  store.dispatch({
    type: 'ADD',
    fieldName
  });
}

export function removeFromFilledList(fieldName) {
  store.dispatch({
    type: 'REMOVE',
    fieldName
  });
}
