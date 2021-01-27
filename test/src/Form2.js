import React from "react";
import Cardd from './Moviecard';
import {Form}from 'react-bootstrap';
import { Button }from 'react-bootstrap';
function Fform2(props) {
    function Search(){
        <>
        </>
      }
   return(
    <Form>
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>{props.title}</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label>{props.Rate}</Form.Label>
      <Form.Control as="select">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Button variant="primary" onClick={Search}>Search</Button>{' '}
  </Form>
   );
}

export default Fform2;