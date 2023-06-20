let number = 0
const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")
const counter = document.querySelector(".counter")

document.getElementById("increase").addEventListener("click", function() {
    number += 1;
    counter.innerHTML =  number;
    });

document.getElementById("decrease").addEventListener("click", function() {
    number -= 1
    counter.innerHTML =  number;
    });

document.getElementById("reset").addEventListener("click", function() {
    number = 0
    counter.innerHTML =  number;
    });