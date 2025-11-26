const assert = require("assert");

function add(a, b) {
  return a + b;
}

assert.strictEqual(add(2, 3), 4); // agar yaha galat expected value dogi to test fail ho jayega
console.log("All tests passed!");
