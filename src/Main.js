import React, {useEffect, useState } from "react";
import Intro from "./Intro";
import About from "./About";
import {useLocation, Route, Routes, useNavigate} from "react-router-dom"
import Projects from "./Projects";
import Contact from "./Contact"
import NotFound from "./NotFound"



function Main({externalLinkHandler}){
  const [opacity, setOpacity] = useState(.1);
  const [width, setWidth] = useState(100);
  const [display, setDisplay] = useState(null);
  
 
  
   return (
<>

<Routes>
<Route path="/" element={<Intro opacity={opacity} setOpacity={setOpacity} width={width} setWidth={setWidth} display={display} setDisplay={setDisplay} />}/>
<Route path="/about" element={<About opacity={opacity} setOpacity={setOpacity}  width={width} setWidth={setWidth} display={display} setDisplay={setDisplay}/>}/>
<Route path="/projects" element={<Projects />}/>
<Route path="/contact" element={<Contact externalLinkHandler={externalLinkHandler}/>}/>
<Route path="*" element={<NotFound/>}/>
</Routes>

</>
)
   }
 


export default Main;
