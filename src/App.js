import React from 'react';
import './App.css';
import Layout from "./Layout";
import { Route, Routes} from 'react-router-dom';
import NotFound from "./NotFound"


function App() {
    
  return (
    <div className="app">
    <Routes>
    <Route path="/*" element={<Layout/>}/>
    <Route element={<NotFound/>}/>
     </Routes>
     </div>
     
     )
     
     
  
  
}

export default App;
