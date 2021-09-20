/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, memo = []) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  memo[1] = 1;
  memo[2] = 2;
  // memo[3] = memo[2] + memo[1] // 2 + 1
  // memo[4] = memo[3] + memo[2] // 3 + 2
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};
