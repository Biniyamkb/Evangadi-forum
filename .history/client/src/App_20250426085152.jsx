import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <Routes>
        router
        <Home />
        <Login />
        <Register />
      </Routes>
    </div>
  );
}

export default App;
