import React from "react";
import { useContext } from "react";
import { AppState } from "../App";
import logo from "../image/dtu_logo.png"
function Home() {
  const { user } = useContext(AppState);

  return (
    <div>
      <img src="${logo}" alt="Logo" />
      <a href="">https://www..com/images/search?view=detailV2&ccid=zrzQPggK&id=9D95E0439C0C5C4DA2BB98342EF28568F6C7831D&thid=OIP.zrzQPggKpsNX1zpLM4icswAAAA&mediaurl=https%3a%2f%2fmedia-exp1.licdn.com%2fdms%2fimage%2fC4E0BAQE43XycHOSVcA%2fcompany-logo_200_200%2f0%2f1551179378819%3fe%3d2159024400%26v%3dbeta%26t%3dq-A_YkOXPCtOGrh3PuXbXFqvBfOqD6JKicOiI60jwWg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.cebcd03e080aa6c357d73a4b33889cb3%3frik%3dHYPH9miF8i40mA%26pid%3dImgRaw%26r%3d0&exph=200&expw=200&q=debre+tabor+university+logo&simid=608012712719627808&FORM=IRPRST&ck=7A8589C6BA062E20676D9CA6D3FE79B8&selectedIndex=0&itb=0</a>
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
