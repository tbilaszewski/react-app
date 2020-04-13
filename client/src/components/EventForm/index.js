import React, { useRef } from 'react'
import { Form, Button } from 'react-bootstrap';
import { addSubmitState, addValidationMessage, removeValidationMessage, addToFilledList, removeFromFilledList } from '../../actions';

import { store } from '../../App';
import axios from 'axios';

export default function EventForm() {

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const dateRef = useRef();

  function validateFirstName() {
    return validateRequiredField(firstNameRef,'First name');
  }
  function validateLastName() {
    return validateRequiredField(lastNameRef,'Last name');
  }
  function validateEmail() {
    return validateRequiredEmailField(emailRef, 'Email address');
  }
  function validateDate() {
    return validateRequiredField(dateRef,'Date');
  }

  function saveData() {
    const { validationMessages, filledFields } = store.getState();
    
    if (validationMessages.length || filledFields.length !== 4) {
      alert('You have to fill all fields properly!');
    } else {
      const payload = {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        date: String(dateRef.current.value),
      };
      
      axios({
        url: 'http://localhost:3001/events',
        method: 'POST',
        data: payload
      })
      .then((response) => {
        addSubmitState({
          submitted: true,
          code: 'OK',
          description: 'ok'
        })
      }).catch((error) => {
        addSubmitState({
          submitted: true,
          code: 'ERROR',
          description: String(error)
        })
      });
    }
  }
  
  return (
    <Form>
      <InputField id="formFirstName" label="First name" reference={firstNameRef} onChange={validateFirstName} />
      <InputField id="formLastName" label="Last name" reference={lastNameRef} onChange={validateLastName} />
      <InputField id="formBasicEmail" label="Email address" type="email" reference={emailRef} onChange={validateEmail} />
      <InputField id="formDate" label="Date" type="date" reference={dateRef} onChange={validateDate} />
      <SubmitButton onClick={saveData} />
    </Form>
  )
}

function InputField({ id, label, type = 'text', validationClass = '', reference, onChange }) {
  return (
    <Form.Group controlId={id} onChange={onChange}>
      <Form.Label>{label}</Form.Label>
      <Form.Control className={`form-control ${validationClass}`} ref={reference} type={type} />
    </Form.Group>
  )
}

function SubmitButton({ onClick }) {
  return (
    <Button variant="primary" onClick={onClick} >
      Submit
    </Button>
  )
}

function isEmail(email) {
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return email.match(emailRegex);
}

function validateRequiredField(reference, fieldName) {
  const { value, id, classList } = reference.current;
  if (value.trim() === '') {
    removeFromFilledList(id);
    addValidationMessage(id,`${fieldName} must not be empty`);
    classList.remove('is-valid');
    classList.add('is-invalid');
  }
  else {
    addToFilledList(id);
    removeValidationMessage(id);
    classList.remove('is-invalid');
    classList.add('is-valid');
  }
}

function validateEmailField(reference, fieldName) {
  const { value, classList } = reference.current;
  let { id } = reference.current;
  id = id + '_valid';
  if (!isEmail(value)) {
    addValidationMessage(id,`${fieldName} must be valid email`);
    classList.remove('is-valid');
    classList.add('is-invalid');
  }
  else {
    removeValidationMessage(id);
    classList.remove('is-invalid');
    classList.add('is-valid');
  }
}

function validateRequiredEmailField(reference, fieldName) {
  validateRequiredField(reference, fieldName);
  validateEmailField(reference, fieldName);
}

