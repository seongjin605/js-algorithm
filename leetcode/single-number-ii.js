/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // const map = new Map();
  // nums.forEach((val, index) => {
  //     if(!map.has(val)) {
  //         map.set(val, 0);
  //     } else {
  //         map.set(val, map.get(val) + 1);
  //     }
  // });
  // console.log(map);
  let num = 0;
  nums.forEach((val, index) => {
    num ^= val;
  });
  return num;
};
