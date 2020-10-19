/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  if (!nums || nums.length === 0) return [];

  let min = Math.min.apply(Math, nums); // 배열의 최솟값
  // console.log('min:', min);

  const result = [];

  nums.sort((a, b) => a - b);

  nums = new Set(nums);

  console.log('nums:', nums);

  nums.forEach((val, index) => {
    console.log('val:', val);
    console.log('min:', min);
    if (min !== val) {
      result.push(min);
    }
    min++;
  });

  return result;
};
