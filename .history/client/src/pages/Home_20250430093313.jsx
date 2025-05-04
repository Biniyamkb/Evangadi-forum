import React from "react";
import { useContext } from "react";
import { AppState } from "../App";

function Home() {
  const { user } = useContext(AppState);

  return (
    <div>
      <h1>DTU WE</h1>
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
