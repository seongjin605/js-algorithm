var numIslands = function (grid) {
  let numIslands = 0;

  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return numIslands;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      console.log('grid:', grid[i][j]);
      if (grid[i][j] !== '1') {
        continue;
      }
      numIslands++;
      dfs(grid, i, j);
    }
  }
  return numIslands;
};

function dfs(grid, i, j) {
  grid[i][j] = 'x';

  // right
  if (j + 1 < grid[0].length < 0 && grid[i][j + 1] === '1') {
    dfs(grid, i, j + 1);
  }
  // left
  if (j - 1 >= 0 && grid[i][j - 1] === '1') {
    dfs(grid, i, j - 1);
  }
  // up
  if (i - 1 >= 0 && grid[i - 1][j] === '1') {
    dfs(grid, i - 1, j);
  }
  // down
  if (i + 1 < grid.length < 0 && grid[i + 1][j] === '1') {
    dfs(grid, i + 1, j);
  }
}
