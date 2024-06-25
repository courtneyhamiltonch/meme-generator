import React from "react"
import { useState, useEffect } from "react"
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'


 export default function Form(props){

const [memes, setMemes] = useState({
  topText:"", bottomText:"", imgUrl:"", edit:false
})

const [allMemes, setAllMemes] = useState([])

const [memeList, setMemeList] = useState([])

//Get all memes
useEffect(() => {
   axios.get("https://api.imgflip.com/get_memes")
    .then((res) => setAllMemes(res.data.data.memes)) 
    .catch((error) => console.log(error))
}, []);


//Inputs by user
const handleChange = (e) => {
  const {name, value} = e.target
  setMemes(prevMeme => ({
    ...prevMeme, 
    [name]:value
  }))
}

//Adding memes when button is clicked
const onSubmit = (e) =>  {
  e.preventDefault()
  console.log("click2")
  const newMeme = {...memes, id: uuidv4() }
    setMemeList(prevList => [...prevList, newMeme])

  }

  //fetching random meme
  const getMeme = (e) => {
    e.preventDefault()
    const randomMeme = Math.floor(Math.random() * allMemes.length)
    const imageUrl = allMemes[randomMeme].url
    setMemes((prevMeme) =>
    ({ ...prevMeme, imgUrl: imageUrl,
     }));
  } 
  const displayMemes = memeList.map((memes) => (
    <div key={memes._id}>
      <h2>{memes.topText}</h2>
      <h2>{memes.bottomText}</h2>
      <img src={memes.imgUrl}/>
    </div>
  ))

console.log(memeList)

    return(
      <>
    <form>
    <input type='text'
    placeholder='Top Text'
    name="topText"
    value={memes.topText}
    onChange={handleChange}
    >
    </input>

    <input type='text'
    placeholder='Bottom Text'
    name="bottomText"
    value={memes.bottomText}
    onChange={handleChange}
    />
   <button onClick={getMeme}>
   Get Meme
   </button>


   <button onClick={onSubmit}>
    Add Meme
   </button>

   <div>
    <img src={memes.imgUrl}/>
    <h2>{memes.topText}</h2>
    <h2>{memes.bottomText}</h2>
   </div>

  </form> 
   <div key={memes._id}>{displayMemes}</div>
   </>

    )
};

  