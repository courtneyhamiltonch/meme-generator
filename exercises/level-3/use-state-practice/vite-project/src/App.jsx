import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //Pass in a new color of your choosing in place of the old one
  const [color, setColor] = useState("pink")
  setColor("yellow")


  const [color, setColor] = useState("pink")
//Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it’s currently blue, set it back to pink.
  function toggleColor() {
   
    setColor(prevState => prevState === "pink" ? "blue" : "pink");
//Add a new person object to the following people array in state. You can hard-code a new object but it must be a person object with firstName and lastName properties.
 const [people, setPeople] = useState([
	{
		firstName: "John",
		lastName: "Smith"
	}
])
const [newPerson, setNewPerson] = useState({
  firstName: "", lastName: ""
})

function addedPerson(event){
  const{name, value} = event.target 
  setNewPerson(prevState => {
    return{
      ...prevState, 
      [name]: value
    }
  })
}

function updatePeople(event) {
  event.preventDefault()
  setPeople(prevState => [...prevState, newPerson])
}

const displayedPeople = people.map((people)=>{
  return (
    <>
    <div>
      <span>{people.firstName} </span>
      <span>{people.lastName} </span>
      </div></>
  )
})
//Change the following state-setting functions to use an implicit return
const [colors, setColors] = useState(["pink", "blue"])

function toggleColor(){
  setColors(prevColors =>  [...prevColors, "green"])
} 
const [countObject, setCountObject] = useState({
	count: 0
})

setCountObject(prevState => prevState.count + 1
)
 
const [person, setPerson] = useState({
  firstName: "John",
  lastName: "Smith"
})

setPerson(prevState => ({ ...prevState, age: 30 }))

//What’s wrong with the following state update?
const [colors, setColors] = useState(["pink", "blue"])

setColors("green")
//the data type is an array but changes to a string.

  return (
    <>
     {/* <h1 onClick={toggleColor}>{color}</h1>  */}
     {/* <form onSubmit={updatePeople}>
      <input name='firstName' onChange={addedPerson} value={newPerson.firstName} placeholder='first name'></input>
      <input name='lastName' onChange={addedPerson} value={newPerson.lastName} placeholder='last name'></input>
      <button>Submit</button>
     </form>
{displayedPeople} */}
    </>
  )

}
export default App
