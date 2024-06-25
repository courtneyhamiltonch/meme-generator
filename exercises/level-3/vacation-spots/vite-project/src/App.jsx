import react from 'react'
import './App.css'
import Card from './components/Card'
import Data from './components/Data'

 function App() {
  

  return (
    <>
    {Data.map(item => <Card
    place={item.place}
    price={item.price}
    timeToGo={item.timeToGo}/>)}

    </>
  )}

export default App
