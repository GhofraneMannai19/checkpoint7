import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

function Cardd(props) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.src}/>
  <Card.Body>
    <Card.Title>{props.children}</Card.Title>
    <Card.Text>
       {props.description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{props.rate}</ListGroupItem>
  </ListGroup>
</Card>  
    </div>
  );
}

export default Cardd;
