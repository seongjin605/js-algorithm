/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  if (!nums || nums.length === 0) return [];

  let min = Math.min.apply(Math, nums); // 배열의 최솟값
  console.log('findDisappearedNumbers -> min', min);

  const result = [];

  nums.sort((a, b) => a - b);

  let target = min;
  const checkArray = [];

  nums.forEach((val, index) => {
    console.log('val:', val);
    console.log('target:', target);
    console.log('checkArray:', checkArray);
    console.log('------------------------------------');
    if (checkArray.indexOf(val) !== -1 && val !== target) {
      console.log('check');
      result.push(val);
    } else {
      checkArray.push(val);
    }
    target++;
  });

  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5, 6]
// console.log(findDisappearedNumbers([1, 1])); // 2
