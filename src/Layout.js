import React from "react";
import Main from "./Main";



function Layout() {
  
  
  return (
      <div className="layout">
        <header>
          <div>
          <h3 style={{ color: 'white'}}>Colin Weaver</h3>
          <h5 style={{color: 'white' }}>Web Developer</h5>
          </div>
          </header>
          <div className="main">
         <Main/>
         </div>
      </div>
   
  );
  
}

export default Layout;
