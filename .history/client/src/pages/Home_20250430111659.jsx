// import React from "react";
// import { useContext } from "react";
// import { AppState } from "../App";
// import logo from "../image/logo.jpeg";
// function Home() {
//   const { user } = useContext(AppState);

//   return (
//     <div>
//       <img src={logo} alt="logo " />

//       <h1>DTU WEB BASED STUDENT MANAGMENET SYSTEM </h1>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <h2>
//         wellcome: <span style={{ color: "red" }}>{user.username}</span>
//       </h2>
//     </div>
//   );
// }

// export default Home;

import React, { use, useContext, useState } from "react";
import { AppState } from "../App";
import logo from "../image/logo.jpeg";
import axios from "axios";

function Home() {
  const { user } = useContext(AppState);
  console.log(user);
  const [formData, setFormData] = useState({
    studentId: user.userid, // Assuming user ID is part of the user context
    name: user.firstname,
    department: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/clearance",
        formData
      );
      alert("Clearance application submitted successfully!");
      // Reset form after submission
      setFormData({
        studentId: user.id,
        name: user.username,
        department: "",
        comments: "",
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application. Please try again.");
    }
  };

  return (
    <div>
      <img src={logo} alt="logo" />
      <h1>DTU WEB BASED STUDENT MANAGEMENT SYSTEM</h1>
      <br />
      <h2>
        Welcome: <span style={{ color: "red" }}>{user.username}</span>
      </h2>

      <h3>Clearance Application Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default Home;
