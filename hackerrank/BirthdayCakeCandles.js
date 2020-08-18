// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(arr) {
  if (arr.length === 0 || arr.length > Math.pow(10, 7))
    throw new Error("Not Invalid Argument");
  let max = 0;
  let count = 0;
  arr.sort(function (a, b) {
    return b - a;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
      count++;
    }
  }
  return count;
}

console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]));
