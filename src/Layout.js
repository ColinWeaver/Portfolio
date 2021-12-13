import React from "react";
import Main from "./Main";
import Navigation from "./Navigation";
import {Link} from "react-router-dom"

function Layout() {
  
  
  return (
    <div className="image">
      <div className="layout">
        
        <header>
          <div className='header-title'>
          <Link to="/">
          <h3 style={{ color: '#9BF6FF'}}>Colin Weaver <span style={{fontWeight: '500'}}>- Web Developer</span></h3>
          </Link>
        
          <Navigation/>
        
          </div>
          </header>

          <div className="main">
            
         <Main/>
         </div>
       
         <footer style={{color: 'white'}}>
         <a> GitHub </a>
           <a > Email </a>
           <a>LinkedIn</a>
         </footer>
        
      </div>
      </div>
   
  );
  
}

export default Layout;
