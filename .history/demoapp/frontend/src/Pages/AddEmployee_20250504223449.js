import React ,{useState}from "react";

function AddEmployee(props) {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");  
    const [password,setPassword] = useState("");

function handleSubmit(event){
    event.preventDefault();
 const data={
    first_name:firstName,
    last_name:lastName,
    email:email,
    password:password
 };
 // send the data to the server
 const apiUrl="http://localhost:3001/add-employee";

}


  return (
    <div>
        {/* <h2>{responseMessage}</h2> */}
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" value={firstName} onChange={event=>setFirstName(event.target.value)} />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" value={lastName} onChange={event=>setLastName(event.target.value)} />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" value={email} onChange={event=>email(event.target.value)}/>
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
