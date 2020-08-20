// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
  let result = 0;
  for (let i = 0; i < ar.length; i++) {
    result += ar[i];
  }
  return result;
}

console.log(
  aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
);
