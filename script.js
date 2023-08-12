let btn = document.querySelector(".btn")
let colors = ["red", "purple", "blue", "green", "black", "white", "pink"]

function getRandomColor () {
    return colors[Math.floor(Math.random() * colors.length)] 
}


btn.addEventListener("click",() => { 
     const randomColor = getRandomColor()
     document.body.style.background = randomColor
     btn.style.backgroundColor = randomColor
})