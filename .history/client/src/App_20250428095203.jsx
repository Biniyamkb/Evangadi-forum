import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect } from "react";
import { checkUser } from "../../controller/userController";
import axios from "./axiosConfig";

function App() {
  async function checkUser(){
try {
  
  axios.get
} catch (error) {
  
}
   }


  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
