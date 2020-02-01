
import React from 'react'
import { ListGroup } from "react-bootstrap";
import { connect } from 'react-redux';

function ValidationMessagesList( { validationMessages }) {
  validationMessages = validationMessages ?? [];
  return (
    <ListGroup>{
      validationMessages.map(({ text, id }) => {
        return (
          <ListGroup.Item>{text}</ListGroup.Item>
        )
      })
    }
    </ListGroup>
  ) 
}

function mapStateToProps(state) {
  return {
    validationMessages: state.validationMessages
  }
}
export default connect(mapStateToProps)(ValidationMessagesList);

