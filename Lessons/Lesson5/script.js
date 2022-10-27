// function exponentiation(value, degree) {
//     let result = value;
//     if (degree == 0) return 1;
//     for (let i = 1; i < degree; i++) {
//         result *= value;
//     }
//     return result;
// }

// console.log(exponentiation(2, 0));

// function factorial(num) {
//     if (num == 1) return 1;
//     return factorial(--num) * num;
// }

// console.log(factorial(6));

// function factorial(num) {
//     if (num === 0 || num === 1) return 1;
//     for (var i = num - 1; i >= 1; i--) {
//         num *= i;
//     }
//     return num;
// }

// console.log(factorial(6));

let array = [43, 56, 86, 24, 14, 97, 18, 16, 89, 68];

// function biggest(array) {
//     let result = 0;
//     for (const i in array) {
//         if (array[i] > result) {
//             result = array[i];
//         }
//     }
//     return result;
// }

// // console.log(biggest(array));

// function smallest(array) {
//     let result = biggest(array);
//     for (const i in array) {
//         if (array[i] < result) {
//             result = array[i];
//         }
//     }
//     return result;
// }

// // console.log(smallest(array));

// function preBiggest(array) {
//     let preResult = 0;
//     let result = 0;
//     for (const i in array) {
//         if (array[i] > result) {
//             preResult = result;
//             result = array[i];
//         }
//         if (array[i] > preResult && array[i] < result) {
//             preResult = array[i];
//         }
//     }
//     return preResult;
// }

// // console.log(preBiggest(array));

// function preSmallest(array) {
//     let preResult = 0;
//     let result = biggest(array);
//     for (const i in array) {
//         if (array[i] < result) {
//             preResult = result;
//             result = array[i];
//         }
//         if (array[i] < preResult && array[i] > result) {
//             preResult = array[i];
//         }
//     }
//     return preResult;
// }

// // console.log(preSmallest(array));

// function biggest(array, index, result) {
//     if (index >= array.length - 1) {
//         console.log(result);
//         return result;
//     }

//     if (array[index] > result) {
//         result = array[index];
//     }
//     index++;
//     biggest(array, index, result);
// }

// console.log(biggest(array, 0, 0));
