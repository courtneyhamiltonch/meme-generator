// function fizzy()
//  for(var i = 0; i < 100; i++){
//         console.log(i)
//     }if(i%3 === 0){
//         console.log("fizz")
//     }else if(i%5 === 0){
//         console.log("buzz")
//     }else if(i%5===0 && i%3===0){
//         console.log("fizzbuzz")
//     }else
// fizzy()

// function fizzy(){
// for(var i = 0; i < 100; i++){
//     console.log(i)
// if(i%3 === 0){
//     console.log("fizz")
// }else if(i%5 === 0){
//     console.log("buzz")
// }else if(i%5===0 && i%3===0){
//     console.log("fizzbuzz")
// }
// }
// fizzy()

function fizzy(){
    for(var i = 0; i < 100; i ++){
        if(i%5===0 && i%3===0){
            console.log("fizzbuzz")
        }else if(i%5===0){
            console.log("buzz")
        }else if(i%3===0){
            console.log("fizz")
        }else{console.log(i)
        }
        
    }
}
fizzy()