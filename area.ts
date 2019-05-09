// !ts-node

const area = (length: number, width: number) => {
    return length * width;
}

const perimeter = (length: number, width: number) => {
    return 2 * (length + width);
}

let a = area(3.5, 4.2);
let b = perimeter(3.5, 4.2);
console.log("a = " + a.toFixed(1));
console.log("b = " + b.toFixed(1));