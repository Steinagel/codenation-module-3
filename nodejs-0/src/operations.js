// Recursive function to get fibonacci value by index
const getFibonacciByIndex = (n) => {
  return n < 2 ? n : getFibonacciByIndex(n - 1) + getFibonacciByIndex(n - 2);
};

// Simples way to verify if number is a perfect square
const isSquare = (n) => {
  const l = Math.round(Math.sqrt(n));
  return n == l * l;
};

// Verify if a number is fibonacci or not
const isFibonnaci = (num) => {
  return isSquare(num * num * 5 - 4) || isSquare(num * num * 5 + 4);
};

// Get the array of fibonacci sequence from 0 to the given value plus the next fibonacci number of the sequence
const getFiboSeq = (n) => {
  let seq = [];
  let ind = 0;

  let fib;

  do {
    fib = getFibonacciByIndex(ind++); // This may be slow - getFibonacciByIndex could be inproved (not recursive), but just to show...
    seq.push(fib);
  } while (n >= fib);
  return seq;
};

module.exports = {
  isFibonnaci,
  getFiboSeq,
};
