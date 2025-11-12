let black = document.querySelector(".blackBtn");
let red = document.querySelector(".redBtn");
let green = document.querySelector(".greenBtn");
let purple = document.querySelector(".purpleBtn");
let erase = document.querySelector(".eraseBtn");
let reset = document.querySelector(".resetBtn");
let refresh = document.querySelector(".refreshBtn");
let refreshWidth = document.querySelector("#width");
let refreshHeight= document.querySelector("#height");

let colour = "";

black.addEventListener("click", () => { colour = "black"; })
red.addEventListener("click", () => { colour = "red"; })
green.addEventListener("click", () => { colour = "green"; })
purple.addEventListener("click", () => { colour = "purple"; })
erase.addEventListener("click", () => { colour = ""; })


function createGrid(x, y) {
    let i = x * y
    while (i > 0) {
        let square = document.createElement("div");
        document.querySelector(".sketchpad").appendChild(square);
        let width = ((600 - (2 * x)) / x)
        let height = ((400 - (2 * y)) / y)
        square.style.width = width + "px";
        square.style.height = height + "px";

        i--;

        square.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = colour;
        })
    }  
} 

createGrid(16, 16);

reset.addEventListener("click", () => {
    let squares = document.querySelectorAll(".sketchpad div");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
    colour = "";
});


refresh.addEventListener("click", () => { 
    document.querySelector(".sketchpad").innerHTML = "";

    let newWidth = Number(refreshWidth.value);
    let newHeight = Number(refreshHeight.value);

    createGrid(newWidth, newHeight);
})








