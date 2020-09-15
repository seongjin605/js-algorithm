function solution(s, n) {
  // 1. 아스키 코드를 먼저 구한다.
  return s
    .split('')
    .map((val, index) => {
      var code = val.charCodeAt(0);
      var decimal = code !== 32 ? code + n : code;
      if ((decimal > 90 && decimal < 97) || decimal > 122) {
        decimal = decimal - 26;
      } else if (decimal !== 32 && decimal < 65) {
        decimal = 65;
      }
      return String.fromCharCode(decimal);
    })
    .join('');
}

console.log(solution('AB', 1));
console.log(solution('z', 1));
console.log(solution('Z', 10));
console.log(solution('a B z', 4));
console.log(solution('aBZ', 20));
console.log(solution('y X Z', 4));
