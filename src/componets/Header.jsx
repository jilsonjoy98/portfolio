import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

export default function Header() {
  return (
    
         <Navbar className='navbox fixed-top' bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#home" style={{fontSize:30}} ><b>Jilson Joy</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbox1' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{fontWeight:'bold', color:'black', justifyContent:'space-between'}} className=" ms-auto ">
            <Nav.Link href="#home" className='navbox2' >Home</Nav.Link>
            <Nav.Link href="#About" className='navbox2' >About</Nav.Link>
            <Nav.Link href="#skills" className='navbox2'>Skills</Nav.Link>
            <Nav.Link href="#Portfolio" className='navbox2'>Portfolio</Nav.Link>
            <Nav.Link href="#Contact" className='navbox2'>Contact</Nav.Link>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  )
}
