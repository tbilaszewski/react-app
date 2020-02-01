const filledFields = (state, {fieldname, type}) => {
  if (!state) {
    state = [];
  }
  switch (type) {
    case 'ADD':
      if (state.includes(fieldname)) {
        return state;
      } else {
        return [...state, fieldname];
      }
    case 'REMOVE':
      return state.filter((name) => {
        return name !== fieldname;
      });
    default:
      return state
  }
}

export default filledFields;
