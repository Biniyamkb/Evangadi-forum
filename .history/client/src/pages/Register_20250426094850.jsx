import { useRef } from "react";
import axios from "../axiosConfig";


function Register() {
  const usernamDom = useRef();
  const firstnameDom = useRef();
  const lastnameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSumbimt(e) {
    e.preventDefault();
    try {
    } catch (error) {}
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
