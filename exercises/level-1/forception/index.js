var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
function forception(people, alphabet){
    // for(var i = 0; i < people.length; i++){
    //     console.log(people[i])
    //     for(var j = 0; j < alphabet.length; j++){
    //         console.log(alphabet[j])
    //     }
    // }
    for(const name of people){
        console.log(name)
        for(const letter of alphabet){
            console.log(letter)
        }
    }
}
console.log(forception(people,alphabet))