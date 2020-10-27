// public int rob(int[] nums) {
//   if (nums.length == 0) return 0;
//   int prev1 = 0;
//   int prev2 = 0;
//   for (int num : nums) {
//       int tmp = prev1;
//       prev1 = Math.max(prev2 + num, prev1);
//       prev2 = tmp;
//   }
//   return prev1;
// }

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  let prev1 = 0;
  let prev2 = 0;
  for (let num of nums) {
    console.log('num:', num);
    let tmp = prev1;
    prev1 = Math.max.apply(Math, [prev2 + num, prev1]);
    prev2 = tmp;
  }
  return prev1;
};

console.log(rob([1, 3, 1]));
