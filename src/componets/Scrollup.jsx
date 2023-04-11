import React from 'react';
import './Scrollup.css'
import { NavLink } from 'react-router-dom';

export default function Scrollup() {
  return (
    <>
      <a href="home">
      <div  className='scrollUp btn btn-warning'>
          <i  className="fa-solid fa-arrow-up"></i>
          
      </div>
      </a>
    </>
  )
}
