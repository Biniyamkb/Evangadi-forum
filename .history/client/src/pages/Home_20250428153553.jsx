import React from 'react'
import { useContext } from 'react'
import { AppState } from '../App'


function Home() {
 const abc= useContext(AppState)
 console.log(abc)
  return (
    <div>
      <h1>Home</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
<h2>{"username"}</h2>


    </div>
  )
}

export default Home
