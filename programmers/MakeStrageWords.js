/**
 * 이상한 문자 만들기
 * @param {*} s
 */
function solution(s) {
  var index = 0;
  return s
    .split('')
    .map(val => {
      if (String.fromCharCode(32) === val) {
        // 공백 포함시 인덱스 초기화
        index = 1;
      }
      if (index % 2 === 0) {
        val = val.toUpperCase();
      } else {
        val = val.toLowerCase();
      }
      index++;
      return val;
    })
    .join('');
}

solution('try hello world');
