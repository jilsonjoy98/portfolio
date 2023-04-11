import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Qualification.css'

export default function Qualification() {
  return (
    <>
      <div  className='text-center mt-5'>
        <h1 style={{fontWeight:'bold', fontSize:'50px'}} >Qualification</h1>
        <h5>My Personel journey</h5>
      </div>
      <div>
        <Container>
         
          <Row>
            <Col md={6} className='mt-5 '>
            <div className='spaceBox'>
              <h2><i class="fa-solid fa-briefcase"></i> Experience</h2>
              <div className='qbox mt-3'>
                <h4>MEA(R)N Stack Developer</h4>
                <h5>Luminar Technolab Ernakulam</h5>
                <p>Completed an Internship as Full Stack Developer at Luminar Technolab, Kochi.</p>
                <p>2022-2023</p>
              </div>
            </div>
            </Col>
            <Col md={6} className='mt-5'>
            <div className='spaceBox1'>
              <h2><i class="fa-solid fa-graduation-cap"></i> Education</h2>
              <div className='qbox mt-3'>
                <h4>Diploma in Computer Engineering</h4>
                <h5>K Karunakaran Memorial Model Polytechnic College Mala</h5>
                <br></br>
                <p>2019-2022</p>
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      <div id='Portfolio'></div>
      </div>
    </>
  )
}
