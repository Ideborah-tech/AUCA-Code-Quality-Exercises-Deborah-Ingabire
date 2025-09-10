
function calculateMatrixSum(matrix) {
  let totalSum = 0;
  
  for (let row of matrix) {
    for (let num of row) {
      totalSum += num;
    }
  }
  
  return totalSum;
}
