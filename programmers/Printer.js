function solution(priorities, location) {
  const filtered = [];

  let max = 0;
  while (priorities.length > 0) {
    max = Math.max.apply(Math, priorities);
    const index = priorities.findIndex(val => val === max);
    filtered.push(...priorities.splice(index, 1));
  }

  console.log(filtered);

  let targetIndex = 0;
  filtered.forEach((val, index) => {
    console.log(index);
    if (index === location) {
      targetIndex++;
    }
  });
  return targetIndex;
}

// console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
