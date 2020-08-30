function solution(participant, completion) {
  var answer = '';

  participant.sort();
  completion.sort();

  var i = 0;
  while (participant.length > 0) {
    var shift = participant.shift();
    if (participant[i] !== completion.slice(i, i + 1).toString()) {
      answer = shift;
    }
    i++;
  }
  return answer;
}

solution(
  ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
  ['josipa', 'filipa', 'marina', 'nikola']
);
