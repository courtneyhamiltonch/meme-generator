//Sort an array from smallest number to largest
var arr = [1, 3, 5, 2, 90, 20]
arr.sort(function(a,b){
    return a-b
})
console.log(arr)

//Sort an array from largest number to smallest
var arr = [1, 3, 5, 2, 90, 20]
arr.sort(function(a,b){
    return b-a
})
console.log(arr)

//Sort an array from shortest string to longest
var arr = ["dog", "wolf", "by", "family", "eaten"]
arr.sort(function(a,b){
    return a.length - b.length
})
console.log(arr)

// Sort an array alphabetically
var arr = ["dog", "wolf", "by", "family", "eaten"]
arr.sort(function (a, b) {
    if (a > b) {
        return 1;
    }
    if (b > a) {
        return -1;
    }
    return 0;
});
console.log(arr);

//Sort the objects in the array by age
var arr = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]
arr.sort(function(a,b){
    return a.age - b.age
})
console.log(arr)