function calculatePerimeter(arr) {
    let per = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === "X") {
                if (j >= arr[i].length - 1 || arr[i][j + 1] === "O") {
                    per += 1
                }
                if (i >= arr.length - 1 || arr[i + 1][j] === "O") {
                    per += 1
                }
                if (j <= 0 || arr[i][j - 1] === "O") {
                    per += 1
                }
                if (i <= 0 || arr[i - 1][j] === "O") {
                    per += 1
                }
            }
        }
    }

    return per;
}

console.log(calculatePerimeter(['XOOXO', 'XOOXO', 'OOOXO', 'XXOXO', 'OXOOO']))
console.log(calculatePerimeter(['XOOO', 'XOXO', 'XOXO', 'OOXX', 'OOOO']))