// let label = document.getElementById("label");
// let btn = document.getElementById("btn");
// let clearBtn = document.getElementById("clearBtn");

// label.textContent = localStorage.getItem("count") ? localStorage.getItem("count") : 0;

// clearBtn.addEventListener("click", (event) => {
//     localStorage.setItem("count", 0);
//     label.textContent = localStorage.getItem("count");
// });

// btn.addEventListener("click", (event) => {
//     label.textContent = localStorage.getItem("count");
//     label.textContent++;
//     localStorage.setItem("count", label.textContent);
// });

let colorInput = document.getElementById("color-input");
let typeSelect = document.getElementById("type-select");
let codeInput = document.getElementById("code-input");
let btn = document.getElementById("form-btn");

let template = document.getElementById("library-item-template");
let library = document.getElementById("library-items-block");

if (!localStorage.getItem("values")) {
    localStorage.setItem("values", "[]");
}

let values = JSON.parse(localStorage.getItem("values"));

const addColorBlock = (label, type, code) => {
    let clone = template.content.cloneNode(true);
    let item = clone.querySelector(".library-item");

    item.style.backgroundColor = code;

    let labelText = clone.querySelector(".library-item-label");
    let typeText = clone.querySelector(".library-item-type");
    let codeText = clone.querySelector(".library-item-code");

    labelText.textContent = label.toUpperCase();
    typeText.textContent = type;
    codeText.textContent = code;

    library.appendChild(clone);
};

const validateColor = (type, code) => {
    if (type == "RGB") {
        let result = String(code).match(
            /((?<!\d|\.)([0-9]?[0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?!\d|\.) *[,] *){2}(?<!\d|\.)([0-9]?[0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?!\d|\.)/gi
        )
            ? `rgb(${code})`
            : "error";

        return result;
    } else if (type == "RGBA") {
        let result = String(code).match(
            /((?<!\d|\.)([0-9]?[0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?!\d|\.) *[,] *){3}(?<!\d|\.)([0-9]?[0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?!\d|\.)/gi
        )
            ? `rgba(${code})`
            : "error";

        return result;
    } else if (type == "HEX") {
        let result = String(code).match(/^#(?:[0-9a-f]{3}){1,2}$/gi) ? `${code}` : "error";

        return result;
    }
};

btn.addEventListener("click", (event) => {
    let validResult = validateColor(typeSelect.value, codeInput.value);
    if (validResult == "error") {
        alert("Incorrect color code!");
        return;
    }

    addColorBlock(colorInput.value, typeSelect.value, validResult);

    let obj = {
        label: colorInput.value,
        type: typeSelect.value,
        code: validResult,
    };

    values.push(obj);
    localStorage.setItem("values", JSON.stringify(values));
});

values.forEach((el) => {
    addColorBlock(el.label, el.type, el.code);
});
