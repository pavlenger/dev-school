function highAndLow(string) {
    let newStr = string.split(" ");
    let max = -Infinity;
    let min = Infinity;

    for (let i of newStr) {
        max = Math.max(max, +i);
        min = Math.min(min, +i);
    }

    return max + " " + min;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));