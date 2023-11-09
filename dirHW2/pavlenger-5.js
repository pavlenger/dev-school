function findRoot(obj, num) {
    let root = null;
    for (const [key, value] of Object.entries(obj)) {
        if (Array.isArray(value) && value.includes(num) || findRoot(value, num)) {
            root = key;
            break;
        }
    }
    return root;
}

object1 = {
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
        }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    }
}
console.log(findRoot(object1, 9))

object2 = {
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
            },
            "fv": [1, 3, 6, 9]
        },
        "rmk": {
            "amr": [50, 50, 100, 150, 250]
        }
    },
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29]
    }
}
console.log(findRoot(object2, 250))
console.log(findRoot(object2, 116))
console.log(findRoot(object2, 111))
console.log(findRoot(object2, 999))