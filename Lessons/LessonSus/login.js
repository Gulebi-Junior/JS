let emailInput = document.querySelector("#email-input");
let passwordInput = document.querySelector("#password-input");
let checkbox = document.querySelector("#checkbox");
let loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", (event) => {
    if (emailInput.value == "" || passwordInput.value == "") {
        console.log("Empty!");
        return;
    }

    let info = { email: emailInput.value, password: passwordInput.value, remember: checkbox.checked };

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

        if (!user) {
            console.log("Not exists!");
            return;
        }

        if (info.email === user.email && info.password === user.password) {
            localStorage.setItem("currentUser", JSON.stringify({ email: info.email, remember: info.remember }));
            window.location.replace("./main.html");
        } else {
            console.log("Incorrect email or password!");
        }
    }
});
