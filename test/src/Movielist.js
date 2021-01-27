import React , {useState} from "react";
import Cardd from "./Moviecard";
import {Form} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
function List() {
   const [Name,setName]=useState("")
   const [desc,setDesc]=useState("")
   const [Rate,setRate]=useState("")
   const [movies,setMovies]=useState([{title:"les misérables" , desc:"hhhhhh" , rate:"★★★★★" , src:"mise.jpg"},{title:"les misérables" , desc:"hhhhhh" , rate:"★★★★★" , src:"mise.jpg"},{title:"les misérables" , desc:"hhhhhh" , rate:"★★★★★" , src:"mise.jpg"}])
   const [newmovie,setNewmovie]=useState({name:"",descc:"",rate:"" , image:""})
   const Handlechange = (event) =>{
     setNewmovie({ [event.target.name]: event.target.value })
   };
   const Add = () =>{
      let newElement={
         title:newmovie.name,
         desc:newmovie.descc,
         src:newmovie.image,
         rate:"★★★★★"
      }
      setMovies(oldArray => [...oldArray, newElement]);
    };
 
   return(
<div>
   <div style={{ display: "flex" , justifyContent:"space-around" }}>
     {movies.map( e => <Cardd description={e.desc} rate={e.rate} src={e.src}>{e.title}</Cardd>)}
   </div>
    <div style={{ width: 110 , marginLeft:10 }}>
     <Form>
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label >title</Form.Label>
      <Form.Control as="textarea" rows={3}  name="name" onChange={Handlechange}/>
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>description</Form.Label>
      <Form.Control as="textarea" rows={3} name="descc" onChange={Handlechange} />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>rate</Form.Label>
      <Form.Control as="textarea" rows={3} name="rate" onChange={Handlechange} />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>image</Form.Label>
      <Form.Control as="textarea" rows={3} name="image" onChange={Handlechange} />
    </Form.Group>
    <Button variant="primary" onClick={Add}>Add</Button>{' '}
  </Form>
  </div>
</div>

   );
}

export default List;