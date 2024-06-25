import { useState } from 'react'
import './App.css'
import Dicebox from './components/Dicebox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dicebox />
    </>
  )
}

export default App
