import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Subhankar",
    age:21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl mb-4' >Tailwind Test</h1>
      <Card username="chai aur code"/>
      <Card username="Subhankar"/>
    </>
  )
}

export default App
