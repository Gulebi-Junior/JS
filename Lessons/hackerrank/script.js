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

// function theLoveLetterMystery(str) {
//     let strArr = str.split("");
//     let falseNumberIndexes = [];

//     for (let i = 0; i < strArr.length / 2; i++) {
//         if (strArr[i] != strArr[strArr.length - 1 - i]) {
//             falseNumberIndexes.push(strArr.length - 1 - i);
//             // strArr[strArr.length - 1 - i] = str[str.charCodeAt(strArr.length - 1 - i) - 97 - 1];
//         }
//     }

//     falseNumberIndexes.forEach((el, index) => {
//         let loopLength = str.charCodeAt(strArr.length - 1) - 97 - (str.charCodeAt(0) - 97);

//         for (let i = 1; i <= loopLength; i++) {
//             strArr[strArr.length - 1] = str[str.charCodeAt(strArr.length - 1) - 97 - i];
//         }
//     });

//     return strArr;
// }

// console.log(theLoveLetterMystery("abcd"));

// halloween-sale

// function howManyGames(first, discount, min, budget) {
//     let result = [];

//     for (let i = first; result.reduce((a, b) => a + b, 0) <= budget; i -= discount) {
//         if (i >= min) {
//             result.push(i);
//         } else {
//             result.push(min);
//         }
//     }

//     return result.length - 1;
// }

// console.log(howManyGames(20, 3, 6, 80));

// the-time-in-words

// function timeInWords(h, m) {
//     let nums = [
//         "zero",
//         "one",
//         "two",
//         "three",
//         "four",
//         "five",
//         "six",
//         "seven",
//         "eight",
//         "nine",
//         "ten",
//         "eleven",
//         "twelve",
//         "thirteen",
//         "fourteen",
//         "fifteen",
//         "sixteen",
//         "seventeen",
//         "eighteen",
//         "nineteen",
//         "twenty",
//         "twenty one",
//         "twenty two",
//         "twenty three",
//         "twenty four",
//         "twenty five",
//         "twenty six",
//         "twenty seven",
//         "twenty eight",
//         "twenty nine",
//     ];

//     let result;

//     if (m == 0) {
//         result = `${nums[h]} o' clock`;
//     } else if (m == 1) {
//         result = `one minute past ${nums[h]}`;
//     } else if (m == 59) {
//         result = `one minute to ${nums[(h % 12) + 1]}`;
//     } else if (m == 15) {
//         result = `quarter past ${nums[h]}`;
//     } else if (m == 30) {
//         result = `half past ${nums[h]}`;
//     } else if (m == 45) {
//         result = `quarter to ${nums[(h % 12) + 1]}`;
//     } else if (m <= 30) {
//         result = `${nums[m]} minutes past ${nums[h]}`;
//     } else if (m > 30) {
//         result = `${nums[60 - m]} minutes to ${nums[(h % 12) + 1]}`;
//     }

//     return result;
// }

// console.log(timeInWords(5, 47));

// camelcase

// function camelcase(s) {
//     let result = 0;

//     let arr = s.split("");

//     console.log(arr);

//     arr.forEach((el, i) => {
//         if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
//             result++;
//         }
//     });

//     return result + 1;
// }

// console.log(camelcase("saveChangesInTheEditor"));

// picking-numbers

// let result = {};
// candles.forEach((el) => {
//     result[el] = (result[el] || 0) + 1;
// }); unfinished

// pangrams

// function pangrams(s) {
//     let set = new Set(s.toLowerCase().split(""));
//     return set.size == 27 ? "pangram" : "not pangram";
// }

// console.log(pangrams("We promptly judged antique ivory buckles for the next prize"));

// weighted-uniform-string

// function weightedUniformStrings(string, queries) {
//     let arr = string.split("");

//     let val = string.charCodeAt(0) - 96;
//     let index = 0;
//     let chunks = [[]];
//     for (let i = 0; i < arr.length; i++) {
//         if (string.charCodeAt(i) - 96 === val) {
//             chunks[index].push((string.charCodeAt(i) - 96) * (chunks[index].length + 1));
//         } else {
//             index++;
//             chunks[index] = [string.charCodeAt(i) - 96];
//             val = string.charCodeAt(i) - 96;
//         }
//     }

//     // console.log(chunks);

//     let combined = chunks.flat();

//     let result = [];

//     queries.forEach((el) => {
//         result.push(combined.includes(el) ? "Yes" : "No");
//     });

//     return result;
// }

// console.log(weightedUniformStrings("abccddde", [1, 3, 12, 5, 9, 10]));

// jumping-on-the-clouds-revisited

// function jumpingOnClouds(arr, num) {
//     let result = 100;

//     let temp = (arr.length % num) * num == 0 ? 1 : (arr.length % num) * num;

//     for (let i = 0; i < temp; i++) {
//         for (let j = 0 + i; j < arr.length; j += num) {
//             if (arr[j] == 1) {
//                 result -= 3;
//             } else {
//                 result -= 1;
//             }
//         }
//     }

//     return result;
// }

// console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));

// find-digits

// function findDigits(num) {
//     let result = 0;

//     let arr = num
//         .toString()
//         .split("")
//         .map((el) => parseInt(el));

//     arr.forEach((el) => {
//         if (num % el == 0) {
//             result++;
//         }
//     });

//     return result;
// }

// console.log(findDigits(124));

// extra-long-factorials

// function extraLongFactorials(num) {
//     let result = BigInt(1);
//     for (let i = 1; i <= num; i++) {
//         result *= BigInt(i);
//     }
//     console.log(result.toString());
// }

// console.log(extraLongFactorials(25));

// sherlock-and-squares

// function squares(lower, upper) {
//     let result = 0;
//     for (let i = lower; i <= upper; i += 1) {
//         if (Number.isInteger(Math.sqrt(i))) {
//             result++;
//             i += Math.floor(Math.sqrt(i) * 2);
//         }
//     }
//     return result;
// }

// console.log(squares(3, 9));

// library-fine

// function libraryFine(d1, m1, y1, d2, m2, y2) {
//     let fine = 0;

//     let daysFine = d1 - d2 <= 0 ? 0 : (d1 - d2) * 15;
//     let monthsFine = m1 - m2 <= 0 ? 0 : (m1 - m2) * 500;
//     let yearFine = y1 - y2 <= 0 ? 0 : 10000;

//     if (yearFine != 0) {
//         fine = yearFine;
//     } else if (monthsFine != 0) {
//         fine = monthsFine;
//     } else if (daysFine != 0) {
//         fine = daysFine;
//     }

//     return fine;
// }

// console.log(libraryFine(6, 0, 2000, 7, 0, 2000));

// equality-in-a-array

// function equalizeArray(arr) {
//     let counts = {};
//     arr.forEach((el) => {
//         counts[el] = (counts[el] || 0) + 1;
//     });

//     return arr.length - Math.max(...Object.values(counts));
// }

// console.log(equalizeArray([3, 3, 2, 1, 3]));
