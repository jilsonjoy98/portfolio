import React from 'react';
import './Home.css';
import profile from '../images/profile.jpg';

export default function Home() {
  return (
   <div className='back_g'>
     
        <div id='home' style={{alignItems:'center',justifyContent:'center'}}  className='home_box d-flex container '>
            <div className='box_t' >
                <h1>Hi There, <i style={{color:'orange'}} className="hand fa-solid fa-hand" ></i></h1>
               <h1>I'm <span style={{color:'orange'}}>Jilson Joy</span></h1>
               <h1>Web Developer</h1>

            </div>
            <div>
            <img className='box_a' src={profile} alt="profile pic" />

            </div >
        </div >
        <div id='About'></div>
   </div>
  )
}
