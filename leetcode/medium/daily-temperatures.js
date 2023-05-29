/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    let left = i + 1;
    if (left === temperatures.length) {
      stack.push(0);
      break;
    }

    let count = 0;
    while (left < temperatures.length) {
      if (temperatures[left] > temperatures[i]) {
        count++;
        break;
      }
      left++;
    }
    if (count !== 0) {
      stack.push(left - i);
    } else {
      stack.push(0);
    }
  }
  return stack;
};
