// Slower solution
const addUpToSlower = (n) => {
  let total = 0;
  for (i = 0; i <= n; i++) {
    total += i;
  }

  return total;
};

// Faster solution

const addUpToFaster = (n) => (n * (n + 1)) / 2;

console.log(addUpToSlower(10));
console.log(addUpToFaster(10));
