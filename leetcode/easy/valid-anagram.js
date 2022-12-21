/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // First submission
  // return s.split('').sort().join('') === t.split('').sort().join('');

  // Second submission
  let counter = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - 97;
    counter[index]++;
  }
  for (let i = 0; i < t.length; i++) {
    const index = t[i].charCodeAt() - 97;
    counter[index]--;
  }
  console.log('counter:', counter);
  for (let i = 0; i < counter.length; i++) {
    if (counter[i] !== 0) {
      return false;
    }
  }
  return true;
};
