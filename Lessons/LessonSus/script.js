if (window.location.href.endsWith("login.html")) {
    let emailInputValue = document.querySelector("#email-input").value;
    let passwordInputValue = document.querySelector("#password-input").value;
    let checkboxChecked = document.querySelector("#checkbox").checked;
    let loginBtn = document.querySelector("#login-btn");

    loginBtn.addEventListener("click", (event) => {
        if (emailInputValue == "" || passwordInputValue == "") {
            console.log("Empty!");
            return;
        }

        let info = { email: emailInputValue, password: passwordInputValue, remember: checkboxChecked };

        let localInfo = JSON.parse(localStorage.getItem(info.email));

        if (info.email === localInfo.email && info.password === localInfo.password) {
            localStorage.setItem("currentUser", JSON.stringify({ email: info.email, remember: info.remember }));
            window.location.replace("./main.html");
        } else {
            console.log("Incorrect email or password!");
        }
    });
} else if (window.location.href.endsWith("registration.html")) {
    let emailInputValue = document.querySelector("#email-input").value;
    let passwordInputValue = document.querySelector("#password-input").value;
    let nameInputValue = document.querySelector("#name-input").value;
    let surnameInputValue = document.querySelector("#surname-input").value;
    let ageInputValue = document.querySelector("#age-input").value;
    let signUpBtn = document.querySelector("#sign-up-btn");

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    signUpBtn.addEventListener("click", (event) => {
        let id = Math.random().toString(16).slice(9);
        if (
            emailInputValue == "" ||
            passwordInputValue == "" ||
            nameInputValue == "" ||
            surnameInputValue == "" ||
            ageInputValue == ""
        ) {
            console.log("Empty!");
            return;
        }

        if (!validateEmail(emailInputValue)) {
            console.log("Incorrect email!");
            return;
        }

        let info = {
            // id,
            email: emailInputValue,
            password: passwordInputValue,
            name: nameInputValue,
            surname: surnameInputValue,
            age: ageInputValue,
        };

        let email = localStorage.getItem(info.email);

        if (email) {
            console.log("Already exists!");
            return;
        }

        localStorage.setItem(info.email, JSON.stringify(info));

        window.location.replace("./main.html");
    });
} else if (window.location.href.endsWith("main.html")) {
    let nameText = document.querySelector("#name-text");
    let surnameText = document.querySelector("#surname-text");
    let ageText = document.querySelector("#age-text");
    let logoutBtn = document.querySelector("#logout-btn");
    let deleteBtn = document.querySelector("#delete-btn");

    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser || currentUser.email == "") {
        window.location.replace("./login.html");
    }

    if (currentUser.remember == false) {
        localStorage.setItem("currentUser", JSON.stringify({ email: "" }));
    }

    let info = JSON.parse(localStorage.getItem(currentUser.email));

    nameText.textContent = info.name;
    surnameText.textContent = info.surname;
    ageText.textContent = info.age;

    logoutBtn.addEventListener("click", (event) => {
        localStorage.setItem("currentUser", JSON.stringify({ email: "" }));
        window.location.replace("./login.html");
    });

    deleteBtn.addEventListener("click", (event) => {
        localStorage.setItem("currentUser", JSON.stringify({ email: "" }));
        localStorage.removeItem(info.email);
    });

    let changeBtns = document.querySelectorAll(".change-btn");

    changeBtns.forEach((btn) => {
        console.log(btn.id);
    });

    let changeNameBtn = document.querySelector("#change-name-btn");
    let changeSurnameBtn = document.querySelector("#change-surname-btn");
    let changeAgeBtn = document.querySelector("#change-age-btn");

    let newName = document.querySelector("#new-name");
    let newSurname = document.querySelector("#new-surname");
    let newAge = document.querySelector("#new-age");

    changeNameBtn.addEventListener("click", (event) => {
        if (!newName.value) {
            return;
        }

        let info = JSON.parse(localStorage.getItem(currentUser.email));

        info.name = newName.value;
        nameText.textContent = info.name;
        newName.value = "";

        localStorage.setItem(info.email, JSON.stringify(info));
    });

    changeSurnameBtn.addEventListener("click", (event) => {
        if (!newSurname.value) {
            return;
        }

        let info = JSON.parse(localStorage.getItem(currentUser.email));

        info.surname = newSurname.value;
        surnameText.textContent = info.surname;
        newSurname.value = "";

        localStorage.setItem(info.email, JSON.stringify(info));
    });

    changeAgeBtn.addEventListener("click", (event) => {
        if (!newAge.value) {
            return;
        }

        let info = JSON.parse(localStorage.getItem(currentUser.email));

        info.age = newAge.value;
        ageText.textContent = info.age;
        newAge.value = "";

        localStorage.setItem(info.email, JSON.stringify(info));
    });
}
