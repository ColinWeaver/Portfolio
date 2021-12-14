import React from 'react';
import './App.css';
import Layout from "./Layout";
import { Route, Routes} from 'react-router-dom';
import Projects from "./Projects";
import Contact from "./Contact";


function App() {
  return (
    <div className="app">
  <Routes>
    <Route path="/" element={<Layout/>}/>
     <Route path="/about" element={<Layout/>}/>
  
     </Routes>
     </div>
     
  
  )
}

export default App;
