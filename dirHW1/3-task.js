console.log(findNb(1071225))
console.log(findNb(91716553919377))

function findNb(m) {
    let sum = 0;
    let i = 1;
    let n = -1;

    while (sum < m) {
        sum += i ** 3;
        if (sum === m) n = i;
        i++;
    }

    return n;
}