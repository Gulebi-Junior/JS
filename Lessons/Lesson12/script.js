// class Building {
//     constructor(height, width, numberOfFloors) {
//         this.height = height;
//         this.width = width;
//         this.numberOfFloors = numberOfFloors;
//     }
// }

// class School extends Building {
//     constructor(height, width, numberOfFloors, numberOfStudents) {
//         super(height, width, numberOfFloors);
//         this.numberOfStudents = numberOfStudents;
//     }
//     getInfo() {
//         return {
//             height: this.height,
//             width: this.width,
//             numberOfFloors: this.numberOfFloors,
//             numberOfStudents: this.numberOfStudents,
//         };
//     }
// }

// class Office extends Building {
//     constructor(height, width, numberOfFloors, numberOfEmployees) {
//         super(height, width, numberOfFloors);
//         this.numberOfEmployees = numberOfEmployees;
//     }
//     getInfo() {
//         return {
//             height: this.height,
//             width: this.width,
//             numberOfFloors: this.numberOfFloors,
//             numberOfEmployees: this.numberOfEmployees,
//         };
//     }
// }

// const office = new Office(100, 30, 25, 300);
// console.log("Office Info:");
// console.log(office.getInfo());

// const school = new School(40, 60, 6, 200);
// console.log("School Info:");
// console.log(school.getInfo());

class MyString {
    reverse(string) {
        return string.split("").reverse().join("");
    }
    ucFirst(string) {
        return string[0].toUpperCase() + string.slice(1);
    }
    ucWords(string) {
        return string
            .split(" ")
            .map((el) => el[0].toUpperCase() + el.slice(1))
            .join(" ");
    }
}

const myString = new MyString();

console.log(myString.reverse("ivanov gleb"));
console.log(myString.ucFirst("ivanov gleb"));
console.log(myString.ucWords("ivanov gleb"));
