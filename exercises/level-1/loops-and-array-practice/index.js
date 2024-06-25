/*var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let count = 0
for(var i =0; i < officeItems.length; i++){
  //  console.log(i)
    if(officeItems[i] ==="computer"){
        count++
    }
} */
//console.log(count)
// (4 computers)

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length ; i++){//initiating for loop
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age <=18){//if statement [i]=index of, checking if persons age is lesser than 18
            console.log("not old enough")//string diffrentiating age group (minors)
         } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >18){// else if statement, checking if persons age is greater than 18
            console.log("old enough")// diffrentiating agre group (adults)
         }
    
    }

  