import React from "react";

function AddEmployee() {
const handleSubmit(event){
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(event.target); // Get the form data
    const data = Object.fromEntries(formData.entries()); // Convert FormData to a plain object

    console.log(data); // Log the data to the console (for debugging purposes)

    // Send a POST request to the server with the form data
    fetch("http://localhost:5000/addemployee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Employee added successfully!"); // Show success message
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error adding employee!"); // Show error message
      });
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
