/**
 * https://leetcode.com/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let numIslands = 0;

  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return numIslands;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] !== '1') {
        continue;
      }
      numIslands++;
    }
  }
  return numIslands;
};
