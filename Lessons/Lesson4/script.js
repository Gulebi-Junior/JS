// let files = [
//     {
//         size: 568,
//         type: "image",
//     },
//     {
//         size: 6372,
//         type: "image",
//     },
//     {
//         size: 56443,
//         type: "document",
//     },
//     {
//         size: 4657,
//         type: "audio",
//     },
//     {
//         size: 6657,
//         type: "audio",
//     },
// ];

// // for (let i = 0; i < 3; i++) {
// //     let size = +prompt("Size");
// //     let type = prompt("Type");
// //     files.push({ size, type });
// // }

// for (let i = 0; i < files.length; i++) {
//     switch (true) {
//         case files[i].type == "image" && files[i].size > 1024:
//         case files[i].type == "audio" && files[i].size > 5120:
//         case files[i].type == "document" && files[i].size > 10240:
//             files.splice(files.indexOf(files[i]), 1);
//             i--;
//             break;
//     }
// }

// console.log(files);

// let arr = [2, 23, 43, 58, 71, 85, 108, 145];

// const num = 23;
// let found = false;
// let value = null;
// let left = 0;
// let right = arr.length;

// while (!found) {
//     console.log(".");

//     let mid = Math.floor((left + right) / 2);
//     if (num === arr[mid]) {
//         value = mid;
//         found = true;
//     }
//     if (num > arr[mid]) {
//         left = mid;
//     }
//     if (num < arr[mid]) {
//         right = mid;
//     }
//     if (left + 1 == right - 1) {
//         value = "Not Found";
//         break;
//     }
// }

let arr = [543, 657, 12, 98, 65];

let counter = 0;
for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[i - 1]) {
            let temp1 = arr[i];
            let temp2 = arr[i - 1];
            arr[i] = temp1;
            arr[i - 1] = temp2;
        }
    }
}
