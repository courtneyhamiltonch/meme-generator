const form = document.addItem
const input = document.getElementById ("title")
const submit = document.getElementById("submit-button")
const uList = document.getElementById("list")
console.log(submit)
let index = 0

submit.addEventListener("click", function(event){
    event.preventDefault()
    const list = document.createElement("li")
    list.setAttribute('id', index + 'li')
    //list.innerText = input.value
    uList.append(list)
    console.log(list)

    const div = document.createElement("div")
    div.innerText = input.value
    list.append(div)

    const inputEdit = document.createElement('input')
    inputEdit.setAttribute('id', index+'input')
    //create buttons
    //edit button
    const editButton = document.createElement("button")
    editButton.setAttribute('id', index)
    editButton.innerText = "edit"
    editButton.style.margin = "4px"
    editButton.addEventListener('click', (event) => {
        console.log(event.target.parentElement.id)
        const idOfTarget = event.target.id +'input'
        console.log(idOfTarget)
        const element = document.getElementById(idOfTarget)
        console.log(element)
        console.log(element.value)
       })
    //delete button
    const deleteButton = document.createElement("button")
    deleteButton.innerText= "X"

    list.append(editButton, deleteButton, inputEdit)

    //make delete button work
   deleteButton.addEventListener('click', (event) => {
    console.log(event.target.parentElement.id)
    const idOfTarget = event.target.parentElement.id
    const element = document.getElementById(idOfTarget)
    element.remove()
   })
   index++
})
