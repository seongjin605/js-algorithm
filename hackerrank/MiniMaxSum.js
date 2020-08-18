// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  if (arr.length === 0 || arr.length > Math.pow(10, 9))
    throw new Error("Not Invalid Argument");

  let max = 0;
  let min = 0;
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    max = arr[0];
    min = arr[0];
    if (arr[i] >= max) {
      max = arr[i];
    } else {
      min = arr[i];
    }
  }
  const minResult = arr
    .filter((x) => x !== max)
    .map((x) => x)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  const maxResult = arr
    .filter((x) => x !== min)
    .map((x) => x)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  console.log(minResult, maxResult);
}

const arr = [7, 69, 2, 221, 8974];
miniMaxSum(arr);
