import axios from "axios";
import { useState } from "react";
import React ,{ useEffect} from 'react';
import { Container , Form , Button, Card } from "react-bootstrap";
import { useNavigate, useParams} from "react-router-dom";



function Edituserpage() {
 const navigate = useNavigate();
  const {userId} =useParams()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [premiumMember, setpremiumMember] = useState(false);
  const fetchData = async ()=>{
    const response = await axios.get("http://localhost:8000/users/" + userId);
    console.log(response.data);
     const user = response.data
        setName(user.name);
        setEmail(user.email);
        setAge(user.age);
        setpremiumMember(user.preimiumMember);
  }

  useEffect(() => {fetchData();}, [userId])
 
  const updateUserData = async(event)=>{

    event.preventDefault();

   const res = await axios.patch(
      'http://localhost:8000/users/'+ userId,
      {
        name : name,
        email : email,
        age: parseInt(age),
        premiumMember : premiumMember
      }
    )
   const id = res.data.id;
   navigate('/users/'+ id);

  }
 
  return (
    <Container>
    <Card>
        <Form onSubmit={updateUserData} >
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
            <Form.Check type="checkbox" label="Premium Member"  checked={premiumMember} onChange={()=>setpremiumMember(!premiumMember)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    </Card>
</Container>

  )
}

export default Edituserpage