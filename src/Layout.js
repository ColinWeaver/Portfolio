import React, {useState} from "react";
import Main from "./Main";
import Navigation from "./Navigation";
import {Link} from "react-router-dom"


function Layout() {
const [position, setPosition] = useState('absolute');
  //--------------------------------------------------------------EXTERNAL LINK HANDLER--------------------------------------------------------------------
  function externalLinkHandler(event){
    if (event.target.id === 'GitHub') {
      window.open("https://github.com/ColinWeaver", 'blank');
    }
    else if (event.target.id === 'LinkedIn'){
     window.open("https://www.linkedin.com/in/colin-james-weaver/", 'blank');
    }
    else if (event.target.id === 'reservations'){
      window.open("http://reservations-front-end.herokuapp.com/dashboard", 'blank')
    }
    else if (event.target.id === 'README'){
      window.open("https://github.com/ColinWeaver/Reservations#readme", 'blank')
    }
  }
console.log('position test', position)
//--------------------------------------------------------------COMPONENT MAIN RENDER RETURN--------------------------------------------------------------------
   return  (
    <div className="image">
      <div className="layout" id="external-link">
        
        <header style={{position: `${position}`}}>
          <div className='header-title'>
          <Link to="/">
          <h3 style={{ color: null}}>Colin Weaver <span style={{fontWeight: '500', boxShadow: '5px 5px 5px black', padding: '5px', borderRadius: '5px'}}>- Web Developer</span></h3>
          </Link>
          <hr style={{width: '25%', borderTop: '1px solid grey', borderBottom: '0px'}}/>
          </div>
          <Navigation/>
          
          </header>

         <main style={{paddingBottom: null}}>
         
         <Main externalLinkHandler={externalLinkHandler} setPosition={setPosition}/>
         <div style={{marginBottom: '80px', marginTop: '150px'}}>
         <hr style={{width: '250px', borderTop: '1px solid grey', borderBottom: '0px'}}/>
         </div>
         </main>

         <footer>
           <p>
           <a href="#external-link" onClick={externalLinkHandler} id="GitHub"> GitHub </a>
           </p>
          
           <p>
           <a href="#external-Link" onClick={externalLinkHandler} id="LinkedIn"> LinkedIn</a>
           </p>

           <p>
            <a href="tel:6154385452">Phone</a>
           </p>

           <p>
           <a href="mailto:composerman11@gmail.com"> Email </a>
           </p>
          
         </footer>
        
      </div>
    </div>
  );
          
}

export default Layout;
