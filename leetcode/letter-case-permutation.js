/**
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = function (S) {
  const arr = S.split('');
  const ret = [];
  backtrack(arr, ret, 0);
  return ret;
};

const backtrack = function (arr, ret, idx) {
  if (idx === arr.length) {
    ret.push(...arr);
  } else {
    const c = arr[idx];
    if (isAlpha(c)) {
      arr[idx] = c.toLowerCase();
      backtrack(arr, ret, idx + 1);
      arr[idx] = c.toUpperCase();
      backtrack(arr, ret, idx + 1);
    } else {
      backtrack(arr, ret, idx + 1);
    }
  }
};

const isAlpha = function (c) {
  // TODO: 리턴 값에 입력받은 문자가 알파벳인지 체크하는 함수 구현.
  return ('a'.charAt() >= c && 'z'.charAt() <= c) || ('A'.charAt() >= c && 'Z'.charAt() <= c);
};
