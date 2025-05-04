import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect } from "react";
import axiosBaxiosaxiosase from "./axiosConfig";
// import { useEffect } from "react";
// import axios from "./axiosConfig";

function App() {
 async function checkUser(){
 try { 
  axio
  
 } catch (error) {
  
 }
  }
 
  useEffect(()=>{
    checkUser();
  })


  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
