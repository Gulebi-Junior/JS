let blocks = document.querySelector("#color-blocks");
let template = document.querySelector("#color-block-template");
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://reqres.in/api/unknown");

xhr.responseType = "json";

xhr.send();

xhr.onload = () => {
    let responseObj = xhr.response;
    responseObj.data.forEach((el) => {
        let clone = template.content.cloneNode(true);
        let h3 = clone.querySelector("h3");
        let block = clone.querySelector(".color-block");

        h3.textContent = el.name;
        block.style.backgroundColor = el.color;

        h3.addEventListener("click", (event) => {
            let newColor = prompt("New color:");

            h3.textContent = newColor;
            block.style.backgroundColor = newColor;
        });

        blocks.appendChild(clone);
    });
};
