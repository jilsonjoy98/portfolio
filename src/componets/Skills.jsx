import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Skills.css'
export default function Skills() {
  return (
 

    <div>
             <div   className='text-center mt-5 '>
                    <h1 style={{fontWeight:'bold', fontSize:'50px',marginTop:'90px' }}>Skills</h1>
                    <h5>My technical level</h5>
             </div>
             <div style={{alignItems:'center', justifyContent:'center', marginTop:'30px'}} className='d-flex '>
                <div className='skill_box' style={{border:'1px solid black', borderRadius:'20px'}}>
                <h5 className=' text-center mt-2 mb-2' >Frontend developer</h5>
                        <div className='row text_font' style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                             <ul className='col-6 ' style={{listStyle:'none'}} >
                                     <li><i class="fa-solid fa-circle-check"></i> HTML</li>
                                      <li><i class="fa-solid fa-circle-check"></i> CSS</li>
                                      <li><i class="fa-solid fa-circle-check"></i> JavaScript</li>
                                     <li><i class="fa-solid fa-circle-check"></i> Bootstrap</li>
                                  
                                  
                            </ul>

                            <ul className='col-6' style={{listStyle:'none', textAlign:'left'}}>
                                 <li> <i class="fa-solid fa-circle-check"></i> React</li>
                                  <li><i class="fa-solid fa-circle-check"></i> Angular</li>
                                 <li><i class="fa-solid fa-circle-check"></i> Git</li>
        
                            </ul>    

                        </div>

                        
                </div>

                <div className='skill_box' style={{border:'1px solid black', borderRadius:'20px'}}>
                <h5 className='text-center mt-2 mb-2'>Backend developer</h5>
                         <div className='row text_font ' style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                             <ul className='text_font col' style={{listStyle:'none'}} >
                                     <li><i class="fa-solid fa-circle-check"></i> Node JS</li>
                                      <li><i class="fa-solid fa-circle-check"></i> Express JS</li> 
                                
                            </ul>

                            <ul className='text_font col' style={{listStyle:'none', textAlign:'left'}}>
                                 <li> <i class="fa-solid fa-circle-check"></i> MongoDB</li>
                                        
                            </ul>    

                        </div>
                </div>
             </div>
    </div>
   
  )
}
