function change(cents: number): number[] {
  let quarters = Math.floor(cents / 25);
  cents = cents % 25;
  let dimes = Math.floor(cents / 10);
  cents = cents % 10;
  let nickels = Math.floor(cents / 5);
  cents = cents % 5;
  return [quarters, dimes, nickels, cents];
}

function reportChange(cents: number): void {
    let coins = change(cents);
    console.log();
    console.log("Change for " + cents + " cents: ");
    console.log("\tQuarters: " + coins[0]);
    console.log("\tDimes: " + coins[1]);
    console.log("\tNickels: " + coins[2]);
    console.log("\tPennies: " + coins[3]);
    console.log();
}

reportChange(89);
reportChange(37);
reportChange(5);
reportChange(68);
reportChange(99);
