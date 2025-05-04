import React from "react";

function Login() {
  return (
    <section>
      <form onSubmit={handleSumbimt}>
       
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
