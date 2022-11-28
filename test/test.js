// binary search !!

// let arr = [];

// for (let i = 0; i < 1; i += 0.01) {
//     arr.push(Number(i.toFixed(3)));
// }

// console.log(arr);

// let num = 0.56;

// function binary(arr, num) {
//     let index = -1;
//     let tempArr = [...arr];

//     let NotFound = true;
//     while (NotFound) {
//         let middle = Math.floor(arr.length / 2);
//         if (arr[middle] < num) {
//             arr = arr.splice(middle, arr.length - middle);
//         } else if (arr[middle] > num) {
//             arr = arr.splice(0, middle);
//         } else {
//             index = tempArr.indexOf(arr[middle]);
//             NotFound = false;
//         }

//         if (arr.length == 1 && arr[0] != num) {
//             break;
//         }
//     }

//     return index;
// }

// console.log(binary(arr, num));

const fetch = require("node-fetch");

let res = fetch("https://jsonplaceholder.typicode.com/todos/1");

console.log(res);
