// let time = 12;

// switch (time < 12) {
//     case true:
//         console.log("AM");
//         break;
//     case false:
//         console.log("PM");
//         break;
// }

// let arr = [1, 6, 12, 9, 3];

// for (let i = 0; i < arr.length; i++) {
//     arr[i] *= 2;
// }

// console.log(arr);

// let i = 0;
// while (i < arr.length) {
//     arr[i] *= 2;
//     i++;
// }

// console.log(arr);

// function calc(num1, num2, operator) {
//     try {
//         return eval(num1 + operator + num2);
//     } catch (error) {
//         return "Incorrect Number Or Operator";
//     }
// }

// console.log(calc(2, 3, "*"));

// function getMultiplicationTable(num) {
//     let result = [];

//     for (let i = 1; i <= 10; i++) {
//         result.push(num + "*" + i + "=" + num * i);
//     }

//     return result;
// }

// console.log(getMultiplicationTable(8));

// function modulo(num1, num2) {
//     while (num1 > 0) {
//         if (num1 < num2) {
//             return num1;
//         }
//         num1 -= num2;
//     }
// }

// console.log(modulo(23, 5));

// function sum(arr) {
//     let result = 0;
//     arr.forEach((el) => (result += el));
//     return result;
// }

// console.log(sum([2, 1, 4]));

function biggest(array) {
    let result = 0;
    for (const i in array) {
        if (array[i] > result) {
            result = array[i];
        }
    }
    return result;
}

console.log(biggest([43, 56, 86]));
