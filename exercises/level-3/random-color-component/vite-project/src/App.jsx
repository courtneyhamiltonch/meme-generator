import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

// need to make a div that is a set height and width
// get API call data in correct format 
// set the div's background color

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('red')

  // const getData = () => {
  //   axios.get("https://random-color.onrender.com/colors/random")
  //   .then( res => console.log( res ))
  //   .then( res => setColor( res.data.hex ) )
  //   // setColor()
  // }

  function getData() {
    axios.get("https://random-color.onrender.com/colors/random")
    // .then( res => console.log( res.data.hex ))
    .then( res => setColor( res.data.hex ) )
  }

  useEffect( () => {
    getData()
    console.log( "color: " + color)
  }, [])
  // console.log( "color: " + color)

  return (
    <>
      <div style={{ backgroundColor: color }}>
        test
      </div>
      
    </>
  )
}

export default App
