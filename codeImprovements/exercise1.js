// function calculateAverage(numbers) {
//   var sum = 0;
//   var count = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     count++;
//   }
//   var average = sum / count;
//   return average;
// }
const calculateAverage = (numbers) => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
// Example usage:
const numbers = [10, 20, 30, 40, 50];
console.log(calculateAverage(numbers));
