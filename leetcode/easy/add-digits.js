/**
 * https://leetcode.com/problems/add-digits/
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (String(num).length === 1) return num;
  let result = 0;

  const dfs = sum => {
    const digits = String(sum).split('');
    if (digits.length === 1) return;

    result = 0;

    for (let i = 0; i < digits.length; i++) {
      result += Number(digits[i]);
    }

    dfs(result);
  };

  dfs(num);

  return result;
};

addDigits(38);
