import { useState } from 'react'
import './App.css'

function App() {

  const [counter,setCounter]=useState(Math.random()*0+1)
  
  const addValue=()=>{
    console.log("Clicked",counter);
    // counter=counter+1
    setCounter(counter+1)
  }
  const remove=()=>{
    console.log("Clicked");
    setCounter(counter-1)
    
  }
  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter Value:{counter}</h2>
     <button
     onClick={addValue}>Add Value:{counter}</button>
     <br />
     <button 
     onClick={remove}>Remove Value:{counter}</button>

    </>
  )
}

export default App
