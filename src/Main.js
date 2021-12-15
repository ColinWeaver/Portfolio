import React, {useEffect, useState } from "react";
import Intro from "./Intro";
import About from "./About";
import {useLocation, Route, Routes, useNavigate} from "react-router-dom"
import Projects from "./Projects";
import Contact from "./Contact"


function Main(){
  const [opacity, setOpacity] = useState(.1);
  const [width, setWidth] = useState(100);
  const [display, setDisplay] = useState(null);
  const navigate = useNavigate();


          // useEffect(() => {
//   if (reload) {
//   async function reload(){
//   await setAboutWidth(aboutWidth);
//   await setIntroWidth(introWidth);
//   await setAboutDisplay(aboutDisplay);
//   await setIntroDisplay(introDisplay);
//   await setButtonDisplay(buttonDisplay);
//   // await window.location.reload(false)
//   }
//   reload()
//   }
//   }, [reload])

// function nextPageHandler(){

//   navigate({pathname: '/'});
//   }
 
  
   return (
<>
<div className="main">
<Routes>
<Route path="/" element={<Intro opacity={opacity} setOpacity={setOpacity} width={width} setWidth={setWidth} display={display} setDisplay={setDisplay} />}/>
<Route path="about" element={<About opacity={opacity} setOpacity={setOpacity}  width={width} setWidth={setWidth} display={display} setDisplay={setDisplay}/>}/>
<Route path="projects" element={<Projects />}/>
<Route path="contact" element={<Contact />}/>

</Routes>
</div>
</>
)
   }
 


export default Main;
