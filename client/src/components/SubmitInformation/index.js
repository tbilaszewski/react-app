
import React from 'react'
import { Alert } from "react-bootstrap";
import { connect } from 'react-redux';

function SubmitInformation({ show, description, code }) {
  let header, variant;
  switch (code) {
    case 'ERROR':
      variant = 'danger';
      header = 'Something went wrong! Your form was not submitted';
      break;
    default:
      variant = 'success';
      header = 'Form submitted sucessfully';
  }

  return (
    <>
      <Alert show={show} variant={variant}>
        <Alert.Heading>{header}</Alert.Heading>
        {description && <p>{description}</p>}
        <hr />
      </Alert>
    </>
  );
}


function mapStateToProps(state) {
  return {
    show: state.submitState.submitted,
    description: state.submitState.description,
    code: state.submitState.code
  }
}
export default connect(mapStateToProps)(SubmitInformation);
