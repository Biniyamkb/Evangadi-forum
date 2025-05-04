import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosConfig";

function Login() {
  const navigate = useNavigate();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSumbimt(e) {
    e.preventDefault();

    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;

    if (!emailValue || !passValue) {
      alert("Please provide all required information ");
      return;
    }

    try {
      const response= await axios.post("/users/login", {
        email: emailValue,
        password: passValue,
      });

      alert("Login successfull.");
      // navigate("/");
      console.log(response)
    } catch (error) {
      alert(error?.response?.data.msg);

      console.log(error.response);
    }
  }
  return (
    <section>
      <form onSubmit={handleSumbimt}>
        <div>
          <span>email : </span>
          <input ref={emailDom} type="email" placeholder="email" />
        </div>
        <br />
        <div>
          <span>password : </span>
          <input ref={passwordDom} type="password" placeholder="password" />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default Login;
