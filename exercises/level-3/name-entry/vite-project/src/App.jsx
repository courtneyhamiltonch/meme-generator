import { useState } from 'react'
import './App.css'

function App() {
  const[firstName, setFirstName] = useState("")
const [allNames, setAllNames] = useState([])
function handleSubmit(event){
  event.preventDefault();
  console.log(firstName)
  setAllNames(previousNames => [...previousNames, firstName])
  setFirstName("")
}
const names = allNames.map(name => (<li key={name}>{name}</li>))
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
      type='text'
      placeholder='Name'
      value={firstName}
      onChange={e => setFirstName(e.target.value)}/>
  <button>Submit</button>
  <ol>
  {firstName ? <h1>{firstName}</h1> : <h1>&nbsp;</h1>} 
    {names}
  </ol>
   </form>


    </>
  )
  }

export default App;
