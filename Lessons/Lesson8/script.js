// function obj2arr(object) {
//     let result = [];
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             result.push([key, object[key]]);
//         }
//     }
//     return result;
// }

// console.log(obj2arr({ name: "IPhone", number: 10, price: 658 }));

// function deleteKey(object, excessKey) {
//     return Object.fromEntries(Object.entries(object).filter(([key]) => key != excessKey));
// }

// console.log(deleteKey({ name: "IPhone", number: 10, price: 658 }, "price"));

let obj1 = { name: "Gleb", surname: "Ivanov", age: 15 };
let obj2 = { surname: "Ivanov", name: "Gleb", age: 15 };

let areEqual = (obj1, obj2) => {
    let length1 = Object.entries(obj1).length;
    let length2 = Object.entries(obj2).length;

    let entries1 = Object.entries(obj1);
    let entries2 = Object.entries(obj2);

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    let values1 = Object.values(obj1);
    let values2 = Object.values(obj2);

    if (length1 != length2) {
        return false;
    }

    // for (let i = 0; i < length1; i++) {
    //     if (keys1[i] != keys2[i]) {
    //         return false;
    //     }
    //     if (values1[i] != values2[i]) {
    //         return false;
    //     }
    // }

    for (let i = 0; i < length1; i++) {
        if (!entries1.some((a) => entries2[i].every((v, i) => v === a[i]))) {
            return false;
        }

        // if (!keys1.includes(keys2[i])) {
        //     return false;
        // }
        // if (!values1.includes(values2[i])) {
        //     return false;
        // }
    }

    return true;
};

console.log(areEqual(obj1, obj2));
