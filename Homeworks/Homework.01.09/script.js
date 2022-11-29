// function less(num1, num2) {
//     if (num1 < num2) {
//         return -1;
//     } else if (num1 > num2) {
//         return 1;
//     } else if (num1 == num2) {
//         return 0;
//     }
// }

// console.log(less(4, 4));

// function fac(num) {
//     let result = num;
//     for (let i = 1; i < num; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(fac(5));

// function conc(...num) {
//     return num.join("");
// }

// console.log(conc(4, 6, 8));

// function s(a, b) {
//     if (a && b) {
//         return a * b;
//     } else {
//         return a * a;
//     }
// }

// console.log(s(5, 6));

// function perfect(num) {
//     let result = 0;
//     for (let i = num; i >= 0; i--) {
//         if (num % i == 0) {
//             result += i;
//         }
//     }
//     if (result - num == num) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // console.log(perfect(28));

// function perfectRange(start, end) {
//     let result = [];
//     for (let i = start; i <= end; i++) {
//         let isPerfect = perfect(i);
//         if (isPerfect) {
//             result.push(i);
//         }
//     }
//     return result;
// }

// console.log(perfectRange(2, 100));

// function timeConvert(hh, mm, ss) {
//     mm = mm ? mm : "00";
//     ss = ss ? ss : "00";
//     return `${hh}:${mm}:${ss}`;
// }

// console.log(timeConvert(14));

// function toSec(hh, mm, ss) {
//     return ss + mm * 60 + hh * 60 * 60;
// }

// // console.log(toSec(14, 34, 27));

// function fromSec(sec) {
//     let hh = sec / 60 / 60;
//     let mm = (hh - Math.floor(hh)) * 60;
//     let ss = (mm - Math.floor(mm)) * 60;
//     return `${Math.floor(hh)}:${Math.floor(mm)}:${Math.floor(ss)}`;
// }

// // console.log(fromSec(52467));

// function compareDates(hh1, mm1, ss1, hh2, mm2, ss2) {
//     let sec1 = toSec(hh1, mm1, ss1);
//     let sec2 = toSec(hh2, mm2, ss2);
//     let result;
//     if (sec1 > sec2) {
//         result = fromSec(sec1 - sec2);
//     } else {
//         result = fromSec(sec2 - sec1);
//     }
//     return result;
// }

// console.log(compareDates(12, 24, 54, 14, 34, 27));
