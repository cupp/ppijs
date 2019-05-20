function double(x: number): number {
  return 2 * x;
}

const triple = function(x: number): number {
  return 3 * x;
}

const magnify = function(x: number, factor: number = 2): number {
  return x
}

console.log();
console.log("double(6) -> " + double(6));
console.log("triple(8) -> " + triple(8));
console.log("magnify(9) -> " + magnify(9));
console.log("magnify(6, 4) -> " + magnify(6, 4));
console.log("double(7, 5) -> " + magnify(7, 5));
console.log();