/**
 * 행렬의 덧셈
 * @param {*} arr1
 * @param {*} arr2
 */
function solution(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const row = arr1[i];
    for (let j = 0; j < row.length; j++) {
      arr2[i][j] += arr1[i][j];
    }
  }
  return arr2;
}
