/**
 * https://leetcode.com/submissions/detail/632240372/
 *
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  nums.forEach(n => {
    if (!map.has(n)) {
      map.set(n, 1);
    } else {
      map.set(n, map.get(n) + 1);
    }
  });
  const sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
  return sortedArray[0][0];
};
