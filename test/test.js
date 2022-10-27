// import { a } from "./test2.js";

// console.log(a);

var arr = [{}, {}, {}];
for (var i = 0; i < arr.length; i++) {
    console.log(i);
    arr[i].saySmth = function () {
        console.log(i);
    };
    // arr[i].saySmth();
}

console.log(arr[2]);
arr[2].saySmth();
