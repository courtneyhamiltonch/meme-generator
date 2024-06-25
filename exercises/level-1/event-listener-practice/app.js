var box = document.getElementById("box")
console.log(box, "test")

box.addEventListener("mouseover", ()=> {
    box.style.backgroundColor="blue"

});
box.addEventListener("mousedown", ()=> {
    box.style.backgroundColor= "Red"
});
box.addEventListener("mouseout", ()=> {
    box.style.backgroundColor= "Yellow"
});
box.addEventListener("dblclick", ()=> {
    box.style.backgroundColor= "green"
});
box.addEventListener("scroll", ()=> {
    box.style.backgroundColor= "orange"
});