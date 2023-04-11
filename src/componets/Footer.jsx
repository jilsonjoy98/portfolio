import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div  className='footer text-center mt-5'>
        <h1 id='Contact' className='mt-2'>Contact Me</h1>
        <div className='footer_icon mt-4 mb-5'>
            <a href='https://www.linkedin.com/in/jilsonjoy98' target='_blank' ><span><i className="fa-brands fa-linkedin fa-2xl me-4"></i></span></a>
            <a href='https://github.com/jilsonjoy98' target='_blank' ><span><i className="fa-brands fa-github fa-2xl me-4"></i></span></a>
            <a href='https://twitter.com/jilsonjoy98' target='_blank'><span><i className="fa-brands fa-twitter fa-2xl me-4"></i></span></a>
           <a href='https://www.instagram.com/jilsonjoy98/' target='_blank'> <span><i className="fa-brands fa-instagram fa-2xl "></i></span></a>
        </div>
    </div>
  )
}
