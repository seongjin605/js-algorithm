/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid.length > 0 && obstacleGrid[0][0] === 1) return 0;
  const arr = Array.from(Array(obstacleGrid.length), () => Array(obstacleGrid[0].length).fill(0));

  arr[0][0] = 1;

  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[0].length; j++) {
      if (i > 0 && obstacleGrid[i][j] !== 1) arr[i][j] += arr[i - 1][j];
      if (j > 0 && obstacleGrid[i][j] !== 1) arr[i][j] += arr[i][j - 1];
    }
  }
  console.log(arr);
  return arr[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};
