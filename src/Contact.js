import React from "react";
import { Link}  from 'react-router-dom'

function Contact(){
    window.scrollTo(0,0);
    
    return (
        <>
        <div style={{textAlign: 'center', width: '100%', color: null}}>
        <h2>Contact Me</h2>
         <span> Please don't hesitate to reach out. </span>
         {/* <p>I would feel honored to hear from you.</p> */}
       </div>

        <Link to={'/projects'} style={{ textDecoration: 'none' }}>
        <div className='arrow'>{'<'}</div>
        </Link> 
         
        <div style={{ width: `${100}%`, display: null, opacity: 100, textAlign: 'center'}} >
    
          
               <div className="contact-href-container">
                   <p> <a href="https://github.com/ColinWeaver"> GitHub </a></p>
                    <p> <a href="https://www.linkedin.com/in/colin-weaver-969505217/"> LinkedIn</a></p>
                    <p> <a href="mailto:composerman11@gmail.com"> composerman11@gmail.com </a></p>
                    <p><a href="tel:6154385452">615-438-5452</a></p>
               </div>
         
        </div>
        
        </>
    )
}

export default Contact;