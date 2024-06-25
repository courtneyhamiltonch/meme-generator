var greet = 'Hello'
var lowerGreet = greet.toLowerCase()
var upperGreet = greet.toUpperCase()
var capitalAndLower = lowerGreet.concat(upperGreet)
//console.log(capitalAndLower)


//(1)Write a function that takes a string as a paramater
function findMidIndex(middle){
    //console.log(middle, "middle")
    //(2)Return a number that is half the string's length
        let halfString = (middle.length/2)

       // console.log(halfString, "half string")
    //(3) Round the number down
        var roundDown = Math.floor(halfString)
//console.log(roundDown)
}

findMidIndex("Test")
 
// write function that uses slice()
function slicing(string){
    let halfSlice = string.length/2
    console.log(halfSlice, "half slice")
    
    var sliced = string.slice(0, halfSlice)
    //console.log(sliced)
}
slicing("Courtney Hamilton")
//return first half of string
 
//Write a function
function mixedCaps(letters){
    //half the string
    let firstHalfNumber = letters.length/2
    //console.log(firstHalfNumber)

    //slice the string using the firstHalf variable
    var firstHalfString = letters.slice(0, firstHalfNumber)
    //console.log(firstHalfString)

    //upper case the sliced string
    var upperCased = firstHalfString.toUpperCase()
    //console.log(upperCased)

    var secondHalfNumber = letters.length/2
    //console.log(secondHalfNumber)
    var secondHalfString = letters.slice(secondHalfNumber)

    var lowerCased = secondHalfString.toLowerCase()
    //console.log(lowerCased)

    var concatStrings = upperCased.concat(lowerCased)

    console.log(concatStrings)

}

mixedCaps("Hello World")


