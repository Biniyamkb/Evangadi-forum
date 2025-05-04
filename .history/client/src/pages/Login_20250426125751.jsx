import { useRef } from "react";

function Login() {
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSumbimt(e) {
    e.preventDefault();
    const usernameValue = usernamDom.current.value;
    const firstValue = firstnameDom.current.value;
    const lastValue = lastnameDom.current.value;
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;

    if (!emailValue || !passValue) {
      alert("Please provide all required information ");
      return;
    }

    try {
      await axios.post("/users/register", {
        email: emailValue,
        password: passValue,
      });

      alert("Register successfull. please login");
      navigate("/login");
    } catch (error) {
      alert("something went worng!. ");
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
        <button type="submit">Register</button>
      </form>
    </section>
  );
}

export default Login;
