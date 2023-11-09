function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i !== 0) continue;
        return false;
    }

    return !(n <= 1)
}

console.log(isPrime(1))
console.log(isPrime(4))
console.log(isPrime(13))
console.log(isPrime(-1))
console.log(isPrime(4))