import React, { useEffect, useState } from "react";
import Main from "./Main";
import Navigation from "./Navigation";
import {Link, Routes, Route} from "react-router-dom"


function Layout() {

   return  (
    <div className="image">
      <div className="layout">
        
        <header>
          <div className='header-title'>
          <Link to="/">
          <h3 style={{ color: null}}>Colin Weaver <span style={{fontWeight: '500', boxShadow: '5px 5px 5px black', padding: '5px', borderRadius: '5px'}}>- Web Developer</span></h3>
          </Link>
          <hr style={{width:'40%', height: '1px', backgroundColor: 'black', marginTop: "0px", marginBottom: "0px", textAlign: 'center'}}/>
          </div>
          <Navigation/>
          
          </header>

         <main>
         
         <Main/>
     
         </main>
       
         <footer style={{color: null}}>
           <p>
           <a href="https://github.com/ColinWeaver"> GitHub </a>
           </p>
           <p>
           <a href="mailto:composerman11@gmail.com"> Email </a>
           </p>
           <p>
           <a href="https://www.linkedin.com/in/colin-weaver-969505217/"> LinkedIn</a>
           </p>
           <p>
            <a href="tel:6154385452">Mobile</a>
           </p>
         </footer>
        
      </div>
    </div>
  );
          
}

export default Layout;
