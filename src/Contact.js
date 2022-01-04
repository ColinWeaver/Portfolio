import React, {useEffect} from "react";
import { Link}  from 'react-router-dom'

function Contact({externalLinkHandler}){
    useEffect(() => {
      window.scrollTo(0,0);
  }, []) 


 //---------------------------------------------------------------------------MAIN COMPONENT RENDER RETURN--------------------------------------------------------------------------------
    

    return (
        <>
          <div style={{ width: `${100}%`, opacity: 100, display: null, marginBottom: '300px'}} >

        <div id="contact" style={{textAlign: 'center', width: '100%', color: null, backgroundColor: '#E0E0E0', paddingBottom: '0px', paddingTop: '1px'}}>
        <h2>Contact Me</h2>
        <hr style={{width: '250px', borderTop: '1px solid grey', borderBottom: '0px'}}/>
        </div>
     

        <Link to={'/projects'} style={{ textDecoration: 'none' }}>
        <div className="arrow-container-left">
             <div className='arrow'>{'<'}</div>
          </div>
        </Link> 


               <div className="href-container-container">
               <div className="contact-href-container" >
               <a href="#contact" >
               <p style={{marginLeft: '0px'}}id="GitHub" onClick={externalLinkHandler}><i>GitHub</i></p>
              </a>

              <a href="#contact">
               <p style={{marginLeft: '0px'}}id="LinkedIn" onClick={externalLinkHandler}><i>LinkedIn</i></p>
              </a>

              <a href="tel:6154385452">
               <p style={{marginLeft: '0px'}}><i>615-438-5452</i></p>
              </a>

              <a href="mailto:composerman11@gmail.com">
               <p style={{marginLeft: '0px'}}><i>Composerman11@gmail.com</i></p>
            </a>

             
               </div>


               </div>
              
        </div>

        
        </>
    )
}

export default Contact;