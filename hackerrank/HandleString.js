/**
 * 문자열 다루기 기본
 * @param {*} s
 */
function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return s.split('').every(element => element.charCodeAt(0) - 48 < 10);
  }
  return false;
}

console.log(solution('1234'));
