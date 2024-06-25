// //Challenge 1: Sort Array with Preserved Index for -1 Values
// function solution(arr){
//     for(let i = 0; i < arr.length ; i++){ //looping through array
//         let indexArr = []  //creating empty array to push -1 index numbers to
//     arr.forEach((element, index) => {
//         if(element === -1){
//             indexArr.push(index) //pushing 
//         }
//     });
//    const newArr = arr.filter(element => element !== -1).sort((a,b) => a-b) //ascending order
//    indexArr.forEach((element)=> {
//     newArr.splice(element, 0, -1) 
//    })
//    return newArr
//     }
// }

// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
// console.log(solution([5, 3, 1]))
// console.log(solution([-1, -1, -1, -1]))
// console.log(solution([100, -1, 50, -1, 75]))


//Write a JavaScript function called countVowels that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string. The function should return the count.
// const input = '' //insert string here
// const words = input.split("")
// function getVowelCount() {
//     return words.filter(word => word.match(/[aeiou]/gi)).length;
// }
// console.log(getVowelCount(input));


// Write a JavaScript function called **`findSumOfTwo`** that takes in an array of numbers and a target number. The function should find two numbers in the array that add up to the target number and return them as an array. If there are multiple pairs that satisfy the condition, return any one of them. If no such pair exists, return an empty array.

// Implement the **`findSumOfTwo`** function using either the provided example solutions or your own solution.

function findSumOfTwo(numbers, target) {
 for(var i = 0; i < numbers.length; i++){
    for(var j = i + 1; j < numbers.length; j++){
        if(numbers[i]+numbers[j]=== target){
            return [numbers[i],numbers[j]]
        }
    }
 }
 return []
}

console.log(findSumOfTwo([2, 4, 7, 11, 15], 91)); // Output: [2, 7]

console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5] 