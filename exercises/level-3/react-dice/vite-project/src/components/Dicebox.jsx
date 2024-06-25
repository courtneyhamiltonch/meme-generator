import React, {useState} from "react";

export default function randomNumber() {
    const [numbers, setNumbers] = useState([null, null, null, null, null])
    function rollDice() {
        setNumbers((prevNumbers) =>
          prevNumbers.map(() => Math.floor(Math.random() * 6) )
        );
      }
  return (
  <div>
<h1>Dicebox</h1>
{numbers.map((num, index) => (
    <span key={index}>{num}</span>
))}
<button onClick={rollDice}>Roll Dice</button>
  </div>
  )
}
