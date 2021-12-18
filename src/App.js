import React from 'react';
import './App.css';
import Layout from "./Layout";
import { Route, Routes} from 'react-router-dom';
import NotFound from "./NotFound"
// import RoutesContainer from "./RoutesContainer"


function App() {
    
  return (
    <div className="app">
    <Routes>
    <Route path="/*" element={<Layout/>}/>
     </Routes>
     </div>
     
     )
     
     
  
  
}

export default App;
