function solution(arr) {
  if (!Array.isArray(arr) || arr.length > 1000000) throw new Error('Invalid Arguments');

  var answer = [];
  var now = arr[0];

  answer.push(arr[0]);

  for (var i = 1; i < arr.length; i++) {
    if (now !== arr[i]) {
      now = arr[i];
      answer.push(now);
    }
  }

  // while (arr.length > 0) {
  //   const shift = arr.shift(); // 꺼낸 값
  //   if (shift < 0 || shift > 9) {
  //     throw new Error('Invalid Element');
  //   }
  //   if (answer.slice(answer.length - 1)[0] !== shift) {
  //     answer.push(shift); // 들어간 값
  //   }
  // }
  return answer;
}

solution([1, 1, 3, 3, 0, 1, 1]);
