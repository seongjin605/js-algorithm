function solution(a, b) {
  if (a < -10000000 || a > 10000000 || b < -10000000 || b > 10000000)
    throw new Error('Invalid Arguments');

  if (a === b) return a;

  var arr = [a, b].sort((x, y) => x - y);

  var sum = 0;
  var start = arr[0];

  while (start < arr[1] - 1) {
    sum += ++start;
  }
  return sum + arr[0] + arr[1];
}

solution(3, 5);
