function hypotenuse(sideA: number, sideB: number): number {
    let sum = Math.pow(sideA, 2) + Math.pow(sideB, 2);
    return Math.sqrt(sum);
    
    // return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  }
  
  console.log();
  console.log("hypotenuse(3, 4) => " + hypotenuse(3, 4).toFixed(1));
  console.log("hypotenuse(12, 8) => " + hypotenuse(12, 8).toFixed(2));
  console.log("hypotenuse(9, 16) => " + hypotenuse(9, 16).toFixed(2));
  console.log();
