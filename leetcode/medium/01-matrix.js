/**
 * Time Limit Exceeded error
 *
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const bfs = (row, col) => {
    let count = 0;
    const queue = [[row, col]];

    while (queue.length > 0) {
      const qSize = queue.length;
      for (let i = 0; i < qSize; i++) {
        const [row, col] = queue.shift();
        if (row > 0) queue.push([row - 1, col]);
        if (col > 0) queue.push([row, col - 1]);
        if (row < mat.length - 1) queue.push([row + 1, col]);
        if (col < mat[0].length - 1) queue.push([row, col + 1]);

        if (mat[row][col] === 0) return count;
      }
      count++;
    }
  };
  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      if (mat[row][col] !== 0) mat[row][col] = bfs(row, col);
    }
  }
  return mat;
};
