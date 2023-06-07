import React, { useState } from 'react';
import { Card , Form, Container, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Adduser() {
 const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [preimiumMember, setpreimiumMember] = useState(false);
  const submitUserData = async(event)=>{

    event.preventDefault();

   const response = await axios.post(
      'http://localhost:8000/users',
      {
        name : name,
        email : email,
        age: parseInt(age),
        preimiumMember : preimiumMember
      }
    )
    // console.log(response.data);
    const id =response.data.id;
    navigate('/users/'+id);
   

  }
  return (
    <Container>
        <Card>
            <Form onSubmit={submitUserData}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" required value={name} onChange={(event)=>setName(event.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required value={email} onChange={(event)=>setEmail(event.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter your age" required value={age} onChange={(event)=>setAge(event.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Premium Member"  checked={preimiumMember} onChange={()=>setpreimiumMember(!preimiumMember)} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
        </Card>
    </Container>
   
  )
}

export default Adduser