/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let sum = 0,
    end = 0,
    beg = 0,
    ans = 0;
  const n = nums.length;
  var vSet = new Set();

  while (end < n) {
    if (!vSet.has(nums[end])) {
      sum += nums[end];
      vSet.add(nums[end]);
      end += 1;
      ans = Math.max(ans, sum);
    } else {
      sum -= nums[beg];
      vSet.delete(nums[sum]);
      beg += 1;
    }
  }
  return ans;
};
