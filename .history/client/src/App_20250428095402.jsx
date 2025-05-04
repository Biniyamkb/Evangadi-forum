import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { use, useEffect } from "react";
import { checkUser } from "../../controller/userController";
import axios from "./axiosConfig";

function App() {
const navi=  useNavigate()
  async function checkUser() {
    try {
      await axios.get("/user/check");
    } catch (error) {
      console.log(error.response);
      navigator("/login")
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
