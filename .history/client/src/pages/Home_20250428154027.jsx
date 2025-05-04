import React from 'react'
import { useContext } from 'react'
import { AppState } from '../App'


function Home() {
 const {user} = useContext(AppState)

  return (
    <div>
      <h1>Home</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
<h2 > welocm  : <span style={color}>{user.username} </span> </h2>


    </div>
  )
}

export default Home
