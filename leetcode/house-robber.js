/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return [];
  if (nums.length === 2) {
    return Math.max.apply(Math, nums);
  }
  const safeValOfEvenIndex = nums
    .map((val, index) => {
      if (index % 2 === 0) {
        return val;
      }
      return 0;
    })
    .reduce((previous, current) => previous + current);

  console.log('safeValOfEvenIndex:', safeValOfEvenIndex);

  const safeValOfOddIndex = nums
    .map((val, index) => {
      if (index % 2 === 1) {
        return val;
      }
      return 0;
    })
    .reduce((previous, current) => previous + current);

  console.log('safeValOfOddIndex:', safeValOfOddIndex);

  const safeValOfEverySecondIndex = nums
    .map((val, index) => {
      if (index % 2 === 1) {
        return val;
      }
      return 0;
    })
    .reduce((previous, current) => previous + current);

  return Math.max.apply(Math, [safeValOfEvenIndex, safeValOfOddIndex]);
};

console.log(rob([2, 1, 1, 2])); // output: 4

console.log(rob([1, 2]));
console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
