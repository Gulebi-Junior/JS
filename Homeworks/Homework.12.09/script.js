// class User {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     getFullName() {
//         return `${this.name} ${this.surname}`;
//     }
// }

// class Student extends User {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//     getCourse() {
//         let date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// let student = new Student("Gleb", "Ivanov", 2020);

// console.log(student.getCourse());

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     getWidth() {
//         return this.width;
//     }
//     getHeight() {
//         return this.height;
//     }
//     setWidth(newWidth) {
//         this.width = newWidth;
//     }

//     setHeight(newHeight) {
//         this.height = newHeight;
//     }
// }

// let rect = new Rectangle(15, 12);

// rect.setWidth(20);
// console.log(rect.getWidth());
