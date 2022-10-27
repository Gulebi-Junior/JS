// let btn = document.querySelector("#btn");
// let text = document.querySelector("#text");

// function res(textPar) {
//     text.textContent = textPar;
// }

// btn.addEventListener("mouseout", (event) => {
//     res("Out");
// });

// btn.addEventListener("mouseover", (event) => {
//     res("Over");
// });

// let dateInput = document.getElementById("date");

// dateInput.addEventListener("input", (event) => {
//     let date1 = Date.parse(dateInput.value);
//     let date2 = new Date().getTime();
//     console.log(Math.floor((date2 - date1) / 31540000000));
// });

// let num1 = document.getElementById("number1");
// let num2 = document.getElementById("number2");
// let sub = document.getElementById("submit");
// let res = document.getElementById("result");

// sub.addEventListener("click", (event) => {
//     res.textContent = (num1.value / num2.value).toFixed(2);
// });

let btn = document.getElementById("button");
let block = document.getElementById("block");

function getRand() {
    return Math.floor(Math.random() * 256);
}

btn.addEventListener("click", (event) => {
    block.style.backgroundColor = `rgb(${getRand()},${getRand()},${getRand()})`;
});
