// function findEvenNumbers(numbers) {
//   var evenNumbers = [];
//   for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       evenNumbers.push(numbers[i]);
//     }
//   }
//   return evenNumbers;
// }
const findEvenNumbers=(numbers)=>numbers.filter(number=>number%2===0);
// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findEvenNumbers(numbers));