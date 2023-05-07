/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;

  let sum = Math.min(height[left], height[right]) * (right - left - 1);
  console.log(sum);
  while (left < right) {
    left++;
    sum = Math.max(sum, Math.min(height[left], height[right]) * (right - left - 1));
    right--;
    sum = Math.max(sum, Math.min(height[left], height[right]) * (right - left - 1));
  }
  return sum;
};
