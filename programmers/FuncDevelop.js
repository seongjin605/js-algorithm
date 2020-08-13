/**
 * https://programmers.co.kr/learn/courses/30/lessons/42586
 */
function solution(progresses, speeds) {
  var answer = 0;

  var arrs = [];
  for (var i = 0; i < progresses.length; i++) {
    var speed = 0;
    var count = 0;
    while (100 - progresses[i] > speed) {
      speed += speeds[i];
      answer = count++;
    }

    answer += 1;
    arrs.push(answer);
  }

  var count = 0;
  var count2 = 0;
  for (var i = 0; i < arrs.length; i++) {
    if (i < arrs.length && arrs[i] < arrs[i + 1]) {
      count++;
    } else {
      count2++;
    }
  }
  var result = [];
  result.push(count);
  result.push(count2);

  answer = result.sort(function (a, b) {
    return b - a;
  });
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
