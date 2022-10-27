// function fib(num) {
//     let arr = [1, 2];

//     for (let i = 2; i < num; i++) {
//         arr.push(arr[i - 1] + arr[i - 2]);
//     }

//     return arr;
// }

// console.log(fib(10));

// let arr = [59, 48, 67, 79, 64];

// // const customFindIndex = (array, callback) => {
// //     for (let i = 0; i < array.length; i++) {
// //         if (callback(array[i], i, array)) return i;
// //     }
// // };

// // const index = customFindIndex(arr, (item) => item % 2 != 0);

// // console.log(index);

// const customFilter = (array, callback) => {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i], i, array)) {
//             result.push(array[i]);
//         }
//     }
//     return result;
// };

// const index = customFilter(arr, (item) => item % 2 != 0);

// console.log(index);

// const phones = [
//     {
//         name: "IPhone",
//         price: 324,
//     },
//     {
//         name: "IPhone",
//         price: 658,
//     },
//     {
//         name: "Samsung",
//         price: 254,
//     },
//     {
//         name: "Huawei",
//         price: 489,
//     },
//     {
//         name: "Xiaomi",
//         price: 154,
//     },
// ];

// // let startRange = +prompt("Start");
// // let endRange = +prompt("End");

// let filtered = phones.filter((item) => item.price > 200 && item.price < 500);

// console.log(filtered);

// let arr = ["", 59, "jyt", false, null, 0, "trh", undefined, 48, "", 67, true, 79, "iylk", "mtyk", 0, 64, null];

// let filtered = arr.filter((item) => item != false && item != true && item != null);

// console.log(filtered);

// let arr = [55, 83, 31, 87, 36, 62, 60, 96, 7, 46];

// let waste = [31, 87, 60, 46];

// let filtered = arr.filter((item) => waste.filter((wasteItem) => wasteItem == item) == false);

// console.log(filtered);

// let arr = [7, 83, 31, 87, 36, 83, 60, 96, 7, 46];

// let filtered = arr.filter((item, index) => arr.indexOf(item) == index);

// console.log(filtered);

let arr1 = [7, 83, 31, 87, 36, 83, 60, 96, 7, 46];
let arr2 = [7, 83, 31, 87, 36, 83, 60, null, 7, 46];

let areEqual = (arr1, arr2) => {
    if (arr1.length != arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false;
        }
    }
    return true;
};

console.log(areEqual(arr1, arr2));
