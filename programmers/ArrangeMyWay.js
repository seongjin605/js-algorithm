function solution(strings, n) {
  return strings.sort((a, b) => {
    var first = a[n];
    var second = b[n];
    if (first === second) {
      return (a > b) - (a < b);
    } else {
      return (first > second) - (first < second);
    }
  });
}

console.log(solution(['sun', 'bed', 'car'], 1));
