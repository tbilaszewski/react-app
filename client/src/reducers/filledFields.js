const filledFields = (state = [], {fieldName, type}) => {
  switch (type) {
    case 'ADD':
      if (state.includes(fieldName)) {
        return state;
      } else {
        return [...state, fieldName];
      }
    case 'REMOVE':
      return state.filter((name) => {
        return name !== fieldName;
      });
    default:
      return state
  }
}

export default filledFields;
