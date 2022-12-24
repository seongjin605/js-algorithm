/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    if (i + k - 1 > nums.length - 1) {
      break;
    }
    const slicedNums = nums.slice(i, i + k);
    output.push(Math.max(...slicedNums));
  }
  return output;
};
