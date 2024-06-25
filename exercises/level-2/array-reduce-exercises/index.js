// Turn an array of numbers into a total of all the numbers
var nums = [1,2,3]
var result1 = nums.reduce(function(final,num){
    final += num
    return final
})

console.log(result1)
//Turn an array of numbers into a long string of all those numbers.
var nums = [1,2,3]
var result = nums.reduce(function(final,num){
    return nums.join('')
    return final
}) 
console.log(result)

//Turn an array of voter objects into a count of how many people voted
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}]
    var result = voters.reduce(function(final, voter){
        if(voter.voted){
            final++

        }
        return final
     }, 0)
     console.log(result)

     // Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
     var wishList = [
        { title: "Tesla Model S", price: 90000 },
        { title: "4 carat diamond ring", price: 45000 },
        { title: "Fancy hacky Sack", price: 5 },
        { title: "Gold fidgit spinner", price: 2000 },
        { title: "A second Tesla Model S", price: 90000 }
    ] 
function shoppingSpree(arr){
    var result = arr.reduce(function(final,prices){
        return final + prices.price
   }, 0)
    console.log(result)
}  

shoppingSpree(wishList)

//Given an array of arrays, flatten them into a single array
    var flattened =  [
        ["1", "2", "3"],
        [true],
        [4, 5, 6]].reduce(
        function(a, b) {
          return a.concat(b);
        },
        []
      )
      console.log(flattened)*/

// Given an array of potential voters, return an object representing the results of the vote
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
function voterResults(){
    let youngVotes = 0;
    let youth = 0;
    let midVotes = 0;
    let mids =0;
    let oldVotes =0;
    let olds =0;
    for (var i = voters.length - 1; i >= 0; i--) {
        if(voters[i].age >= 18 && voters[i].age <= 25 && voters[i].voted === true){
            youngVotes++;
        }
        if(voters[i].age >= 18 && voters[i].age <= 25){
            youth++;
        }
        if(voters[i].age >= 26 && voters[i].age <= 35 && voters[i].voted === true){
            midVotes++;
        }
        if(voters[i].age >= 26 && voters[i].age <= 35 ){
            mids++;
        }
        if(voters[i].age >= 36 && voters[i].age <= 55 && voters[i].voted === true){
            oldVotes++;
        }
        if(voters[i].age >= 36 && voters[i].age <= 55){
            olds++;
        }
    }

    return{
        youngVotes,
        youth,
        midVotes,
        mids,
        oldVotes,
        olds
    }

}
console.log(voterResults())

