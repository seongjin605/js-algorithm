/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const digit = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };
  const arrOfDigits = digits.split('');
  const targets = [];
  for (const key of arrOfDigits) {
    targets.push(digit[key]);
  }
  // console.log(targets);
  const result = [];
  while (targets.length > 0) {
    const letters = targets.shift();
    console.log(letters);
    for (let i = 0; i < letters.length; i++) {
      console.log(letters[i]);
    }
  }
};
