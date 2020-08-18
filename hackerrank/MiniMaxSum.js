// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  if (arr.length === 0 || arr.length > Math.pow(10, 9))
    throw new Error("Not Invalid Argument");

  arr.sort();

  let max = 0;
  let min = 0;

  for (let i = 0; i < arr.length; i++) {
    max = arr[0];
    min = arr[0];
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  const minResult = arr
    .filter((x) => x !== max || max === min)
    .reduce((accumulator, currentValue, currentIndex) => {
      if (max === min && currentIndex === 1) {
        return accumulator + currentValue - min;
      }
      return accumulator + currentValue;
    });

  const maxResult = arr
    .filter((x) => x !== min || max === min)
    .reduce((accumulator, currentValue, currentIndex) => {
      if (max === min && currentIndex === 1) {
        return accumulator + currentValue - min;
      }
      return accumulator + currentValue;
    });

  console.log(minResult, maxResult);
}

const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);
