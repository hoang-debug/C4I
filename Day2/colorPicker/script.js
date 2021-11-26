function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
}
let boxEl = [...document.querySelectorAll(".box")];
boxEl.forEach(box => {
    box.addEventListener("click", getRandomColor=>{
        boxEl.style.background = color;
        boxEl.querySelector("h2").innerHTML = color;
    });
})