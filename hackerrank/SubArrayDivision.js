function birthday(s, d, m) {
  if (d < 1 || d > 31 || m < 1 || m > 12) return 0;

  const array = s;

  if (array.length === 1 && array[0] === d) {
    return 1;
  }

  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (s.slice(i, i + m).reduce((x, y) => x + y) === d) {
      result++;
    }
  }
  return result;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
console.log(
  birthday(
    [
      3,
      5,
      4,
      1,
      2,
      5,
      3,
      4,
      3,
      2,
      1,
      1,
      2,
      4,
      2,
      3,
      4,
      5,
      3,
      1,
      2,
      5,
      4,
      5,
      4,
      1,
      1,
      5,
      3,
      1,
      4,
      5,
      2,
      3,
      2,
      5,
      2,
      5,
      2,
      2,
      1,
      5,
      3,
      2,
      5,
      1,
      2,
      4,
      3,
      1,
      5,
      1,
      3,
      3,
      5
    ],
    18,
    6
  )
);
