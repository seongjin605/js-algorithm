function gradingStudents(grades) {
  const result = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      result.push(grades[i]);
      continue;
    }
    if (grades[i] % 5 > 2) {
      result.push(grades[i] + 2);
    } else {
      result.push(grades[i]);
    }
  }
  return result;
}

console.log(gradingStudents([73, 67, 38, 33]));
