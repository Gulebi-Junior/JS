// let input = document.getElementById("input");

// input.addEventListener("input", (event) => {
//     if (/\d$/.test(input.value[input.value.length - 1])) {
//         input.value = input.value.slice(0, -1);
//     }
// });

// let openBtn = document.getElementById("open-btn");
// let closeBtn = document.getElementById("close-btn");
// let modalContainer = document.getElementById("modal-container");

// openBtn.addEventListener("click", (event) => {
//     modalContainer.style.display = "block";
// });
// closeBtn.addEventListener("click", (event) => {
//     modalContainer.style.display = "none";
// });

// let ballImage = document.getElementById("ball-image");

// let poleImage = document.getElementById("pole-image");

// poleImage.addEventListener("click", (event) => {
//     if (event.x + 100 < window.innerWidth && event.y + 100 < window.innerHeight) {
//         ballImage.style.transform = `translate3d(${event.x}px, ${event.y}px, 0px)`;
//     }
// });

// let lightBlocks = document.getElementsByClassName("light-block");

// let nextBtn = document.getElementById("next-btn");

// lightBlocks[0].style.backgroundColor = "orange";

// nextBtn.addEventListener("click", (event) => {
//     for (const el of lightBlocks) {
//         if (el.style.backgroundColor == "orange") {
//             el.style.backgroundColor = "gray";
//             if (el.nextElementSibling == null) {
//                 lightBlocks[0].style.backgroundColor = "orange";
//                 break;
//             } else {
//                 el.nextElementSibling.style.backgroundColor = "orange";
//                 break;
//             }
//         }
//     }
// });

// let listEls = document.getElementsByClassName("list-el");

// for (const el of listEls) {
//     el.addEventListener("click", (event) => {
//         for (const el of listEls) {
//             if (el.style.backgroundColor == "rgba(100, 149, 237, 0.5)") {
//                 el.style.backgroundColor = "transparent";
//             }
//         }
//         el.style.backgroundColor = "rgba(100, 149, 237, 0.5)";
//     });
// }
