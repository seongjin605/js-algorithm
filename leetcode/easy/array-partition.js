/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  let sum = 0;
  while (sortedNums.length >= 2) {
    sum += Math.min(sortedNums.shift(), sortedNums.shift());
  }

  return sum;
};
