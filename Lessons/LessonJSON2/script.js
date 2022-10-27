let block = document.querySelector("#cards-block");
let cardTemplate = document.querySelector("#card-template");
let addCardTemplate = document.querySelector("#add-card-template");

function createRequest() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakestoreapi.com/products", false);

    // xhr.responseType = "json";

    xhr.send();

    // let data;

    // xhr.onload = () => {
    //     data = xhr.response;
    //     return data;
    // };

    return JSON.parse(xhr.response);
}

function addNewCardConstructor() {
    block.appendChild(addCardTemplate.content.cloneNode(true));
}

function deleteCard(event) {
    cardsArr.pop(
        cardsArr.find((el) => {
            return event.path[3].querySelector(".card-title").textContent == el.title;
        })
    );
    localStorage.setItem("cards", JSON.stringify(cardsArr));

    event.path[3].remove();
}

function addNewCard(event) {
    let clone = cardTemplate.content.cloneNode(true);

    let info = {
        id: cardsArr.length + 1,
        image: document.querySelector("#image-input").value,
        title: document.querySelector("#title-input").value,
        price: document.querySelector("#price-input").value,
        rating: {
            rate: document.querySelector("#rate-input").value,
            count: document.querySelector("#count-input").value,
        },
    };

    addValues(clone, info);

    cardsArr.push(info);

    localStorage.setItem("cards", JSON.stringify(cardsArr));

    document.querySelector(".new-card").remove();
    addNewCardConstructor();
}

const addCards = (arr) => {
    arr.forEach((el) => {
        let clone = cardTemplate.content.cloneNode(true);

        addValues(clone, el);
    });

    localStorage.setItem("cards", JSON.stringify(cardsArr));

    addNewCardConstructor();
};

const addValues = (clone, info) => {
    clone.querySelector(".card-image").src = URLValidation(info.image)
        ? info.image
        : "https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/red_prodpictxmark_2_1484336301-1.png";
    clone.querySelector(".card-title").textContent = emptyValidation(info.title);
    clone.querySelector(".card-price").textContent = "$" + emptyValidation(info.price);
    clone.querySelector("#rating-1").textContent = emptyValidation(info.rating.count) + " sold";
    clone.querySelector("#rating-2").innerHTML += emptyValidation(info.rating.rate);

    block.appendChild(clone);
};

const URLValidation = (url) => {
    return String(url).match(
        /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/gi
    );
};

const emptyValidation = (str) => {
    return str.length == 0 ? "empty" : str;
};

// code

if (!localStorage.getItem("cards")) {
    localStorage.setItem("cards", "[]");
}

let cardsArr = JSON.parse(localStorage.getItem("cards"));

if (cardsArr.length == 0) {
    cardsArr = createRequest();
    addCards(cardsArr);
} else {
    addCards(cardsArr);
}
