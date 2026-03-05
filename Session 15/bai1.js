const btn = document.getElementById("changeColor");
const box = document.querySelector(".box");

btn.addEventListener("click", function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});