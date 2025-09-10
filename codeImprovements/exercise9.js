// function calculateMatrixSum(matrix) {
//   var sum = 0;
//   for (var i = 0; i < matrix.length; i++)
//     for (var j = 0; j < matrix[i].length; j++)
//       sum += matrix[i][j];
//   return sum;
// }

function calculateMatrixSum(matrix) {
  let totalSum = 0;
  
  for (let row of matrix) {
    for (let num of row) {
      totalSum += num;
    }
  }
  
  return totalSum;
}
// Example usage:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(calculateMatrixSum(matrix));
// Output: 45