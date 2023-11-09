function VigenèreCipher(key, abc) {
    let abcLength = abc.length;
    let keyLength = key.length;
    this.encode = function (str) {
        let resultString = '';
        for (let indexOfLetter in str) {
            if (!abc.includes(str[indexOfLetter])) {
                resultString += str[indexOfLetter];
                continue;
            }
            let letterIndexInKey = indexOfLetter % keyLength;
            let letterIndexInABC = abc.indexOf(key[letterIndexInKey]);
            let resultLetterIndexInABC = (abc.indexOf(str[indexOfLetter]) + letterIndexInABC) % abcLength;
            resultString += abc[resultLetterIndexInABC];
        }
        return resultString;
    };
    this.decode = function (str) {
        let resultString = '';
        for (let indexOfLetter in str) {
            if (!abc.includes(str[indexOfLetter])) {
                resultString += str[indexOfLetter];
                continue;
            }
            let letterIndexInABC = abc.indexOf(str[indexOfLetter]);
            let letterKeyIndexInABC = abc.indexOf(key[indexOfLetter % keyLength])
            let shifting = letterIndexInABC - letterKeyIndexInABC;
            resultString += abc[(abcLength + shifting) % abcLength];
        }
        return resultString;
    }
}

let cipherPassword = new VigenèreCipher('password', 'abcdefghijklmnopqrstuvwxyz');

console.log(cipherPassword.encode('it\'s a shift cipher!'));
console.log(cipherPassword.decode('xt\'k o vwixl qzswej!'));