import React, {useState} from 'react';
import './App.css';
import Layout from "./Layout";
import { Route, Routes} from 'react-router-dom';
import Projects from "./Projects";
import Contact from "./Contact";


function App() {
    
  return (
    <div className="app">
    <Routes>
    <Route exact path="/" element={<Layout/>}/>
     <Route path="/about" element={<Layout/>}/>
     {/* <Route path="/projects" element={<Layout/>}/> */}
     </Routes>
     </div>
     
     )
     
     
  
  
}

export default App;
