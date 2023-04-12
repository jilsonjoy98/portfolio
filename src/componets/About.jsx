import React from 'react';
import profile from '../images/profile.jpg';
import jilson from '../images/Jilson.pdf'
import { Col, Container, Row, Button } from 'react-bootstrap';
import './About.css';

export default function About() {
  return (
    <div className='mb-5'>
      <Container   className='box '>
          <h1 style={{fontWeight:'bold', fontSize:'50px'}}>About Me</h1>
          <Row className='mt-5'>
              <Col md={6}  className='box_1 '>
              <img
               src={profile}
               alt="profile pic"/>
              </Col>
              <Col md={6}  className='box_2'>
              <p>
                  Hi there, I'm Jilson Joy. A full stack web developer, having specialization in back end & front end development. I enjoy taking complex problems & turning them into simple. I also love the structure of coding and write efficient code.
              </p>
              <a href={jilson} target='_blank'>
              <Button variant="dark" className='mt-3 button_block'>Download CV 
              <i className="ms-2 fa-solid fa-file-lines"></i>
              </Button>{' '}
              </a>
              </Col>
          </Row>
              
         <div id='skills'></div>
      </Container>
    </div>
  )
}
