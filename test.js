/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    let tmp = s[left];
    s[left] = s[right];
    s[right] = tmp;
    left++;
    right--;
  }
  return s;
};

reverseString(['h', 'e', 'l', 'l', 'o']);
