// let input = document.getElementById("input");
// let evalBtn = document.getElementById("eval");
// let clearBtn = document.getElementById("clear");
// let operationsBlock = document.getElementById("operations-container");
// let numbersBlock = document.getElementById("numbers-container");

// let operations = ["+", "-", "/", "*"];
// let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// for (let i = 0; i < operations.length; i++) {
//     let btn = document.createElement("button");
//     btn.innerHTML = operations[i];
//     btn.className = "operation";

//     operationsBlock.appendChild(btn);
// }

// for (let i = 0; i < numbers.length; i++) {
//     let btn = document.createElement("button");
//     btn.innerHTML = numbers[i];
//     btn.className = "number";

//     numbersBlock.appendChild(btn);
// }

// let btns = document.getElementsByTagName("button");

// for (const btn of btns) {
//     btn.addEventListener("click", (event) => {
//         let content = btn.textContent;
//         if (btn.className == "number") {
//             input.value += content;
//         } else if (!operations.includes(input.value[input.value.length - 1])) {
//             input.value += content;
//         }
//     });
// }

// evalBtn.addEventListener("click", (event) => {
//     if (numbers.includes(input.value[input.value.length - 1])) {
//         input.value = eval(input.value);
//     }
// });

// clearBtn.addEventListener("click", (event) => {
//     input.value = "";
// });

let color1 = prompt("Color");

document.body.style.backgroundColor = color1;

let color2 = prompt("Color");

let h1 = document.getElementsByTagName("h1")[0];
h1.style.color = color2;

let fontSize = prompt("Font Size");

let p = document.getElementsByTagName("p")[0];
p.style.fontSize = `${fontSize}px`;

let li = document.getElementsByTagName("li");

for (const i in li) {
    li[i].textContent = Number(i) + 1;
}
