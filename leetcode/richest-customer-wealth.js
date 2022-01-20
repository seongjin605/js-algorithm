/**
 * https://leetcode.com/problems/richest-customer-wealth/submissions/
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let result = 0;
  while (accounts.length > 0) {
    const accountNumbers = accounts.pop();
    let cumulativeValue = 0;
    for (let i = 0; i < accountNumbers.length; i++) {
      cumulativeValue += accountNumbers[i];
    }
    result = Math.max(result, cumulativeValue);
  }
  return result;
};
