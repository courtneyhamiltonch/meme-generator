// Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order
const numbers = [4, 2, 7, 1, 9, 5]
numbers.sort(function(a,b){
    return a-b
})
console.log(numbers)

// Write a function that takes an array of strings and returns a new array where each string is converted to uppercase.
const string = ['hello', 'world', 'javascript']
const UpperString = string.map(function(potato){
    return potato.toUpperCase()
})
console.log(UpperString)

function findEvenNumbers(arr){
/// loop the arr
/// find the logic for an even number
/// return a new array with only even numbers
// return arr.filter(function(num){
// if(num % 2 === 0){
//     return num
// }
// })
return arr.filter(num => num % 2 === 0)
}


console.log(findEvenNumbers([1,2,3,4,5,6,7,8,9,10])) // [2,4,6,8,10]

// understanding the question // ? 

// pseduo code plan

// solve