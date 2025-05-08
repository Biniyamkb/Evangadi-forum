import React ,{useState}from "react";

function AddEmployee(props) {
    const 
function handleSubmit(event){
    event.preventDefault();

}


  return (
    <div>
        {/* <h2>{responseMessage}</h2> */}
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" name="password" />
        <br /> <br /> 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddEmployee;
