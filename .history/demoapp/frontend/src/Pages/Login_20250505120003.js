import React, { useState } from "react";

function Login() {
  return function Login() {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    // Declare a state variable to store the response from the server
    const [responseMessage, setResponseMessage] = useState("");

    //Write  a function to handle the form submission
    function handleSubmit(event) {
      event.preventDefault();

      const loginData = {
        email: emailAddress,
        password: password,
      };
      //check if the data is being captured correctly
      console.log(loginData);
      //send the data to the server
      const apiUrl = "http://localhost:4000/login";
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      };
      const response = fetch(apiUrl, requestOptions);
      response
        .then((res) => res.json())
        .then((data) => {
          setResponseMessage(data.message);
          if (data.status === "success") {
            // //Redirect to the dashboard page
            // setTimeout(()=>{
            //   window.location.href='/';
            // },5000)
          }
        })
        .catch((error) => console.log(error));
    }

    return <div>
          //display the respose message 
      <div className="notice"><h2>{responseMessage}</h2></div>
     <h1>Login</h1>
     <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label> <br />
      <input type="text" id="email" name="email" value={emailAddres} onChange={event=>setEmailAddress(event.target.value)}/><br />
      <label htmlFor="password">Password:</label> <br />
      <input type="text" id="password" name="password" value={password} onChange={event=>setPassword(event.target.value)}/><br />
     
      <input type="submit" value="Submit" />
     </form>

    </div>;
  };
}
export default Login;
