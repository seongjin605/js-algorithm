function getWeekOfMonth(date) {
  var day = date.getDate();
  day -= date.getDay() == 0 ? 6 : date.getDay() - 1; //get monday of this week
  //special case handling for 0 (sunday)

  day += 7;
  //for the first non full week the value was negative

  prefixes = ['0', '1', '2', '3', '4', '5'];
  return prefixes[0 | (day / 7)];
}

// 주차 = index + 1

// console.log(getWeekOfMonth(new Date('2020-09-28'))); // 예상 index 0
// console.log(getWeekOfMonth(new Date('2020-09-29'))); // 예상 index 0
// console.log(getWeekOfMonth(new Date('2020-09-30'))); // 예상 index 0
// console.log(getWeekOfMonth(new Date('2020-10-01'))); // 예상 index 0

// console.log('-------------------------------------------------------------');

// console.log(getWeekOfMonth(new Date('2020-10-04'))); // 예상 index 0
// console.log(getWeekOfMonth(new Date('2020-10-05'))); // 예상 index 1

function startOfWeek(date) {
  var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);

  return new Date(date.setDate(diff));
}

console.log(startOfWeek(new Date('2020-10-01')).toString()); // 09-28
console.log(startOfWeek(new Date('2020-10-03')).toString()); // 09-28
console.log(startOfWeek(new Date('2020-10-04')).toString()); // 09-28
console.log('-------------------------------------------------------------');
console.log(startOfWeek(new Date('2020-10-05')).toString()); // 10-05
console.log(startOfWeek(new Date('2020-10-06')).toString()); // 19-05
console.log('-------------------------------------------------------------');
console.log(startOfWeek(new Date()).toString()); // 10-26
