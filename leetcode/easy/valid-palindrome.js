function isLetterOrInteger(target) {
  if (target.match(/[a-z]/i)) {
    return true;
  }
  if (!isNaN(target) && Number.isInteger(Number(target))) {
    return true;
  }
  return false;
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/ /g, '');
  const tartgetString = [];
  for (let i = 0; i < s.length; i++) {
    if (isLetterOrInteger(s[i])) {
      tartgetString.push(s[i]);
    }
  }
  console.log('tartgetString:', tartgetString);
  while (tartgetString.length > 1) {
    if (tartgetString.shift().toLowerCase() !== tartgetString.pop().toLowerCase()) {
      return false;
    }
  }
  return true;
};
