// let video = document.querySelector("video");

// function inside(event) {
//     video.pause();
// }

// function outside(event) {
//     video.play();
// }

let images = [
    {
        id: "0",
        author: "Alejandro Escamilla",
        width: 5616,
        height: 3744,
        url: "https://unsplash.com/photos/yC-Yzbqy7PY",
        download_url: "https://picsum.photos/id/0/5616/3744",
    },
    {
        id: "1",
        author: "Alejandro Escamilla",
        width: 5616,
        height: 3744,
        url: "https://unsplash.com/photos/LNRyGwIJr5c",
        download_url: "https://picsum.photos/id/1/5616/3744",
    },
    {
        id: "10",
        author: "Paul Jarvis",
        width: 2500,
        height: 1667,
        url: "https://unsplash.com/photos/6J--NXulQCs",
        download_url: "https://picsum.photos/id/10/2500/1667",
    },
    {
        id: "100",
        author: "Tina Rataj",
        width: 2500,
        height: 1656,
        url: "https://unsplash.com/photos/pwaaqfoMibI",
        download_url: "https://picsum.photos/id/100/2500/1656",
    },
    {
        id: "1000",
        author: "Lukas Budimaier",
        width: 5626,
        height: 3635,
        url: "https://unsplash.com/photos/6cY-FvMlmkQ",
        download_url: "https://picsum.photos/id/1000/5626/3635",
    },
];

let block = document.querySelector(".images-block");

for (let i = 0; i < images.length; i++) {
    block.innerHTML += `<img src="${images[i].download_url}" width="200px" height="200px" ondragstart="setCurrentDragging(event)">`;
}

let currentDragging;

const setCurrentDragging = (event) => {
    currentDragging = event.target;
};

let target = document.querySelector(".target");

target.addEventListener("dragover", (event) => {
    event.preventDefault();
});

target.addEventListener("drop", (event) => {
    event.target.style.background = `url("${currentDragging.src}")`;
    event.target.style.backgroundSize = "cover";
});
