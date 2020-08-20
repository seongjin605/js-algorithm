function gradingStudents(grades) {
  let result = [];
  for (let i = 0; i < grades.length; i++) {
    let temp = Math.round(grades[i] / 5) * 5;
    if (grades[i] < 38) {
      result.push(grades[i]);
      continue;
    }
    if (temp > grades[i]) {
      result.push(grades[i] + 2);
    } else {
      result.push(grades[i]);
    }
  }
  return result;
}

console.log(gradingStudents([73, 67, 38, 33]));
