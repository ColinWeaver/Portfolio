// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Layout from "./Layout";
import { Route, Routes} from 'react-router-dom';



function App() {
  return (
    <div className="app">
  <Routes>
  
  
    <Route exact path="/" element={<Layout/>}/>
    <Route path="/projects" element={<Layout/>}/>
     
    
     </Routes>
     </div>
     
  
  )
}

export default App;
