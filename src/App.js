import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


import Navbar from './components/navbar';
import Landing from './pages/landing';
import CariMobil from './pages/carimobil';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/carimobil" element={<CariMobil/>}/>
      </Routes>  
    </Router>
  );
}

export default App;
