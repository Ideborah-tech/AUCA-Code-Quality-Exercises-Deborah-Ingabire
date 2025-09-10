
const calculateFactorial = (n) => {
  if (n <= 1) return 1;
    const numbers = [];
  for (let i = 2; i <= n; i++) {
    numbers.push(i);
  }
  
  return numbers.reduce((acc, curr) => acc * curr, 1);
};

