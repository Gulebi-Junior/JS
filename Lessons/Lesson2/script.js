// Homework

// let num = parseInt(prompt("Number"));
// let arr = [];

// try {
//     for (let i = num; i <= num && i > 0; i--) {
//         dnum = num / i;

//         if (Number.isInteger(dnum)) {
//             arr.push(i);
//         }
//         if (arr[0] == num && arr[1] == 1) {
//             console.log("Prime");
//         }
//     }
//     console.log(arr);
// } catch (error) {
//     console.log(error);
// }

// let startRange = +prompt("Start");
// let endRange = +prompt("End");

// let line = prompt("String");
// let newLine = [];
// console.log(line.length);
// for (let i = line.length; i > 0; i--) {
//     newLine.push(line[i - 1]);
// }
// console.log(newLine.join(""));

// let string = prompt("String");

// let string = prompt("Hello");

// for (let i = 0; i < string.length; i++) {
//     if (i == 0) {
//         string = string.substring(0, i) + string[i].toUpperCase() + string.substring(i + 1);
//     }

//     if (string[i] == " ") {
//         string = string.substring(0, i + 1) + string[i + 1].toUpperCase() + string.substring(i + 2);
//     }
// }

// console.log(string);

// let newString = "";

// for (let i = 0; i < string.length; i++) {
//     if (i == 0 || string[i - 1] == " ") {
//         newString += string[i].toUpperCase();
//     } else {
//         newString += string[i];
//     }
// }

// console.log(newString);

// let num = +prompt("Number");

// let num = 123456;

// let c = num % 10;
// num = num / 10;
// let b = num % 10;
// let a = num / 10;

// console.log(Math.floor(c));
// console.log(Math.floor(b));
// console.log(Math.floor(a));

// while (num) {
//     console.log(num % 10);
//     num = Math.floor(num / 10);
// }

let num = 7;

let amount = 0;
for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
        amount++;
    }
    if (amount > 0) {
        break;
    }
}
if (amount > 0) {
    console.log("Not prime");
} else {
    console.log("Prime");
}
