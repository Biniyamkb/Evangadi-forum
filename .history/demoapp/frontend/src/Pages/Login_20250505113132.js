import React ,{useState} from 'react'

function Login() {
  return (
    
      function Login(){
        const [emailAddress,setEmailAddress] = useState('');
        const [password,setPassword] = useState('');
       // Declare a state variable to store the response from the server
       const [responseMessage,setResponseMessage]= useState('');

       //Write  a function to handle the form submission 
        function handleSubmit(event){
          event.preventDefault(); // Prevent the default form submission behavior
          const data = { emailAddress, password }; // Create an object with the form data

          fetch('http://localhost:8080/api/v1/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Convert the data object to a JSON string
          })
            .then((response) => response.json()) // Parse the response as JSON
            .then((data) => {
              setResponseMessage(data.message); // Update the response message state variable with the server's response
            })
            .catch((error) => {
              console.error('Error:', error); // Log any errors to the console
            });
        }


     

      }
    
  )
}

export default Login
