// #1

// class Time {
//     constructor(hh, mm, ss) {
//         this.hh = hh;
//         this.mm = mm;
//         this.ss = ss;
//     }

//     getTime() {
//         return `${this.hh}:${this.mm}:${this.ss}`;
//     }
//     addSec(sec) {
//         let timeArr = fromSec(toSec(this.hh, this.mm, this.ss) + sec);
//         this.hh = timeArr[0];
//         this.mm = timeArr[1];
//         this.ss = timeArr[2];
//     }
//     addMin(min) {
//         let timeArr = fromSec(toSec(this.hh, this.mm, this.ss) + min * 60);
//         this.hh = timeArr[0];
//         this.mm = timeArr[1];
//         this.ss = timeArr[2];
//     }
//     addHours(hours) {
//         let timeArr = fromSec(toSec(this.hh, this.mm, this.ss) + hours * 60 * 60);
//         this.hh = timeArr[0];
//         this.mm = timeArr[1];
//         this.ss = timeArr[2];
//     }
// }

// function toSec(hh, mm, ss) {
//     return ss + mm * 60 + hh * 60 * 60;
// }

// function fromSec(sec) {
//     let hh = sec / 60 / 60;
//     let mm = (hh - Math.floor(hh)) * 60;
//     let ss = (mm - Math.floor(mm)) * 60;
//     return [Math.floor(hh), Math.floor(mm), Math.floor(ss)];
// }

// let time = new Time(14, 34, 27);

// console.log(time.getTime());
// time.addSec(122);
// console.log(time.getTime());

// #2

// const randNum = Math.floor(Math.random() * 10 + 1);

// let num = -10;

// while (num != randNum) {
//     if (num == -10) {
//         alert("Guess the number from 1 to 10");
//     } else if (num > randNum) {
//         alert("Lower");
//     } else if (num < randNum) {
//         alert("Higher");
//     }

//     num = +prompt("Number");
// }

// alert("You Won!");
