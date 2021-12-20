import React from "react";
import { Link}  from 'react-router-dom'

function Contact(){
    window.scrollTo(0,0);
    
    return (
        <>
        <div style={{textAlign: 'center', width: '100%', color: null}}>
        <h2>Contact Me</h2>
        
       </div>

        <Link to={'/projects'} style={{ textDecoration: 'none' }}>
        <div className="arrow-container-left">
             <div className='arrow'>{'<'}</div>
          </div>
        </Link> 
         
        <div style={{ width: `${100}%`, display: null, opacity: 100, textAlign: 'center', marginLeft: '20px'}} >

               <div className="contact-href-container" >
                    <p style={{lineHeight: '25px'}}><a href="https://github.com/ColinWeaver"> GitHub</a></p>
                    <p style={{lineHeight: '25px'}}> <a href="https://www.linkedin.com/in/colin-weaver-969505217/"> LinkedIn</a></p>
                    <p style={{lineHeight: '25px'}}> <a href="mailto:composerman11@gmail.com"> Email</a></p>
                    <p style={{lineHeight: '25px'}}><a href="tel:6154385452">Phone</a></p>
                    
               </div>
         
        </div>
        
        </>
    )
}

export default Contact;