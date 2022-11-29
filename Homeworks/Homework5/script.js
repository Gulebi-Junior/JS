function isPrimeNum(num) {
    let amount = 0;
    if (num > 1) {
        for (let i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                amount++;
            }
            if (amount > 0) {
                break;
            }
        }
        if (amount > 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function isPrimeArr(arr) {
    return arr.filter(isPrimeNum);
}

let array = [15, 61, 48, 44, 29, 3, 69, 25, 62, 96];

console.log(isPrimeArr(array));
