axios.get("https://api.vschool.io/pokemon")
.then(response => showData(response.data.objects[0].pokemon))
.catch(error => console.log(error))

// const xhr = new XMLHttpRequest()
// xhr.open("GET", "https://api.vschool.io/pokemon", true)
// xhr.send()

// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata)
//         console.log(data)
//         // some function
//         showData(data.objects[0].pokemon)
//     }
// }
const showData = (arr) => {
    arr.map(pokemon => {
        const h1 = document.createElement('h1')
        h1.textContent = pokemon.name
        document.body.appendChild(h1)

    })
}

// arr.map(pokemon) => {
//     const h1 = document.createElement('h1')
//     h1.textContent = pokemon.name
//     return h1
//     console.log(showData)
