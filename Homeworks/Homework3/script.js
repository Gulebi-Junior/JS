let phones = [
    {
        name: "IPhone",
        model: "10",
        price: 4353,
    },
    {
        name: "Samsung",
        model: "s20",
        price: 2654,
    },
    {
        name: "Xiaomi",
        model: "note 10",
        price: 2295,
    },
    {
        name: "Xiaomi",
        model: "note 9",
        price: 1954,
    },
    {
        name: "IPhone",
        model: "12",
        price: 5342,
    },
];

const rangeStart = 2100;
const rangeEnd = 4400;

// Asks the user

// for (let i = 0; i < 5; i++) {
//     let size = prompt("Name");
//     let type = prompt("Model");
//     let price = +prompt("Price");
//     phones.push({ size, type, price });
// }

// const rangeStart = +prompt("Range Start");
// const rangeEnd = +prompt("Range End");

for (let i = 0; i < phones.length; i++) {
    if (phones[i].price > rangeStart && phones[i].price < rangeEnd) {
        console.log(phones[i]);
    }
}
