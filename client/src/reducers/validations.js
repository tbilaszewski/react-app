const validationErrors = (state, action) => {
  if (!state) {
    state = [];
  }
  switch (action.type) {
    case 'ADD_ERROR':
      const duplicate = state.filter((el) => {
        return el.id === action.id;
      });
      if (duplicate.length > 0) {
        return state;
      } else {
        return [...state, {
          text: action.text,
          id: action.id
        }];
      }
    case 'REMOVE_ERROR':
      return state.filter((el) => {
        return el.id !== action.id;
      });
    default:
      return state
  }
}

export default validationErrors;
