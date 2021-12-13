import React from "react";
import Main from "./Main";
import Navigation from "./Navigation";
import {Link, Route, Routes} from "react-router-dom"
import Projects from "./Projects";
import Contact from "./Contact";

function Layout() {
  
  //force re render if address changes 
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
          <Routes>
            
          <Route exact path="/" element={<Main/>}/>
          <Route path="/about" element={<Main/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          
          </Routes>
        
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
