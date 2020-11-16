/**
 * Math.sign : 양수인지 음수인지 부호를 판단하는게 핵심
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const absReversed = Math.abs(x).toString().split('').reverse().join('');
  if (absReversed > 2 ** 31) return 0;
  return absReversed * Math.sign(x);
};
