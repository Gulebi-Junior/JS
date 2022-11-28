async function doStuff() {
    let response = await fetch("https://fakestoreapi.com/products");

    let json = await response.json();

    let prices = [];

    json.forEach((el) => {
        prices.push(el);
    });

    prices.sort((a, b) => a.price - b.price);

    console.log(prices.slice(-5));
}

doStuff();
