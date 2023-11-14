// Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order
/*const numbers = [4, 2, 7, 1, 9, 5]
const sortedNumbers = numbers.sort(function(a,b){
    return a-b
})
console.log(sortedNumbers)*/

// Write a function that takes an array of strings and returns a new array where each string is converted to uppercase.
const strings = ['hello', 'world', 'javascript']
const upperStrings = strings.map(function(numbers){
    return numbers.toUpperCase()
})
console.log(upperStrings)