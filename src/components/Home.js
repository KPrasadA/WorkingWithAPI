import React ,{useState , useEffect} from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Home() {
    const[data,setData] = useState([]);

    const fetchData = async ()=>{
      const response = await axios.get("http://localhost:8000/users");
      setData(response.data);
    }

    useEffect(() => {
     fetchData();
    
      
    }, [])
    
    const deleteUser =(user)=>
    {
        axios.delete(
            "http://localhost:8000/users/"+user.id
        ).then(()=>{
            alert('Are you sure that you want to delete the data?');
            alert(`Deleted the user data of ${user.name}`);
            fetchData();
        })

    }

  return (
    <Container>
            <Table striped bordered hover >
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Action</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            data.map((user,index)=>
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>
                                    <Link to={'/users/'+user.id}>
                                        <Button variant='primary' size='sm'>View</Button>
                                    </Link>
                                    {' '}
                                    <Link to={`user/${user.id}/edit`}>
                                        <Button variant='info' size='sm'>Edit</Button>
                                    </Link>
                                    {' '}
                                    <Button variant='danger' size='sm' onClick={()=>{deleteUser(user)}}>Delete</Button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
            </Table>

        </Container>
    
  )
}

export default Home