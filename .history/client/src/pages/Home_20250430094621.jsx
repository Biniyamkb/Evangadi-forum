import React from "react";
import { useContext } from "react";
import { AppState } from "../App";
import logo from "../image/Oi"
function Home() {
  const { user } = useContext(AppState);

  return (
    <div>
      <img src=${logo} alt="Logo" />
     
      <h1>DTU WEB BASED STUDENT MANAGMENET SYSTEM </h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>
        wellcome: <span style={{ color: "red" }}>{user.username}</span>
      </h2>
    </div>
  );
}

export default Home;
