/**
 * 최대 공약수와 최소 공배수 구하기.
 *
 * @param {*} n
 * @param {*} m
 */
function solution(n, m) {
  // 각 인풋을 1부터 시작해서 나눈다.
  // console.log('gcd:', gcd(n, m));
  // console.log('최소공배수 ', (n * m) / gcd(n, m));
  return [gcd(n, m), (n * m) / gcd(n, m)];
}

function gcd(n, m) {
  while (m > 0) {
    let tmp = n;
    n = m;
    m = tmp % m;
  }
  return n;
}

// console.log(solution(3, 12));
// console.log(solution(2, 5));
// console.log(solution(12, 18));
console.log(solution(1029, 1071));
