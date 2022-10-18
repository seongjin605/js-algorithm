/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const output = [];
  for (let i = 0; i < numRows; i++) {
    output[i] = [];
    for (let j = 0; j <= i; j++) {
      if (i === 0 || j === i) output[i][j] = 1;
      else output[i][j] = output[i][j - 1] + output[i][j + 1];
    }
  }
  console.log(output);
  return output;
};
