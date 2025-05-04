import { useRef } from "react";

function Login() {
  const emailDom = useRef();
  const passwordDom = useRef();
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
        <button type="submit">Register</button>
      </form>
    </section>
  );
}

export default Login;
