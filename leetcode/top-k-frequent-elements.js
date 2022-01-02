/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  const q = nums;
  while (q.length > 0) {
    const p = q.pop();
    if (map.has(p)) {
      map.set(p, map.get(p) + 1);
    } else {
      map.set(p, 1);
    }
  }
};
