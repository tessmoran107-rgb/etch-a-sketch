let createGrid = function(x, y) {
    let i = x * y
    while (i > 0) {
        let square = document.createElement("div");
        document.querySelector(".sketchpad").appendChild(square);
        let width = ((500 - (2 * x)) / x)
        let height = ((500 - (2 * y)) / y)
        square.style.width = width + "px";
        square.style.height = height + "px";

        i--;

        square.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "orange";
        })
    }    
}

createGrid(16, 16);

