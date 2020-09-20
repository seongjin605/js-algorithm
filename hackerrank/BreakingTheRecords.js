function breakingRecords(scores) {
  let highstScore = 0,
    lowestScore = 0;

  const highests = [];
  const lowests = [];

  let max = scores[0];
  let min = scores[0];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > max) {
      max = scores[i + 1];
      highstScore++;
    } else if (scores[i] < min) {
      min = scores[i];
      lowestScore++;
    }
    highests.push(max);
    lowests.push(min);
  }
  console.log(highests);
  console.log(lowests);
  console.log(highstScore, lowestScore);
}

// console.log(breakingRecords(3, 4, 21, 36, 10, 28, 35, 5, 24, 42));
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
