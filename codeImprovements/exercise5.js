// function calculateFactorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     var factorial = 1;
//     for (var i = 2; i <= n; i++) {
//       factorial *= i;
//     }
//     return factorial;
//   }
// }
const calculateFactorial = (n) => {
  if (n <= 1) return 1;
  
  // Create array [2, 3, 4, ..., n]
  const numbers = [];
  for (let i = 2; i <= n; i++) {
    numbers.push(i);
  }
  
  return numbers.reduce((acc, curr) => acc * curr, 1);
};
// Example usage:
const number = 5;
console.log(calculateFactorial(number));
