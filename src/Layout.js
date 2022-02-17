import React, {useState} from "react";
import Main from "./Main";
import Header from "./Header";

function Layout() {
const [position, setPosition] = useState('absolute');
  //--------------------------------------------------------------EXTERNAL LINK HANDLER--------------------------------------------------------------------
  function externalLinkHandler(event){
    if (event.target.id === 'GitHub') {
      window.open("https://github.com/ColinWeaver", 'blank');
    }
    else if (event.target.id === 'LinkedIn'){
     window.open("https://www.linkedin.com/in/colinweaverdeveloper/", 'blank');
    }
    else if (event.target.id === 'reservations'){
      window.open("http://reservations-front-end.herokuapp.com/dashboard", 'blank')
    }
    else if (event.target.id === 'README'){
      window.open("https://github.com/ColinWeaver/Reservations#readme", 'blank')
    }
  }

//--------------------------------------------------------------COMPONENT MAIN RENDER RETURN--------------------------------------------------------------------
   return  (
    <div className="image">
      <div className="layout" id="external-link">
        <Header position={position}/>

         <main style={{paddingBottom: null}}>
         
         <Main externalLinkHandler={externalLinkHandler} setPosition={setPosition} position={position}/>
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
