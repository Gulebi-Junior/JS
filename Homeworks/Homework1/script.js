// #1

// let num = +prompt("Number");

// let amount = 0;
// if (num > 1) {
//     for (let i = 2; i <= num / 2; i++) {
//         if (num % i == 0) {
//             amount++;
//         }
//         if (amount > 0) {
//             break;
//         }
//     }
//     if (amount > 0) {
//         console.log("Not prime");
//     } else {
//         console.log("Prime");
//     }
// } else {
//     console.log("Not prime");
// }

// Or

// let num = +prompt("Number");
// let arr = [];

// for (let i = num; i > 0; i--) {
//     dnum = num / i;

//     if (Number.isInteger(dnum)) {
//         arr.push(i);
//     }
// }
// if (arr.length == 2) {
//     console.log("Prime");
// } else {
//     console.log("Not Prime");
// }

// #2

// let num1 = prompt("First Number");
// let num2 = prompt("Second Number");
// let operator = prompt("Operator");

// try {
//     alert(eval(num1 + operator + num2));
// } catch (error) {
//     alert("Incorrect Number Or Operator");
// }
