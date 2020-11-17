/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], i);
    } else {
      return nums[i];
    }
  }
  return 0;
};
