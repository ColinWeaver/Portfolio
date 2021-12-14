import React, { useEffect, useState } from "react";
import Main from "./Main";
import Navigation from "./Navigation";
import {Link, Route, Routes, useNavigate} from "react-router-dom"
import Projects from "./Projects";
import Contact from "./Contact";

function Layout() {
  const [reload, setReload] = useState(false);
  const [navSignal, setNavSignal] = useState(false)
  // const [page, setPage] = useState(null);
  // const [aboutWidth, setAboutWidth] = useState(0);
  // const [introWidth, setIntroWidth] = useState(100);
  // const [aboutDisplay, setAboutDisplay] = useState('none');
  // const [introDisplay, setIntroDisplay] = useState(null);
  // const [buttonDisplay, setButtonDisplay] = useState(null);
const navigate = useNavigate()

useEffect(() => {
  if (navSignal) setReload(true);

}, [navSignal])

//   function viewAboutHandler(){
//     setPage('/');
//     setReload(true);
// }

function linkHandler(){
setReload(true);
}

// useEffect(() => {
// if (reload) {
// async function reload(){
// await setAboutWidth(aboutWidth);
// await setIntroWidth(introWidth);
// await setAboutDisplay(aboutDisplay);
// await setIntroDisplay(introDisplay);
// await setButtonDisplay(buttonDisplay);
// await window.location.reload(true);


// }
// reload()
// }
// }, [reload])





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

          <div className="main">
          <Routes>
            
          <Route exact path="/" element={
          <Main 
         reload={reload}
         setReload={setReload}
          // viewAboutHandler={viewAboutHandler} 
          // page={page} 
          // setPage={setPage}
          // introWidth={introWidth}
          // aboutWidth={aboutWidth}
          // introDisplay={introDisplay}
          // aboutDisplay={aboutDisplay}
          // buttonDisplay={buttonDisplay}
          // setIntroWidth={setIntroWidth}
          // setAboutWidth={setAboutWidth}
          // setIntroDisplay={setIntroDisplay}
          // setAboutDisplay={setAboutDisplay}
          // setButtonDisplay={setButtonDisplay}
          />}/>

          <Route path="/about" element={
          <Main 
          reload={reload}
          setReload={setReload}

          // viewAboutHandler={viewAboutHandler} 
          // page={page} 
          // setPage={setPage}
          // introWidth={introWidth}
          // aboutWidth={aboutWidth}
          // introDisplay={introDisplay}
          // aboutDisplay={aboutDisplay}
          // buttonDisplay={buttonDisplay}
          // setIntroWidth={setIntroWidth}
          // setAboutWidth={setAboutWidth}
          // setIntroDisplay={setIntroDisplay}
          // setAboutDisplay={setAboutDisplay}
          // setButtonDisplay={setButtonDisplay}
          />}/>
          
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          
          </Routes>
        
         </div>
       
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
