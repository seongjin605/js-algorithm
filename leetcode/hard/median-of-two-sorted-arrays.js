/**
 * https://leetcode.com/submissions/detail/677634431/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  nums1 = [...nums1, ...nums2].sort((a, b) => a - b);

  if (nums1.length % 2 === 0) {
    const mid = (nums1.length - 1) / 2;
    return ((nums1[Math.floor(mid)] + nums1[Math.ceil(mid)]) / 2).toFixed(6);
  } else {
    return nums1[Math.floor((nums1.length - 1) / 2)];
  }
};
