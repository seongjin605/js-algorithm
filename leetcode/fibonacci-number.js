/**
 * https://leetcode.com/problems/fibonacci-number/
 * @param {number} n
 * @return {number}
 */
var fib = function (n, memo = []) {
  if (n === 0) return 0;
  memo[1] = 1;
  memo[2] = 1;
  // memo[3] = memo[1] +
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 2] + memo[i - 1];
  }
  return memo[n];
};
