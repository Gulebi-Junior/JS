let currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser || currentUser.email == "") {
    window.location.replace("./login.html");
}

if (currentUser.remember == false) {
    localStorage.setItem("currentUser", JSON.stringify({ email: "" }));
}

let usersArr = JSON.parse(localStorage.getItem("users"));

let user = usersArr.find((el) => {
    return el.email == currentUser.email;
});

document.querySelector("#name-text").textContent = user.name;
document.querySelector("#surname-text").textContent = user.surname;
document.querySelector("#age-text").textContent = user.age;

document.querySelector("#logout-btn").addEventListener("click", (event) => {
    localStorage.setItem("currentUser", JSON.stringify({ email: "" }));
    window.location.replace("./login.html");
});

document.querySelector("#delete-btn").addEventListener("click", (event) => {
    localStorage.setItem("currentUser", JSON.stringify({ email: "" }));

    const index = usersArr.indexOf(user);
    if (index > -1) {
        usersArr.splice(index, 1);
    }

    localStorage.setItem("users", JSON.stringify(usersArr));
    window.location.replace("./login.html");
});

// change

const changeValue = (valueName) => {
    let newValue = document.querySelector(`#new-${valueName}`);
    let text = document.querySelector(`#${valueName}-text`);

    if (!newValue.value) return;

    const index = usersArr.indexOf(user);

    user[valueName] = newValue.value;
    text.textContent = user[valueName];
    newValue.value = "";

    usersArr[index] = user;

    localStorage.setItem("users", JSON.stringify(usersArr));
    createTable(usersArr);
};

document.querySelectorAll(".change-btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
        switch (event.target.id) {
            case "change-name-btn":
            case "change-surname-btn":
            case "change-age-btn":
                changeValue(event.target.id.split("-")[1]);
                break;
        }
    });
});

let tbody = document.querySelector("tbody");
let template = document.querySelector("#table-row-template");

const createTable = (arr) => {
    tbody.innerHTML = "";
    arr.forEach((user) => {
        let clone = template.content.cloneNode(true);
        let td = clone.querySelectorAll("td");

        td[0].textContent = user.name;
        td[1].textContent = user.surname;
        td[2].textContent = user.age;

        tbody.appendChild(clone);
    });
};

createTable(usersArr);

let searchBtn = document.querySelector("#search-btn");
let clearBtn = document.querySelector("#clear-btn");
let searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", (event) => {
    let foundUsers = usersArr.filter((el) => {
        if (
            el.name.search(searchInput.value) != -1 ||
            el.surname.search(searchInput.value) != -1 ||
            el.age.search(searchInput.value) != -1
        ) {
            return true;
        } else {
            return false;
        }
    });

    createTable(foundUsers);
});

clearBtn.addEventListener("click", (event) => {
    searchInput.value = "";
    createTable(usersArr);
});

let calcBtn = document.querySelector("#header-calc-btn");
let calculator = document.querySelector("#calculator");
let calcInput = document.querySelector("#calc-input");
let calcHidden = true;

function calc(o) {
    if (o == "=") {
        try {
            let result = eval(calcInput.textContent);
            if (result.toString().length < 13) {
                calcInput.textContent = Math.round(result * 1000) / 1000;
            } else {
                calcInput.textContent = result.toFixed(3).toString().slice(0, 13);
            }
        } catch (error) {
            console.log(error);
            calcInput.textContent = "false";
        }

        return;
    } else if (o == "clear") {
        calcInput.textContent = "0";
        return;
    }
    if (calcInput.textContent == "0" && o != ".") {
        calcInput.textContent = "";
    }
    if (calcInput.textContent.length + 1 > 13) {
        return;
    }
    calcInput.textContent += o;
}

calcBtn.addEventListener("click", (event) => {
    if (calcHidden == true) {
        calculator.style.transform = "translateX(-350px)";
        calcHidden = false;
    } else if (calcHidden == false) {
        calculator.style.transform = "translateX(350px)";
        calcHidden = true;
    }
});

let body = document.querySelector("body");
let colorBtn = document.querySelector("#header-color-btn");
let palette = document.querySelector("#color-palette");
let bgColorColumn = document.querySelector("#background-color-column");
let textColorColumn = document.querySelector("#text-color-column");
let colorBlockTemplate = document.querySelector("#color-block-template");
let colors = [];
let paletteHidden = true;

colorBtn.addEventListener("click", (event) => {
    if (paletteHidden == true) {
        palette.style.transition = "1s";
        palette.style.transform = "translateX(550px)";
        setTimeout(() => {
            palette.style.transition = "0s";
        }, 1000);

        paletteHidden = false;
    } else if (paletteHidden == false) {
        palette.style.transition = "1s";
        palette.style.transform = "translateX(-550px)";
        setTimeout(() => {
            palette.style.transition = "0s";
        }, 1000);
        paletteHidden = true;
    }

    if (colors.length == 0) {
        let xhr = new XMLHttpRequest();

        xhr.open("GET", "https://reqres.in/api/unknown");

        xhr.responseType = "json";

        xhr.send();

        xhr.onload = () => {
            addColorPalette(xhr);
        };
    }
});

const addColorPalette = (xhr) => {
    let array = xhr.response.data;
    array.push({ id: 7, name: "default", color: "#fff" });
    array.forEach((el) => {
        colors.push({ name: el.name, color: el.color });

        addColorBtn(el, "bg");
        addColorBtn(el, "text");
    });
};

const addColorBtn = (el, type) => {
    let clone = colorBlockTemplate.content.cloneNode(true);
    let h3 = clone.querySelector("h3");
    let block = clone.querySelector(".color-block");

    h3.textContent = el.name;
    block.style.backgroundColor = el.color;

    let styleEl = type == "bg" ? "backgroundColor" : "color";

    h3.addEventListener("click", (event) => {
        body.style[styleEl] =
            type == "bg"
                ? event.path[1].style.backgroundColor
                : el.name != "default"
                ? event.path[1].style.backgroundColor
                : "black";

        const index = usersArr.indexOf(user);

        user.theme[type] = { name: event.path[0].textContent, color: event.path[1].style.backgroundColor };

        usersArr[index] = user;
        localStorage.setItem("users", JSON.stringify(usersArr));
    });

    if (type == "bg") {
        bgColorColumn.appendChild(clone);
    } else {
        textColorColumn.appendChild(clone);
    }
};

body.style.backgroundColor = user.theme.bg.color;
body.style.color = user.theme.text.name != "default" ? user.theme.text.color : "black";
