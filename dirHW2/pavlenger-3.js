function groupAnagrams(arr) {
    let res = [];
    for (let arrElement of arr) {
        let arr2 = [];
        loop: for (let arrElement1 of arr) {
            if (arrElement.length !== arrElement1.length) continue;
            for (let re of res) {
                for (let reKey of re) {
                    if (reKey === arrElement1) continue loop;
                }
            }
            for (let arrElementKey of arrElement) {
                if (!arrElement1.includes(arrElementKey)) continue loop;
            }
            arr2.push(arrElement1);
        }
        if (arr2.length > 0) res.push(arr2);
    }
    return res;
}

console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]))
