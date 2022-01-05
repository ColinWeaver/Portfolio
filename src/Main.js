import React from "react";
import Intro from "./Intro";
import About from "./About";
import {Route, Routes } from "react-router-dom"
import Projects from "./Projects";
import Contact from "./Contact"
import NotFound from "./NotFound"



function Main({externalLinkHandler, setPosition}){

   return (
<>

<Routes>
<Route path="/" element={<Intro setPosition={setPosition}/>}/>
<Route path="/about" element={<About setPosition={setPosition}/>}/>
<Route path="/projects" element={<Projects setPosition={setPosition} externalLinkHandler={externalLinkHandler}/>}/>
<Route path="/contact" element={<Contact setPosition={setPosition} externalLinkHandler={externalLinkHandler}/>}/>
<Route path="*" element={<NotFound/>}/>
</Routes>

</>
)
   }
 


export default Main;
