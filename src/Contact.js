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

        <div id="external-link" style={{textAlign: 'center', width: '100%', color: null, backgroundColor: '#E0E0E0', paddingBottom: '0px', paddingTop: '1px'}}>
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
               
               <p style={{marginLeft: '0px'}} id="GitHub" onClick={externalLinkHandler}>
               <a href="#external-link"><i>GitHub</i>
              </a></p>

              
            
               <p style={{marginLeft: '0px'}} id="LinkedIn" onClick={externalLinkHandler}>
                  <a href="#external-link">
                     <i>LinkedIn</i>
                 </a>
              </p>
                
         

              
               <p style={{marginLeft: '0px'}}>
                 <a href="tel:6154385452">
                 <i>615-438-5452</i>
                 </a>
              </p>
              

             
               <p style={{marginLeft: '0px'}}>
               <a href="mailto:composerman11@gmail.com">
                 <i>Composerman11@gmail.com</i>
               </a>
               </p>

             
               </div>


               </div>
              
        </div>

        
        </>
    )
}

export default Contact;