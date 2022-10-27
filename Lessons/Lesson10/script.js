// #1

// let str = "js";

// console.log(str.toUpperCase());

// #2

// let str = "JS";

// console.log(str.toLowerCase());

// #3

// let str = "Я учу javascript!";

// console.log(str.length);

// #4

// let str = "Я учу javascript!";

// console.log(str.substr(2, 3));
// console.log(str.substring(2, 5));
// console.log(str.slice(2, 5));

// #5

// let str = "Я учу javascript!";

// console.log(str.indexOf("учу"));

// #6

// let str = "My name is Gleb";
// let n = 8;
// let result = "";

// if (str.length > n) {
//     result = str.slice(0, n) + "...";
// } else {
//     result = str;
// }

// console.log(result);

// #7

// let str = "Я-учу-javascript!";

// console.log(str.replaceAll("-", "!"));

// #8

// let str = "Я учу javascript!";

// console.log(str.split(" "));

// #9

// let str = "Я учу javascript!";

// console.log(str.split(""));

// #10

// let date = "2025-12-31";

// console.log(date.split("-").reverse().join("."));

// #11

// let arr = ["я", "учу", "javascript", "!`"];

// console.log(arr.join("+"));

// #12

// let str = "my name is Gleb";

// console.log(str[0].toUpperCase() + str.slice(1));

// #13

// let str = "My name is Gleb";

// console.log(
//     str
//         .split(" ")
//         .map((el) => el[0].toUpperCase() + el.slice(1))
//         .join(" ")
// );

// #14

// let str = "var_test_text";

// console.log(
//     str
//         .split("_")
//         .map((el, i) => (i != 0 ? el[0].toUpperCase() + el.slice(1) : el))
//         .join("")
// );

// #15

// let num = 1234567;

// console.log(
//     num
//         .toString()
//         .split("")
//         .reverse()
//         .map((el, i) => (i % 3 == 0 ? el + " " : el))
//         .reverse()
//         .join("")
//         .trim()
// );

// #16

// let str = "My name is Gleb";

// console.log(str.split(" ").length);

// #17

// let str = "My  name is   Gleb";

// console.log(
//     str
//         .split(" ")
//         .filter((el) => !el == "")
//         .join(" ")
// );

// #18

// let str = "ivanov.gleb.2006@mail.ru";

// console.log(str.includes("@") && str.includes(".") && str.substring(str.lastIndexOf(".") + 1).length >= 2);
