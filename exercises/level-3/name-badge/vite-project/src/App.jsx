import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './components/Form.jsx'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", placeOfBirth:"", phone:"", favoriteFood:"", comment:""
  })

const [badges, setBadges] = useState([])

function handleChange(event){
  const{name, value} = event.target 
  setFormData(prev => {
    return{
      ...prev,
       [name]:value
    }
  }) 
}  

function onSubmit(event){
  event.preventDefault()
  setBadges(prev => [...prev, formData])
  setFormData({
    firstName:"", lastName:"", email:"", placeOfBirth:"", phone:"", favoriteFood:"", comment:""
  })
}

console.log(formData)
const display = badges.map((badge) => {
  return(
    <div>
      <h2>Name:{badge.firstName} {badge.lastName}</h2>
      <h2>Phone: {badge.phone}</h2>
      <h2>Place of Birth: {badge.placeOfBirth}</h2>
      <h2>Email: {badge.email}</h2>
      <h2>Favorite Food: {badge.favoriteFood}</h2>
      <h2>Tell us about yourself: {badge.comment}</h2>
    </div>
  )
})
console.log(badges)

  return (
    <>
    <Form
    onSubmit={onSubmit}
    handleChange = {handleChange}
    formData = {formData}
    />
    {display}
    </>
  )
}

export default App
