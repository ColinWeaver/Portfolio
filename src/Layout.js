import React from "react";
import Main from "./Main";
import Navigation from "./Navigation";
import {Link} from "react-router-dom"


function Layout() {

  function externalLinkHandler(event){
    if (event.target.id === 'GitHub') {
      window.open("https://github.com/ColinWeaver", 'blank');
    }
    else if (event.target.id === 'LinkedIn'){
     window.open("https://www.linkedin.com/in/colin-james-weaver/", 'blank');
    }
  }



   return  (
    <div className="image">
      <div className="layout" id="external-link">
        
        <header>
          <div className='header-title'>
          <Link to="/">
          <h3 style={{ color: null}}>Colin Weaver <span style={{fontWeight: '500', boxShadow: '5px 5px 5px black', padding: '5px', borderRadius: '5px'}}>- Web Developer</span></h3>
          </Link>
          <hr style={{width: '25%', borderTop: '1px solid #393a44', borderBottom: '0px'}}/>
          </div>
          <Navigation/>
          
          </header>

         <main>
         
         <Main externalLinkHandler={externalLinkHandler}/>
         <hr style={{width: '300px', borderTop: '1px solid grey', borderBottom: '0px'}}/>
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
