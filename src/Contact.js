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
         
        <div style={{ width: `${100}%`, display: null, opacity: 100, textAlign: 'center'}} >
    
          
               {/* <div className="contact-href-container">
                    <p className="github-container"><a href="https://github.com/ColinWeaver"> GitHub</a> <span className="github-hover-message">{'   -'} Check out my GitHub profile!</span></p>
                    <p className="linkedin-container"> <a href="https://www.linkedin.com/in/colin-weaver-969505217/"> LinkedIn </a><span className="linkedin-hover-message">{'   -'} Check out my LinkedIn and feel free to reach out!</span></p>
                    <p className="email-container"> <a href="mailto:composerman11@gmail.com"> composerman11@gmail.com</a> <span className="email-hover-message"> {'   -'} Email me!</span></p>
                    <p className="phone-container"><a href="tel:6154385452">615-438-5452</a><span className="phone-hover-message">{'   -'} Give Me a call or send me a text!</span></p>
               </div> */}

               <div className="contact-href-container">
                    <p><a href="https://github.com/ColinWeaver"> GitHub</a></p>
                    <p> <a href="https://www.linkedin.com/in/colin-weaver-969505217/"> LinkedIn </a></p>
                    <p> <a href="mailto:composerman11@gmail.com"> composerman11@gmail.com</a></p>
                    <p><a href="tel:6154385452">615-438-5452</a></p>
               </div>
         
        </div>
        
        </>
    )
}

export default Contact;