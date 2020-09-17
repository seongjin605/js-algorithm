/**
 * 121	144
 * 121은 11의 제곱근 -> (11+1)의 제곱 return
 *
 * 3	-1
 * @param {*} n
 */
function solution(n) {
  var squareRoot = Math.sqrt(n);
  if (!Number.isInteger(squareRoot)) {
    return -1;
  }
  return Math.pow(squareRoot + 1, 2);
}

console.log(solution(121));
console.log(solution(3));
