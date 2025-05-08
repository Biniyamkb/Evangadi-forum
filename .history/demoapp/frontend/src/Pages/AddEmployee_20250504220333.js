import React from 'react'

function AddEmployee() {
  return (
    <div>
    < h1>Add Employee</h1>   
    <form>
        <label htmlFor="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname"/><br/>
        <label htmlFor="lname">Last name:</label><br/>
        <input type="text" id="lname" name="lname"/><br/>
        <label htmlFor="email">Email:</label><br/>
        <input type="email" id="email" name="email"/><br/>
    </form>
    </div>
  )
}

export default AddEmployee
