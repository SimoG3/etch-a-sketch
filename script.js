const container = document.querySelector("#container");
const gridSizeValue = document.querySelector("#gridSizeMax");
const gridSizeSlider = document.querySelector("#grid-size");



function createGrid(rowsAndCols) {
    container.innerHTML = '';

    const total =rowsAndCols * rowsAndCols;

    for(let i=0 ; i < total ; i++ ) {

        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);

        grid.addEventListener("mouseover", 
                              (event) => {event.target.style.backgroundColor = getRandomColor();})
        }
    
    container.style.width = `${rowsAndCols * 32}px`;
    container.style.height = `${rowsAndCols * 32}px`;
    
}


createGrid(gridSizeValue);


function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


gridSizeSlider.addEventListener('input', (e) => {
    const newSize = e.target.value;
    gridSizeValue.textContent = newSize;
    createGrid(newSize); 
});


