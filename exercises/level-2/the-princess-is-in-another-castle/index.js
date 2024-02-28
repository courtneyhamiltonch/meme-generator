class Player {
    constructor(name, totalCoins, status,  hasStar){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }
    setName(namePicked){
        if(namePicked === "Mario"){
            this.name = "Mario"
        } else if(namePicked === "Luigi"){
            this.name = "Luigi"
        }
    } 
    gotHit(){
        console.log("You got hit!")
        if(this.status === "Powered Up"){
            this.status = "Big"
        } else if(this.status === "Big"){
            this.status = "Small"
        } else if(this.status === "Small"){
            this.status = "Dead"
            console.log("You're toast!")
            clearInterval(intervalId)
        }else if(this.hasStar === true){
           console.log("Your star protected you")
           this.hasStar = false
        }
    }
    getPowerUp(){
        if(this.status === "Small"){
            this.status = "Big"
        }else if(this.status === "Big"){
            this.status = "Powered Up"
        }else if(this.status === "Powered Up"){
            console.log("You get a gold star!")
            this.hasStar = true
        }
    }
    addCoin(){
        console.log("You've gotten a new coin!")
        this.totalCoins += 1
    }
    print(){
        console.log(`${this.name} ${this.totalCoins} ${this.status}`)
    }
    } 
const player = new Player("name", 0, "Powered Up", true)
player.setName("Mario")
    function getRandomValue(){
        let num = Math.floor(Math.random() * 3)
        if(num === 0){
            player.gotHit()
        }else if(num === 1){
            player.getPowerUp()
        }else if(num === 2){
            player.addCoin()
        }
        player.print()
    }
    
var intervalId = setInterval(getRandomValue, 1000)
