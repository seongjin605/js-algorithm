/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let count = 0;
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j, grid);
        count++;
      }
    }
  }
  return count;
};

function dfs(i, j, grid) {
  if (i < 0 || grid.length >= i || j < 0 || grid[0].length >= j) {
    return;
  }
  // 4-directionally (horizontal or vertical.)

  dfs(i + 1, j, dfs); // 북
  dfs(i - 1, j, dfs); // 남
  dfs(i, j + 1, dfs); // 동
  dfs(i, j - 1, dfs); // 서

  grid[i][j] = 0;
}
