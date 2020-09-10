/**
 * 문자열 내림차순으로 배치하기
 * @param {*} s
 */
function solution(s) {
  return s.split('').sort().reverse().join('');
}

console.log(solution('ZbcdeAfg'));
