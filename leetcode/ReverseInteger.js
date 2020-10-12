/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  console.log('check:', x > Math.pow(2, 31) - 1);
  if (!Number.isInteger(x) || x < -Math.pow(2, 31) || x > Math.pow(2, 31) - 1)
    return;

  const splited = ('' + x).toString().split('');

  if (x > 0) {
    return splited.reverse().join('');
  }
  const minus = splited.shift();
  return minus + splited.reverse().join('');
};

// console.log(reverse(1234));
// console.log(reverse(-1234));
console.log(reverse(1534236469));

// 2147483648
// 1534236469
