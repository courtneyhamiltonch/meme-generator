const readline = require('readline-sync');
let name = readline.question("Oh no! Princess Peach has been captured by Bowser and he must die in order for you to get her back to Mario and Luigi! Enter your name: ");
let playerHealth = 100
let enemyHealth = 88
let enemy = ["Bowser","Goomba","Shrooms"]
let playerInventory = ["water", "gold", "luigi"]
let enemyInventory = ["water", "jewels", "princess peach"]
function enemyHealthReset(){
    enemyHealth = 88
}
function enemyDies(chosenEnemy){
    console.log(chosenEnemy)
    for(let i = 0; i < enemyInventory.length; i++){
       playerInventory.push(enemyInventory[i]) 
    }
    playerHealth = playerHealth+10
    console.log(playerHealth, "Health replenishment")
}
function fight(chosenEnemy){
    
const options = readline.question(`${name} would you like to fight(f) or flight(fl)?`)
if(options === "f"){
    const playerDamage = Math.floor(Math.random()*74+1)
    const enemyDamage = Math.floor(Math.random()*44+1)
    playerHealth = playerHealth-enemyDamage
    enemyHealth = enemyHealth-playerDamage
    if(playerHealth <= 0){
        console.log("You're dead!")
    } else if(enemyHealth <= 0){
        enemyDies(chosenEnemy)
    }
    console.log(`player health: ${playerHealth}, enemy: ${enemyHealth}`)
    while(enemyHealth>0 && playerHealth>0){
        fight()
    }
} else if(options === "fl"){
    const chance=Math.floor(Math.random()*50)
    if(chance >= 26){
        console.log("You got away, press enter to continue")
    } else if(chance < 26){
        const playerDamage = Math.floor(Math.random()*74+1)
        const enemyDamage = Math.floor(Math.random()*44+1)
        playerHealth = playerHealth-enemyDamage
        enemyHealth = enemyHealth-playerDamage
        if(playerHealth <= 0){
            console.log("You're dead!")
        } else if(enemyHealth <= 0){
            enemyDies()
        }
        while(enemyHealth>0 && playerHealth>0){
            fight()
        }
    }
}

}
function fightChance(){
    const chance = Math.floor(Math.random()*59+1)
    const enemyChance = Math.floor(Math.random()*2+1)
    let chosenEnemy
    if(enemyChance === 1){
        chosenEnemy = enemy[0]
    } else if(enemyChance === 2){
        chosenEnemy = enemy[1]
    } else if(enemyChance===3){
        chosenEnemy= enemy[2]
    }
    if(chance > 19){
        console.log(`continue walking`)
    }else if(chance < 19){
    console.log(`a ${chosenEnemy} appears`)
        fight(chosenEnemy)
    }
}
let end
function walk(){
    const options = readline.question(`${name} would you like to walk(w), print health status and check inventory(p, print)?`)
    if(options === "w"){
        fightChance()
    }else if(options==="p"||options==="print"){
        console.log(`${name}, ${playerHealth}, ${playerInventory.map((item)=>{return item})}`)
    }else if(options==="end"){
        end="end"
    }
}
while (playerHealth > 0){
walk()
enemyHealthReset()
if(end==="end"){
    break
}
} 