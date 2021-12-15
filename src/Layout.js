import React, { useEffect, useState } from "react";
import Main from "./Main";
import Navigation from "./Navigation";
import {Link, Route, Routes, useNavigate, useRoutes} from "react-router-dom"
import Projects from "./Projects";
import Contact from "./Contact";

function Layout() {
  const [reload, setReload] = useState(false);
  const [navSignal, setNavSignal] = useState(false);
  const [renderMain, setRenderMain] = useState(true)
const navigate = useNavigate()


useEffect(() => {
  if (navSignal) setReload(true);
}, [navSignal])


function linkHandler(){
setReload(true);
}


   return  (
    <div className="image">
      <div className="layout">
        
        <header>
          <div className='header-title'>
          <Link onClick={linkHandler} to="/">
          <h3 style={{ color: 'white'}}>Colin Weaver <span style={{fontWeight: '500'}}>- Web Developer</span></h3>
          </Link>
          <Navigation setReload={setNavSignal}/>
          </div>
          </header>

         <main>
         
         <Main/>
     
         </main>
       
         <footer style={{color: 'white'}}>
           <a href="https://github.com/ColinWeaver"> GitHub </a>
           <a href="mailto:composerman11@gmail.com"> Email </a>
           <a href="https://www.linkedin.com/in/colin-weaver-969505217/"> LinkedIn</a>
         </footer>
        
      </div>
    </div>
  );
          
}

export default Layout;
