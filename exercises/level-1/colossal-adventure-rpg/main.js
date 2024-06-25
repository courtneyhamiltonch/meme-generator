const readline = require("readline-sync")

const playerName = readline.question("Oh no! Princess Peach has been captured by Bowser and he must die in order for you to get her back to Mario and Luigi! Enter your name: ")
console.log(playerName)
let playerInventory = ["Icepick", "water gun"]


//es6 constructor function

class Character {
    constructor(name, healthPoints, attackPoints, inventory) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPoints = attackPoints;
        this.inventory = inventory
    }
}

const hero = new Character(playerName, 100, 5, playerInventory);
const enemy1 = new Character("Bowser", 25, getRandomNumber(5,25), ["Tooth", "Princess Peach"]);
const enemy2 = new Character("Goomba", 36, getRandomNumber(5,25), ["Sword", "Princess Peach"]);
const enemy3 = new Character("Shrooms", 18, getRandomNumber(5, 25), ["Princess Peach, Princess Daisy"])

let enemies = [enemy1, enemy2, enemy3]

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}


let isGameRunning = true

while(isGameRunning === true){
    if (enemies.length === 0){
        console.log("Congrats you win!")
       process.exit()
    }
    
    let action = readline.question("What do you want to do?  [w] to walk or [p] to print your inventory")
    console.log(action)
    if (action === "w"){
        let enemyChance = getRandomNumber(1, 4)
        console.log("walking")
        console.log(enemyChance)
        if (enemyChance === 1){
            let randomIndex = getRandomNumber(0, enemies.length -1)
           let currentEnemy = enemies[randomIndex]
           console.log(`${currentEnemy.name} appeared`)
          const choice = readline.question("Do you want to fight [f] or run [r] ?")
          if (choice === "f"){
            
            while(hero.healthPoints > 0 && currentEnemy.healthPoints > 0){
                currentEnemy.healthPoints -= hero.attackPoints
                hero.healthPoints -= currentEnemy.attackPoints
                console.log(`hero: ${hero.healthPoints}`)
                console.log(`enemy: ${currentEnemy.healthPoints}`)
                if (currentEnemy.healthPoints <= 0){
                    console.log("You won")
                    playerInventory.push(currentEnemy.inventory)
                    hero.healthPoints +=10
                    enemies.splice(randomIndex, 1)
                }else if(hero.healthPoints <= 0){
                    console.log(`GAME OVER ${currentEnemy.name} got the best of you`)
                    isGameRunning = false
                }
            }
          }else if(choice === "r"){
            const escapeChance = Math.floor(Math.random()*9+1)
            if(escapeChance < 5){
                console.log("You didnt get away this time!")
                while(hero.healthPoints > 0 && currentEnemy.healthPoints > 0){
                    currentEnemy.healthPoints -= hero.attackPoints
                    hero.healthPoints -= currentEnemy.attackPoints
                    console.log(`hero: ${hero.healthPoints}`)
                    console.log(`enemy: ${currentEnemy.healthPoints}`)
                    if (currentEnemy.healthPoints <= 0){
                        console.log("You won")
                        playerInventory.push(currentEnemy.inventory)
                        enemies.splice(randomIndex, 1)
                    } else if(hero.healthPoints <= 0){
                        console.log(`GAME OVER ${currentEnemy.name} got the best of you`)
                        isGameRunning = false
                    }
                }
            }else if(escapeChance >= 5){
                console.log("You've gotten away for now!")
            }
          }
        }
    }else if(action === "p"){
        console.log(`${playerName} ${hero.healthPoints} ${playerInventory.map((item)=>{return item})}`)
    }
}