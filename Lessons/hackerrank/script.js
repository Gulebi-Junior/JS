// function catAndMouse(catA, catB, mouse) {
//     let between_catA_and_mouse = Math.abs(catA - mouse);
//     let between_catB_and_mouse = Math.abs(catB - mouse);

//     if (between_catA_and_mouse < between_catB_and_mouse) {
//         return "Cat A";
//     } else if (between_catA_and_mouse > between_catB_and_mouse) {
//         return "Cat B";
//     } else if (between_catA_and_mouse == between_catB_and_mouse) {
//         return "Mouse C";
//     }
// }

// console.log(catAndMouse(1, 3, 2));

// function saveThePrisoner(np, ns, s) {
//     if (ns + (s - 1) > np) {
//         return ns + (s - 1) - np + 1;
//     }
//     if (ns < np - s) {
//         // s = s % ns;
//     }
//     // if (np < ns) {
//     //     ns = ns % np;
//     // }
//     return ns + (s - 1);
// }

// console.log(saveThePrisoner(10, 7, 8)); unfinished

// function circularArrayRotation(a, k, queries) {
//     let result = [];

//     queries.forEach((el) => {
//         // console.log((el + k) % a.length);
//         console.log((el + k) % a.length);
//         // console.log(a.length);
//         result.push(a[(el + k) % a.length]);
//     });

//     return result;
// }

// console.log(circularArrayRotation([1, 2, 3], 1, [0, 1, 2]));
// unfinished

// function beautifulDays(start, end, div) {
//     const reverseInt = (num) => {
//         return parseInt(num.toString().split("").reverse().join(""));
//     };

//     let res = 0;
//     for (let i = start; i <= end; i++) {
//         let reverse = reverseInt(i);
//         if (Math.abs(i - reverse) % div === 0) {
//             res++;
//         }
//     }

//     return res;
// }

// console.log(beautifulDays(13, 45, 3));

// function pageCount(end, num) {
//     let a = num - 1;
//     let b = end - num;

//     if (num % 2 == 0) {
//         if (b == 1) {
//             b = 0;
//         }
//     }

//     return Math.min(a, b);
// }

// console.log(pageCount(5, 3));

// drawing-book unfinished

// function designerPdfViewer(array, word) {
//     let tallness = [];

//     word.split("").forEach((el, i) => {
//         tallness.push(array[word.charCodeAt(i) - 97]);
//     });

//     return Math.max(...tallness) * word.length;
// }

// console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], "zaba"));

// the-love-letter-mystery

function theLoveLetterMystery(str) {
    let strArr = str.split("");
    let falseNumberIndexes = [];

    for (let i = 0; i < strArr.length / 2; i++) {
        if (strArr[i] != strArr[strArr.length - 1 - i]) {
            falseNumberIndexes.push(strArr.length - 1 - i);
            // strArr[strArr.length - 1 - i] = str[str.charCodeAt(strArr.length - 1 - i) - 97 - 1];
        }
    }

    falseNumberIndexes.forEach((el, index) => {
        let loopLength = str.charCodeAt(strArr.length - 1) - 97 - (str.charCodeAt(0) - 97);

        for (let i = 1; i <= loopLength; i++) {
            strArr[strArr.length - 1] = str[str.charCodeAt(strArr.length - 1) - 97 - i];
        }
    });

    return strArr;
}

console.log(theLoveLetterMystery("abcd"));
