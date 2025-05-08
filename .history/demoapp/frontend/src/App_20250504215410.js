import "./App.css";
//import the Router from react-router-dom
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AddEmployee from "./Pages/AddEmployee";
function App() {
  return <div className="App">
   <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/addemployee" element={<AddEmployee />} />
    </Routes>

  </div>;
}

export default App;
