function countingLeaders(arr, d) {
    let res = -Infinity;
    let arrLength = arr.length;
    let k = 0;
    for (let i = 0; i < arrLength / d; i++) {
        let sum = 0;
        for (let j = k; j < arrLength; j += arrLength / d) {
            sum += arr[j];
        }
        res = Math.max(res, sum);
        k++;
    }

    return res;
}

console.log(countingLeaders([1, 2, 3, 4], 2));
console.log(countingLeaders([1, 5, 6, 3, 4, 2], 3));
console.log(countingLeaders([1, 1, 0], 1));