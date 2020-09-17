/**
 * 정수 내림차순 정렬
 * 118372 -> 873211
 * @param {*} n
 */
function solution(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .map(result => parseInt(result))
      .join("")
  );
}

console.log(solution(118372));
