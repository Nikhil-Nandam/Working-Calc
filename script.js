let body = document.querySelector("body");
let btn = document.getElementsByClassName("btn")[0];
btn.onclick = function() {
    body.classList.toggle("light")
}