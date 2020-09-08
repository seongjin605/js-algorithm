/**
 * 나누어 떨어지는 숫자 배열

 * @param {*} arr 
 * @param {*} divisor 
 */
function solution(arr, divisor) {
  const filteredArr = arr.filter(val => val % divisor === 0);
  return filteredArr.length > 0 ? filteredArr.sort((a, b) => a - b) : [-1];
}

console.log(solution([3, 2, 6], 10));
