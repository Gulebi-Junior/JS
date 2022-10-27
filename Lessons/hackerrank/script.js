// function catAndMouse(catA, catB, mouse) {
//     let between_catA_and_mouse = Math.abs(catA - mouse);
//     let between_catB_and_mouse = Math.abs(catB - mouse);

//     if (between_catA_and_mouse < between_catB_and_mouse) {
//         return "Cat A";
//     } else if (between_catA_and_mouse > between_catB_and_mouse) {
//         return "Cat B";
//     } else if (between_catA_and_mouse == between_catB_and_mouse) {
//         return "Mouse C";
//     }
// }

// console.log(catAndMouse(1, 3, 2));

function saveThePrisoner(np, ns, s) {
    if (ns + (s - 1) > np) {
        return ns + (s - 1) - np + 1;
    }
    if (ns < np - s) {
        // s = s % ns;
    }
    // if (np < ns) {
    //     ns = ns % np;
    // }
    return ns + (s - 1);
}

console.log(saveThePrisoner(10, 7, 8));
