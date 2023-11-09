function sortNum(num) {
    let strOfNum = num.toString();
    let length = strOfNum.length;
    let finalNum = "";

    for (let i = 0; i < length; i++) {
        let max = -Infinity;
        for (let j = 0; j < strOfNum.length; j++) {
            max = Math.max(max, +strOfNum[j])
        }
        strOfNum = strOfNum.replace(max.toString(), "");
        finalNum += max;
    }

    return Number(finalNum);
}

console.log(sortNum(42145))
console.log(sortNum(145263))
console.log(sortNum(123456789))