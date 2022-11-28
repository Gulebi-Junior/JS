let set = new Set([2, 6, 4, 9]);

const getIndex = (set, element) => {
    let index = 0;
    try {
        set.forEach((el) => {
            if (el === element) {
                throw "found";
            }
            index++;
        });
    } catch (result) {
        console.log(result);
    }

    return index;
};

console.log(getIndex(set, 4));
