import React from "react";

import {useRef} from 'react'

const userNamDom
function Register() {
  return (
    <section>
      <form>
        <div>
          <span>username : </span>
          <input type="text" placeholder="username" />
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
