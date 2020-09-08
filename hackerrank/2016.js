function solution(a, b) {
  var answer = '';

  a = a < 10 ? '0' + a : a;
  b = b < 10 ? '0' + b : b;

  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  answer = week[new Date(`2016/${a}/${b} 00:00:00`).getDay()];
  return answer;
}

solution(5, 24);
