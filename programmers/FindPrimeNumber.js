// function solution(n) {
//   var result = [];
//   for (var i = 2; i < n; i++) {
//     console.log(`${n} % ${i} === ${n % i}`);
//     // 10 % 2 === 0
//     // 10 % 3 === 1
//     // 10 % 4 === 2
//     if (n % i === 0) {
//       continue;
//     }
//     result.push(i);
//   }
//   console.log(result);
// }

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  var sqrt = Math.sqrt(n);
  for (var i = 2; i <= sqrt; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(n) {
  var result = [];
  for (var i = 0; i < n; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  console.log(result);
}

console.log(solution(10));
