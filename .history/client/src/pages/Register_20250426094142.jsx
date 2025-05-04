import { useRef } from "react";

function Register() {
  const userNamDom = useRef(null);
  async function handleSumbimt(e) {
    e.preventDefault();
    console.log((userNamDom.current.style.backgroundColor = "red"));
  }

  return (
    <section>
      <form onSubmit={handleSumbimt}>
        <div>
          <span>username : </span>
          <input ref={userNamDom} type="text" placeholder="username" />
        </div>
        <br />
        <div>
          <span>First name: </span>
          <input type="text" placeholder="first name" />
        </div>
        <br />
        <div>
          <span>last name: </span>
          <input type="text" placeholder="last name" />
        </div>
        <br />
        <div>
          <span>email : </span>
          <input type="email" placeholder="email" />
        </div>
        <br />
        <div>
          <span>password : </span>
          <input type="password" placeholder="password" />
        </div>
        <br />
        <button type="submit">Register</button>
      </form>
    </section>
  );
}

export default Register;
