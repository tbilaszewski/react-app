const submit = (state = {}, {type, isSubmitted, code, description}) => {
  switch (type) {
    case 'SET_STATE':
      return {
        submitted: isSubmitted,
        code,
        description
      };
    default:
      return state
  }
}

export default submit;
