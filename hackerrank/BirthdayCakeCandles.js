// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(arr) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
      count++;
    }
  }
  return count;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));
