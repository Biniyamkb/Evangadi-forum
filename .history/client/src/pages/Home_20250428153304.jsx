import React from 'react'
import { useContext } from 'react'


function Home() {
  useContext(AppState)
  return (
    <div>
      <h1>Home</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
<h2>{username}</h2>


    </div>
  )
}

export default Home
