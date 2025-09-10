// function greet(name) {
//   if (name) {
//     return "Hello, " + name + "!";
//   } else {
//     return "Hello!";
//   }
// }

const greet=(name)=> name ? `Hello ${name} !`:`Hello!`;
// Example usage:
console.log(greet("Deborah"));
console.log(greet());
