const isPalindrome = function(x) {
  if (!Number.isInteger(x)) return false;

  const words = x.toString().split('');

  const wordsSize = Math.floor(words.length / 2);

  for (let i = 0; i < wordsSize; i++) {
    if (words[i] !== words[words.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
