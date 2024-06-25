import React from "react"

 export default function Form(props){
const {handleChange, onSubmit, formData} = props

    return(
    <form onSubmit={onSubmit}>
    <input type='text'
    placeholder='First Name'
    name='firstName'
    onChange={handleChange}
    value={formData.firstName}>
    
    </input>

    <input type='text'
    placeholder='Last Name'
    name='lastName'
    onChange={handleChange}
    value={formData.lastName}>
    </input>

    <input type='email'
    placeholder='Email'
    name='email'
    onChange={handleChange}
      value={formData.email}>
    </input>

    <input type='text'
    placeholder='Place of Birth'
    name='placeOfBirth'
    onChange={handleChange}
    value={formData.placeOfBirth}>
    </input>

    <input type='tel'
    placeholder='Phone Number'
    name='phone'
    onChange={handleChange}
    value={formData.phone}>
    </input>

    <input type='text'
    placeholder='Favorite Food'
    name='favoriteFood'
    onChange={handleChange}
    value={formData.favoriteFood}>
    </input>

    <textarea
    style={{width: '200px', height: '100px'}}
    placeholder='Tell us about yourself'
    name='comment'
    onChange={handleChange}
    value={formData.comment}>
    </textarea>

    <button>Submit</button>

  </form>) 
};