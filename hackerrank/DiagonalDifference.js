
/**
 * https://www.hackerrank.com/challenges/diagonal-difference/problem
 * 
 * @param {*} arr 
 */
function diagonalDifference(arr) {
  let result = 0;
  let result2 = 0 ;
    for(let i = 0 ; i < arr.length; i++) {
      const loc = arr[i];
      for(let j = 0 ; j < loc.length; j++) {
        if(i == j) {
          result += arr[i][j];
          result2 += arr[i][loc.length - 1 -j];
        }
      }
    }
    // console.log('result:', result)
    // console.log('result2:', result2)

    return Math.abs(result-result2);
}

const arr = [[11,2,4],[4,5,6],[10,8,-12]];
diagonalDifference(arr);