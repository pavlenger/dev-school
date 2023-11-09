function playTowersOfHanoi(nDisks){
    return 2 ** nDisks - 1;
}

console.log(playTowersOfHanoi(2));
console.log(playTowersOfHanoi(5));
console.log(playTowersOfHanoi(7));
console.log(playTowersOfHanoi(10));

