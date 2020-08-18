// Complete the plusMinus function below.
function plusMinus(arr) {
  let pCount = 0; // positive value
  let nCount = 0; // negative value
  let zCount = 0; // zero value
  for (let i = 0; i < arr.length; i++) {
    // positiive
    if (arr[i] > 0 && Number.isInteger(arr[i])) {
      pCount++;
    } else if (arr[i] < 0 && Number.isInteger(arr[i])) {
      // negative
      nCount++;
    } else {
      zCount++;
    }
  }

  console.log((pCount / arr.length).toFixed(6));
  console.log((nCount / arr.length).toFixed(6));
  console.log((zCount / arr.length).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
