/**
 * 자릿수 구하기
 * @param {*} n
 */
function solution(n) {
  return n
    .toString()
    .split('')
    .map(val => parseInt(val))
    .reduce((accumulator, current) => accumulator + current);
}
