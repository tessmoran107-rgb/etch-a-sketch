let black = document.querySelector(".blackBtn");
let red = document.querySelector(".redBtn");
let green = document.querySelector(".greenBtn");
let purple = document.querySelector(".purpleBtn");
let erase = document.querySelector(".eraseBtn");
let reset = document.querySelector(".resetBtn");


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

        let colour = "";

        black.addEventListener("click", () => {
            colour = "black";
        })
        
        red.addEventListener("click", () => {
            colour = "red";
        })

        green.addEventListener("click", () => {
            colour = "green";
        })

        purple.addEventListener("click", () => {
            colour = "purple";
        })

        erase.addEventListener("click", () => {
            colour = "";
        })

        square.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = colour;
        })
    }    
}

createGrid(16, 16);






