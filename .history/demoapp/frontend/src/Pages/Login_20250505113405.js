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
          event.preventDefault();

          const loginData={
            email:emailAddress,
            password:password
          }
          //check if the data 
        }


     

      }
    
  )
}

export default Login
