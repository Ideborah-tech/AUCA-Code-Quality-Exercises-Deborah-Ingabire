// function reverseString(str) {
//   var reversed = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
const reverseString=(str)=> str.split('').reverse().join('');
// Example usage:
const inputString = "Hello, World!";
console.log(reverseString(inputString));