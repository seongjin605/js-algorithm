function solution(n) {
  console.log('test:', n.toString());
  var str = n + '';
  return str
    .split('')
    .sort((a, b) => b - a)
    .map(result => (result = parseInt(result)));
}

console.log(solution(12341251231235));
