import React from "react";
import { Link}  from 'react-router-dom'

function Contact(){
    window.scrollTo(0,0);
    
    return (
        <>
          <div style={{ width: `${100}%`, opacity: 100, display: null}} >

        <div style={{textAlign: 'center', width: '100%', color: null}}>
        <h2>Contact Me</h2>
       </div>




        <Link to={'/projects'} style={{ textDecoration: 'none' }}>
        <div className="arrow-container-left">
             <div className='arrow'>{'<'}</div>
          </div>
        </Link> 


         
      
                <div className="href-container-container">
               <div className="contact-href-container">
                    <p><a href="https://github.com/ColinWeaver"> <span className="contact-type">GitHub </span><span className="hidden"> https://github.com/ColinWeaver </span></a></p>
                    <p><a href="https://www.linkedin.com/in/colin-james-weaver/"> <span className="contact-type">LinkedIn</span> <span className="hidden"> www.linkedin.com/in/colin-james-weaver</span></a></p>
                    <p><a href="mailto:composerman11@gmail.com"> <span className="contact-type">Email </span><span className="hidden"> composerman11@gmail.com </span></a></p>
                    <p><a href="tel:6154385452"><span className="contact-type">Phone </span><span className="hidden">154385452 </span></a></p>
                    

               </div>
               </div>
         
        </div>
        
        </>
    )
}

export default Contact;