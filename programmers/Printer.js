function solution(priorities, location) {
  var answer = 0;

  answer = priorities.sort((a, b) => a - b);
  console.log(answer);

  return answer;
}

solution([1, 1, 9, 1, 1, 1], 0);
