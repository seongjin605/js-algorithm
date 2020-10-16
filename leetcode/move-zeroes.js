/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const zeros = [];
  while (nums.includes(0)) {
    const indexOfZero = nums.findIndex(val => val === 0);
    console.log('nums:', nums);
    if (indexOfZero !== -1) {
      zeros.push(...nums.splice(indexOfZero, 1));
    }
  }
  nums.push(...zeros);
  return nums;
};
