let emailInput = document.querySelector("#email-input");
let passwordInput = document.querySelector("#password-input");
let nameInput = document.querySelector("#name-input");
let surnameInput = document.querySelector("#surname-input");
let ageInput = document.querySelector("#age-input");
let signUpBtn = document.querySelector("#sign-up-btn");

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validateAge = (age) => {
    return String(age).match(/^[1-9][0-9]?$|^100$/);
};

signUpBtn.addEventListener("click", (event) => {
    let id = Math.random().toString(16).slice(9);
    if (
        emailInput.value == "" ||
        passwordInput.value == "" ||
        nameInput.value == "" ||
        surnameInput.value == "" ||
        ageInput.value == ""
    ) {
        console.log("Empty!");
        return;
    }

    if (!validateEmail(emailInput.value)) {
        console.log("Incorrect email!");
        return;
    }
    if (!validateAge(ageInput.value)) {
        console.log("Incorrect age!");
        return;
    }

    let info = {
        // id,
        email: emailInput.value,
        password: passwordInput.value,
        name: nameInput.value,
        surname: surnameInput.value,
        age: ageInput.value,
        theme: {
            bg: {
                name: "white",
                color: "#fff",
            },
            text: {
                name: "white",
                color: "#fff",
            },
        },
    };

    let usersArr = [];

    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", "");
    } else {
        usersArr = JSON.parse(localStorage.getItem("users"));
    }

    if (!usersArr[0] == "") {
        let user = usersArr.find((el) => {
            return el.email == info.email;
        });

        if (user) {
            console.log("Already exists!");
            return;
        }
    }

    usersArr.push(info);

    localStorage.setItem("users", JSON.stringify(usersArr));

    window.location.replace("./main.html");
});
