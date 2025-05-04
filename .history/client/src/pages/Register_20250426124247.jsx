import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosConfig";

function Register() {
  const navigate=useNavigate()

  const usernamDom = useRef();
  const firstnameDom = useRef();
  const lastnameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSumbimt(e) {
    e.preventDefault();
    const usernameValue = usernamDom.current.value;
    const firstValue = firstnameDom.current.value;
    const lastValue = lastnameDom.current.value;
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;

    if (
      !usernameValue ||
      !firstValue ||
      !lastValue ||
      !lastValue ||
      !emailValue ||
      !passValue
    ) {
      alert("Please provide all required information ");
      return;
    }

    try {
      await axios.post("/users/register", {
        username: usernamDom,
        firstname: firstValue,
        lastname: lastValue,
        email: emailValue,
        password: passValue,
      });

      alert("Register successfull. please login");
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <section>
      <form onSubmit={handleSumbimt}>
        <div>
          <span>username : </span>
          <input ref={usernamDom} type="text" placeholder="username" />
        </div>
        <br />
        <div>
          <span>First name: </span>
          <input ref={firstnameDom} type="text" placeholder="first name" />
        </div>
        <br />
        <div>
          <span>last name: </span>
          <input ref={lastnameDom} type="text" placeholder="last name" />
        </div>
        <br />
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
        <button type="submit">Register</button>
      </form>
    </section>
  );
}

export default Register;
