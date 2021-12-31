import React, {useEffect} from "react";
import { Link}  from 'react-router-dom'

function Contact(){

  
    /* TODO: add "Link" around other links so mouse treats text like a link and route back to this page */
  

    useEffect(() => {
      window.scrollTo(0,0);
  }, []) 



    function contactHandler(event){
     if (event.target.id === 'GitHub') {
       window.open("https://github.com/ColinWeaver", 'blank');
     }
     else if (event.target.id === 'LinkedIn'){
      window.open("https://www.linkedin.com/in/colin-james-weaver/", 'blank');
     }
     else if (event.target.id === 'Email'){
      window.open("mailto:composerman11@gmail.com", 'blank');
     }
     else {
      window.open("tel:6154385452", 'blank');
     }
    }
    


    return (
        <>
          <div style={{ width: `${100}%`, opacity: 100, display: null, marginBottom: '300px'}} >

        <div style={{textAlign: 'center', width: '100%', color: null, top: '118px', marginTop: '5%', marginBottom: '10%', backgroundColor: '#E0E0E0', paddingBottom: '0px', paddingTop: '1px'}}>
        <h2>Contact Me</h2>
        <hr style={{width: '250px', height: '0px', border: '1px solid grey', backgroundColor: 'grey'}}/>
        </div>
     

        <Link to={'/projects'} style={{ textDecoration: 'none' }}>
        <div className="arrow-container-left">
             <div className='arrow'>{'<'}</div>
          </div>
        </Link> 

               <div className="href-container-container">
               <div className="contact-href-container">
               <Link to="/contact">
               <p style={{marginLeft: '0px'}}id="GitHub" onClick={contactHandler}><i>GitHub</i></p>
               </Link>

              
               <p style={{marginLeft: '50px'}}id="LinkedIn" onClick={contactHandler}><i>LinkedIn</i></p>
               <p style={{marginLeft: '100px'}}id="Email" onClick={contactHandler}><i>Email</i></p>
               <p style={{marginLeft: '150px'}}id="Phone" onClick={contactHandler}><i>Phone</i></p>
                    

               </div>
               </div>
         
        </div>
        
        </>
    )
}

export default Contact;