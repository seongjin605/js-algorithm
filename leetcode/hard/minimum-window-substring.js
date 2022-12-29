/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) return '';

  const code = s[0].charCodeAt();
  const minusCode = code >= 97 && code <= 122 ? 97 : 65;

  const counter = new Array(26).fill(0);
  for (let i = 0; i < t.length; i++) {
    counter[t[i].charCodeAt() - minusCode]++;
  }

  const getAnagram = (target, targetCounter) => {
    for (let i = 0; i < target.length; i++) {
      targetCounter[target[i].charCodeAt() - minusCode]--;
    }
    for (let i = 0; i < targetCounter.length; i++) {
      if (targetCounter[i] >= 1) {
        return '';
      }
    }
    return target;
  };

  const output = [];
  for (let i = 0; i < s.length; i++) {
    const targetCounter = [...counter];
    const anagram = getAnagram(s.slice(i, s.length), targetCounter);
    if (anagram.length > 0) {
      output.push({ anagram: anagram, count: anagram.length });
    }
  }
  output.sort((a, b) => {
    if (a.count > b.count) {
      return 1;
    }
    if (a.count < b.count) {
      return -1;
    }
    return 0;
  });
  console.log('output:', output);
  return output.length > 0 ? output[0].anagram : '';
};

console.log(minWindow('ab', 'a'));
