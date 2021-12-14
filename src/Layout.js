import React, { useEffect, useState } from "react";
import Main from "./Main";
import Navigation from "./Navigation";
import {Link, Route, Routes} from "react-router-dom"
import Projects from "./Projects";
import Contact from "./Contact";

function Layout() {
  const [reload, setReload] = useState(false);
  const [page, setPage] = useState(null);
  const [aboutWidth, setAboutWidth] = useState(0);
  const [introWidth, setIntroWidth] = useState(100);
  const [aboutDisplay, setAboutDisplay] = useState('none');
  const [introDisplay, setIntroDisplay] = useState(null);
  const [buttonDisplay, setButtonDisplay] = useState(null);


  function viewAboutHandler(){
    setPage('/');
    setReload(true)
}

useEffect(() => {
if (reload) {
async function reload(){
await setAboutWidth(aboutWidth);
await setIntroWidth(introWidth);
await setAboutDisplay(aboutDisplay);
await setIntroDisplay(introDisplay);
await setButtonDisplay(buttonDisplay);
await window.location.reload(true);
}
reload()
}
}, [reload])


  return (
    <div className="image">
      <div className="layout">
        
        <header>
          <div className='header-title'>
          <Link to="/">
          <h3 style={{ color: '#9BF6FF'}}>Colin Weaver <span style={{fontWeight: '500'}}>- Web Developer</span></h3>
          </Link>
        
          <Navigation setReload={setReload}/>
        
          </div>
          </header>

          <div className="main">
          <Routes>
            
          <Route exact path="/" element={
          <Main 
          viewAboutHandler={viewAboutHandler} 
          page={page} 
          setPage={setPage}
          introWidth={introWidth}
          aboutWidth={aboutWidth}
          introDisplay={introDisplay}
          aboutDisplay={aboutDisplay}
          buttonDisplay={buttonDisplay}
          setIntroWidth={setIntroWidth}
          setAboutWidth={setAboutWidth}
          setIntroDisplay={setIntroDisplay}
          setAboutDisplay={setAboutDisplay}
          setButtonDisplay={setButtonDisplay}
          />}/>

          <Route path="/about" element={
          <Main 
          viewAboutHandler={viewAboutHandler} 
          page={page} 
          setPage={setPage}
          introWidth={introWidth}
          aboutWidth={aboutWidth}
          introDisplay={introDisplay}
          aboutDisplay={aboutDisplay}
          buttonDisplay={buttonDisplay}
          setIntroWidth={setIntroWidth}
          setAboutWidth={setAboutWidth}
          setIntroDisplay={setIntroDisplay}
          setAboutDisplay={setAboutDisplay}
          setButtonDisplay={setButtonDisplay}
          />}/>
          
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          
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
