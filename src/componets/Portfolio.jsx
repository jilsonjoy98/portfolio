import React from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Portfolio.css';
import works from './project.json'

export default function Portfolio() {
  return (
    <>
    <div  className='text-center mt-5'>
        <h1 style={{fontWeight:'bold', fontSize:'50px', marginTop:'90px'}} >Portfolio</h1>
        <h5>Most recent work</h5>
      </div>
      <div></div>
    {
      works.map(work=>{
        return(
      <Container className='boxside'>
            <Row style={{ borderRadius:'20px', padding:'16px', backgroundColor:'whitesmoke'}} className=' mt-5'>
                <Col lg={6} md={6}>     
                          <img  style={{width:'100%',borderRadius:'15px'}} src={work.pic}alt={work.Title} />     
               </Col>
                <Col lg={6} md={6}>
                <h3 className=' mt-2' style={{textAlign:'center'}}>{work.Title}</h3>
                <p className='mt-3'>
                 {work.disp}   
                </p>
                <div className='btbox' style={{display:'flex',alignItems:'center',justifyContent:'center', justifyContent:'space-evenly' }}>
                   <a href={work.Git} target='_blank'> <button className='btn btn-dark'><i class="fa-brands fa-github"></i> Code</button></a>
                    <a href={work.youtube} target='_blank'><button className='btn btn-danger'><i class="fa-brands fa-youtube"></i> Youtube</button></a>
                </div>
                </Col>
            </Row>
        
    </Container>
        )
    })
    }
    </>
  )
}
