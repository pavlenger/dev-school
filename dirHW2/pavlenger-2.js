function findN(arr) {
    let res = -1;
    for (let i = 0; i < arr.length; i++) {
        // left side
        let leftSum = 0;
        for (let j = i - 1; j > -1; j--) {
            leftSum += arr[j];
        }

        // right side
        let rightSum = 0;
        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }

        if (rightSum === leftSum) {
            res = i;
            break;
        }
    }

    return res;
}

console.log(findN([0, 0, 0, 0, 0]))

console.log(findN([1, 2, 3, 4, 3, 2, 1]))
console.log(findN([1, 100, 50, -51, 1, 1]))
console.log(findN([20, 10, -80, 10, 10, 15, 35]))