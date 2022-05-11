import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const navigate=useNavigate()
    const [user]=useAuthState(auth)
    const handleSignout=() =>{
      signOut(auth)
      navigate('/login')
    }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">Smart Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav>
    <Nav.Link  as={Link} to={'/'}> Home</Nav.Link>
      {
        user? 
        <>
         <Nav.Link  as={Link} to={'/manageinventory'}> Manage Items</Nav.Link>
        <Nav.Link  as={Link} to={'/'}>  My Items</Nav.Link>
        <Nav.Link  as={Link} to={'/addItems'}> Add Items</Nav.Link>
        <Nav.Link onClick={handleSignout} > SignOut</Nav.Link>
        </>
        :
        <Nav.Link  as={Link} to={'/login'}> Log in</Nav.Link>
      }
       <Nav.Link  as={Link} to={'/blogs'}> Blogs</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    
  );
};

export default Header;