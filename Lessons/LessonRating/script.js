const rating = 2.6;

document.querySelectorAll(".rating-image").forEach((image, index) => {
    let percent = rating - index;

    if (percent >= 1) {
        image.style.background = `linear-gradient(90deg, #ffc404 100%, #ffffff 0%)`;
    } else if (percent > 0) {
        image.style.background = `linear-gradient(90deg, #ffc404 ${percent * 100}%, #ffffff 0%)`;
    }
});

// const rating = 3;

// let circle = document.querySelector(".rating-circle");
// circle.style.background = `conic-gradient(#ffc404 ${(rating / 5) * 360}deg, #ffffff 0deg)`;
// circle.textContent = rating.toFixed(1);

// let line = document.querySelector(".line");

// function slider(value, event) {
//     // line.style.height = 100 + Math.abs((value - 100) / 10 + 5) + "px";
//     // console.log(Math.abs((value - 100) / 10 + 5));

//     line.style.transform = `rotate(${(Number(value) - 50) / 2}deg)`;
// }
