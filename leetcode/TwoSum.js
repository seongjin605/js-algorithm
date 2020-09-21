/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums.length < 2 || nums.length > 1000000) return;

  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(target - num)) {
      return [map.get(target - num), i];
    } else {
      map.set(num, i);
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
