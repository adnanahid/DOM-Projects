const root = document.getElementById("mainBody");
const btn = document.getElementById("btn");

// create RGB
function rgb() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

function main() {
    btn.addEventListener("click", function () {
        const color = rgb();
        root.style.backgroundColor = color;
    });
}

window.onload = () => {
  main();
};