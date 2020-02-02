
import React from 'react'
import { ListGroup } from "react-bootstrap";
import { connect } from 'react-redux';

function ValidationMessagesList( { validationMessages }) {
  validationMessages = validationMessages ?? [];
  return (
    <ListGroup>{
      validationMessages.map(({ text }) => {
        return (
          <ListGroup.Item variant="warning">{text}</ListGroup.Item>
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

