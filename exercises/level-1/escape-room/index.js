const readline = require("readline-sync");

let key = false

let gameOver = false

function escapeRoom(){
    const name = readline.question("What is your name? ")
    console.log(`Hello ${name}, you've woken up in an escape room. There is nothing here but a locked door, a hole in the wall, and a lost key.`)
    while(!gameOver){
        const options = readline.question("What would you like to do? (Open, Search, Hole): ").toLowerCase()
        if(options === "open"){
            if(key){
                console.log("Use the key to open the door. You're free to go.")
                gameOver = true
            } else{
                console.log("You do not have the key, the door can't be opened")
            }
        } else if(options === "search"){
            console.log("You've found the key!")
            key = true
        } else if(options === "hole"){
            console.log("You've died from decapitation!")
            gameOver = true
        }
    }
}
escapeRoom()

// const readline = require("readline-sync");
// const name = readline.question("What is your name? ");

// const options = ['Hand in the hole', 'Find the Key', 'Open the door']
// const decision = readline.keyInSelect(options, 'What do you want to do?')

// if (options[decision] === 'Hand in the hole'){
//     handInHole()
// } else if (options[decision] === 'Find the Key'){
// findTheKey()
// } else if (options[decision] === 'Open the door'){
// openTheDoor()
// }
// while(i < 10){
    
// }
// function handInHole(){
//     alert("You're dead!")
//     console.log(handInHole)
// }
// function findTheKey(){
// alert("Access granted")
// console.log(findTheKey)
// }
// function openTheDoor(){
// alert("You can only open the door with the Key")
// console.log(openTheDoor)
// }



