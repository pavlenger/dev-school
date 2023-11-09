console.log("Sum of multiples: " + sumMultiples(10))

// Sum of multiples of 3 or 5
function sumMultiples(num) {
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (i % 3 !== 0 && i % 5 !== 0) continue;
        sum += i;
    }

    return sum;
}


