import React from 'react';
import { Navbar , Nav, Container, Stack } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from '../Home';
import Adduser from '../Adduser';
import './Header.css'
function Header() {
  return (
            <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href='/' >API Application</Navbar.Brand>
                           <Stack direction="horizontal" gap={3}>
                                <Nav className="mb-3" >
                                        
                                        <NavLink to='/' className='Navlink'>Home</NavLink>
                                        <NavLink to='/adduser' className='Navlink'>Add User</NavLink>
                                    </Nav>
                            </Stack> 
                            
                            
                </Container>
            </Navbar>  
        </div>
    )
  
}

export default Header