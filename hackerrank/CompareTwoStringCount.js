/**
 * 문자열 내 p와 y의 개수
 * @param {*} s
 */
function solution(s) {
  var pCount = 0;
  var yCount = 0;
  s.split('').forEach(val => {
    if (val.toLowerCase() === 'p') {
      pCount++;
    } else if (val.toLowerCase() === 'y') {
      yCount++;
    }
  });
  if (pCount > 0 && yCount > 0 && pCount === yCount) return true;

  return false;
}

console.log(solution('pPoooyY'));
