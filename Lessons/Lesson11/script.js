// let array = [-4, 3, -9, 0, 4, 1];

// function plusMinus(arr) {
//     let n = arr.length;

//     let posCount = 0;
//     let negCount = 0;
//     let zeroCount = 0;

//     for (const el of arr) {
//         if (el > 0) {
//             posCount++;
//         } else if (el < 0) {
//             negCount++;
//         } else if (el == 0) {
//             zeroCount++;
//         }
//     }

//     console.log(posCount / n);
//     console.log(negCount / n);
//     console.log(zeroCount / n);
// }

// plusMinus(array);

// let array = [1, 2, 5, 4, 3];

// function miniMaxSum(arr) {
//     let result = [];
//     for (const i in arr) {
//         result.push(arr.reduce((a, b) => a + b, 0) - arr[i]);
//     }
//     console.log(Math.min(...result), Math.max(...result));
// }

// miniMaxSum(array);

let arr = [4, 2, 3, 2, 1, 3];

function birthdayCakeCandles(candles) {
    let result = {};
    candles.forEach((el) => {
        result[el] = (result[el] || 0) + 1;
    });
    return Math.max(...Object.values(result));
}

console.log(birthdayCakeCandles(arr));

// let array = [
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12],
// ];

// function diagonalDifference(arr) {
//     let sum1 = 0;
//     let sum2 = 0;
//     for (const i in arr) {
//         sum1 += arr[i][i];
//         sum2 += arr[i][arr.length - 1 - i];
//     }

//     return Math.abs(sum1 - sum2);
// }

// console.log(diagonalDifference(array));
