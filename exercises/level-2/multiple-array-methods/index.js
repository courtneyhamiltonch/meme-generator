/*Returns a list of everyone older than 18
sorted alphabetically by last name
each name and age is embedded in a string that looks like an HTML <li> element*/

var peopleArr = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

var newPeople = peopleArr.filter(function(people){
if(people.age > 18){
    return true
}else{
    return false
}
}).sort((a, b) => {
    if(a.lastName[0] < b.lastName[0]){
        return -1
    }else {return 1}
})
var stringArr = newPeople.map(function(people){
    return '<li>' + people.firstName + people.lastName + '</li>' 
})
console.log(newPeople)