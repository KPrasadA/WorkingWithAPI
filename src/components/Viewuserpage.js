import React, { useState , useEffect } from 'react'
import { Card, Table, Container } from 'react-bootstrap'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Viewuserpage() {
  const {userId} =useParams()
  const[data,setData] = useState(undefined);

  const fetchData = async ()=>{
    const response = await axios.get("http://localhost:8000/users/" + userId);
    console.log(response.data);
    setData(response.data);
  }

  useEffect(() => {
   fetchData();
  
    
  }, [userId])
  if(data === undefined)
  {
    return <div>Loading</div>
  }
  return (
    <Container>
          <Card>
            <Table>
            <tbody >
                       <tr>
                          <td>ID</td>
                          <td>{userId}</td>
                        </tr>
                        <tr>
                          <td>Name</td>
                          <td>{data.name}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>{data.email}</td>
                        </tr>
                        <tr>
                          <td>Age</td>
                          <td>{data.age}</td>
                        </tr>
                        <tr>
                          <td>Premium Member</td>
                          <td>{data.premiumMember ? 'Yes':'No'}</td>
                        </tr>
                  </tbody>
            </Table>
          </Card>
  </Container>
  )
}

export default Viewuserpage