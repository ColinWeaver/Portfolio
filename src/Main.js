import React from "react";
import Intro from "./Intro";
import About from "./About";
import {Route, Routes } from "react-router-dom"
import Projects from "./Projects";
import Contact from "./Contact"
import NotFound from "./NotFound"



function Main({externalLinkHandler}){

   return (
<>

<Routes>
<Route path="/" element={<Intro />}/>
<Route path="/about" element={<About />}/>
<Route path="/projects" element={<Projects externalLinkHandler={externalLinkHandler}/>}/>
<Route path="/contact" element={<Contact externalLinkHandler={externalLinkHandler}/>}/>
<Route path="*" element={<NotFound/>}/>
</Routes>

</>
)
   }
 


export default Main;
