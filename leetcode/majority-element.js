/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (!nums || nums.length === 0) return 0;

  const map = new Map();
  nums.forEach((val, index) => {
    if (!map.has(val)) {
      map.set(val, 1);
    } else {
      let count = map.get(val);
      count = count + 1;
      map.set(val, count);
    }
  });

  console.log("map:", map);

  const result = [];
  map.forEach((key, value) => {
    console.log(`${key} : ${value}`);
    result.push({ key: value, value: key });
  });

  return result.sort((a, b) => b.value - a.value)[0].key;
};
