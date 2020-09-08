/**
 * [k번째 수 정렬]
 * array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
 * 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
 * 2에서 나온 배열의 3번째 숫자는 5입니다.
 * @param {*} array
 * @param {*} commands
 */
function solution(array, commands) {
  if (
    !Array.isArray(array) ||
    array.length < 1 ||
    array.length > 100 ||
    array.filter(x => x < 1 || x > 100).length > 0
  )
    throw new Error('Invalid Array type or Invalid Arguments');

  if (!Array.isArray(commands) || commands.length < 1 || commands.length > 50)
    throw new Error('Invalid commands type or commands Arguments');

  var answer = [];

  while (commands.length > 0) {
    const ranges = commands.shift();
    if (ranges.length !== 3) {
      throw new Error('The length of each element of the command is not 3.');
    }
    const filteredArray = array.slice(ranges[0] - 1, ranges[1]);
    if (filteredArray.length > 0) {
      filteredArray.sort();
    }
    answer.push(filteredArray.find((element, index) => index === ranges[2] - 1));
  }
  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3]
  ]
);
