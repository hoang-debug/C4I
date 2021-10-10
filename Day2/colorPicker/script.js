function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.querySelector(".box").style.background = color;
    document.querySelector(".box h2").innerHTML = color;
    return color;
}
let boxEl = document.querySelectorAll(".box");
boxEl.forEach(box => {
    box.addEventListener("click", getRandomColor);
})