import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Register from "./pages/Register"; 
import LogIn from "./pages/LogIn";  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<LogIn />} />  
      </Routes>
    </Router>
  );
}

export default App;
