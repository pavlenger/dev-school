let Vector = function (components) {
    this.components = components;
    this.add = (vector) => {
        if (this.components.length !== vector.components.length) throw new Error('vectors with different lengths!');
        let newArray = [];
        for (let componentIndex in this.components) {
            newArray.push(this.components[componentIndex] + vector.components[componentIndex]);
        }
        return new Vector(newArray);
    }
    this.subtract = (vector) => {
        if (this.components.length !== vector.components.length) throw new Error('vectors with different lengths!');
        let newArray = [];
        for (let componentIndex in this.components) {
            newArray.push(this.components[componentIndex] - vector.components[componentIndex]);
        }
        return new Vector(newArray);
    }
    this.dot = (vector) => {
        if (this.components.length !== vector.components.length) throw new Error('vectors with different lengths!');
        let result = 0;
        for (let componentIndex in this.components) {
            result += this.components[componentIndex] * vector.components[componentIndex];
        }
        return result;
    }
    this.norm = () => {
        let result = 0;
        this.components.forEach((element) => {result += element ^ 2})
        return Math.sqrt(result);
    }
    this.toString = () => {
        let finalStr = '(';
        this.components.forEach((element, index) => {
            let addEl = index === this.components.length - 1 ? ')' : ','
            finalStr += element + addEl;
        })
        return finalStr;
    }
    this.equals = (vector) => {
        if (this.components.length !== vector.components.length) return false;
        for (let componentIndex in this.components) {
            if (this.components[componentIndex] !== vector.components[componentIndex]) return false;
        }
        return true
    }
};


var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

console.log(a.add(b));      // should return a new Vector([4, 6, 8])
console.log(a.subtract(b)); // should return a new Vector([-2, -2, -2])
console.log(a.dot(b));      // should return 1*3 + 2*4 + 3*5 = 26
console.log(a.norm());      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
console.log(a.add(c));      // throws an error
console.log(a.toString())

