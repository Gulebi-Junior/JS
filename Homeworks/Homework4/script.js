let array = [1, 2, 3, 5, 8, 9, 10];

let newArray = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
        newArray.push({ digit: array[i], odd: true });
    } else {
        newArray.push({ digit: array[i], odd: false });
    }
}

console.log(newArray);
