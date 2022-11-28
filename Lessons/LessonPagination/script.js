let currentPage = 0;

let scrollEnabled = false;

const defaultNumOfProducts = 5;
let numOfProducts = 5;

async function getData() {
    await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
            if (!localStorage.getItem("products")) {
                localStorage.setItem("products", JSON.stringify(json));
            }

            // createTable(json.slice(currentPage * 5, currentPage * 5 + 5));
        });
}

function createTable(arr) {
    let tbody = document.querySelector("tbody");
    let template = document.querySelector("#table-row-template");

    tbody.innerHTML = "";
    arr.forEach((product) => {
        let clone = template.content.cloneNode(true);
        let td = clone.querySelectorAll("td");

        td[0].textContent = product.id;
        td[1].textContent = product.title;
        td[2].textContent = product.price;
        td[3].textContent = product.description;
        td[4].textContent = product.category;

        tbody.appendChild(clone);
    });

    addPages();
}

function changePage(num) {
    if (currentPage + num >= Math.ceil(products.length / numOfProducts) || currentPage + num < 0) {
        return;
    } else {
        currentPage += num;
        createTable(products.slice(currentPage * numOfProducts, currentPage * numOfProducts + numOfProducts));
    }
}

function changePageAtOnce(event) {
    let num = event.path[0].textContent - 1;
    currentPage = num;
    createTable(products.slice(currentPage * numOfProducts, currentPage * numOfProducts + numOfProducts));
}

async function getSpecificData(id) {
    await fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => showCard(json));
}

function getMoreInfo(event) {
    document.querySelector("#info-block").innerHTML = "";
    let id = event.path[1].querySelector(".id-data").textContent;
    getSpecificData(id);
}

function showCard(data) {
    let block = document.querySelector("#info-block");
    let cardTemplate = document.querySelector("#card-template");
    let clone = cardTemplate.content.cloneNode(true);

    clone.querySelector(".card-image").src = data.image;
    clone.querySelector(".card-title").textContent = data.title;
    clone.querySelector(".card-price").textContent = "$" + data.price;
    clone.querySelector("#rating-1").textContent = data.rating.count + " sold";
    clone.querySelector("#rating-2").innerHTML += data.rating.rate;

    block.appendChild(clone);
}

function deleteCard(event) {
    event.path[3].remove();
}

function addPages() {
    let pagesBlock = document.querySelector("#main-bottom-pages-block");
    let pageBtnTemplate = document.querySelector("#page-btn-template");

    pagesBlock.innerHTML = "";

    for (let i = 1; i <= Math.ceil(products.length / numOfProducts); i++) {
        let clone = pageBtnTemplate.content.cloneNode(true);
        let btn = clone.querySelector("button");
        btn.textContent = i;
        pagesBlock.appendChild(clone);
    }
}

function sort(key) {
    if (key == "id" || key == "price") {
        if (products[0][key] == Math.max(...products.map((el) => el[key]))) {
            products = products.sort((a, b) => a[key] - b[key]);
        } else {
            products = products.sort((a, b) => b[key] - a[key]);
        }
    } else if (key == "title" || key == "description") {
        if (products[0][key].localeCompare(products[products.length - 1][key]) == 1) {
            products = products.sort((a, b) => a[key].localeCompare(b[key]));
        } else {
            products = products.sort((a, b) => b[key].localeCompare(a[key]));
        }
    } else if (key == "category") {
        currentCategory = null;

        products = JSON.parse(localStorage.getItem("products"));
    }

    createTable(products.slice(currentPage * numOfProducts, currentPage * numOfProducts + numOfProducts));

    // localStorage.setItem("products", JSON.stringify(products));
}

function sortByCategory(event) {
    currentCategory = event.path[0].textContent;

    products = products.filter((el) => el["category"] == currentCategory);

    currentPage = 0;

    createTable(products.slice(currentPage * numOfProducts, currentPage * numOfProducts + numOfProducts));
}

const validateNumber = (str) => {
    return String(str).match(/^\d+$/);
};

function setNumberOfProducts(event) {
    let val = event.path[0].value != "" && event.path[0].value != "0" ? event.path[0].value : defaultNumOfProducts;

    if (!validateNumber(val)) {
        return;
    }

    currentPage = 0;
    numOfProducts = Number(val);

    createTable(products.slice(currentPage * numOfProducts, currentPage * numOfProducts + numOfProducts));
}

// scroll

const handleInfiniteScroll = () => {
    throttle(() => {
        const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

        if (endOfPage) {
            addCards(currentPage + 1);
        }

        if (currentPage === pageCount) {
            removeInfiniteScroll();
        }
    }, 1000);
};

function scrollPage() {
    scrollEnabled = !scrollEnabled;

    document.querySelector("#main-bottom-block").style.display = scrollEnabled ? "none" : "flex";

    numOfProducts = 0;
    numOfProducts = scrollEnabled ? numOfProducts + 10 : defaultNumOfProducts;
    let addingCount = 0;

    console.log(numOfProducts);

    // createTable(products.slice(currentPage * numOfProducts, currentPage * numOfProducts + numOfProducts));
}

// start

getData();

let products = JSON.parse(localStorage.getItem("products"));

let currentCategory = null;

window.onload = () => {
    createTable(products.slice(currentPage * numOfProducts, currentPage * numOfProducts + numOfProducts));
};
