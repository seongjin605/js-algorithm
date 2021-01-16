var letterCasePermutation = function (S) {
  return permut(S, 0);
};

function permut(str, pos, out = [], curr = '') {
  // 재귀 종료 조건
  if (pos === str.length || curr.length === str.length) {
    out.push(curr);
  } else {
    if (isAlpha(str[pos])) {
      const up = curr + str[pos].toUpperCase();
      const low = curr + str[pos].toLowerCase();
      permut(str, pos + 1, out, up);
      permut(str, pos + 1, out, low);
    } else {
      permut(str, pos + 1, out, curr + str[pos]);
    }
  }
  return out;
}

function isAlpha(c) {
  const n = c.charCodeAt(0);
  return (n >= 65 && n <= 90) || (n >= 97 && n <= 122);
}
