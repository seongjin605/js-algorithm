/**
 * sum-of-digits-of-string-after-convert
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  const digits = s.split('');
  let output = 0;

  const dfs = (chars, pointer) => {
    if (pointer === k) {
      return;
    }

    output = 0;
    for (let i = 0; i < chars.length; i++) {
      output += Number(chars[i]);
    }

    pointer++;

    dfs(String(output).split(''), pointer);
  };

  let target = '';
  for (let i = 0; i < digits.length; i++) {
    target += digits[i].charCodeAt() - 96;
  }

  dfs(target, 0);

  return output;
};
