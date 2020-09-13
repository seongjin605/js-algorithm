// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }
//   var sqrt = Math.sqrt(n);
//   console.log('sqrt:', sqrt);
//   for (var i = 2; i <= sqrt; i++) {
//     console.log(`${n} % ${i} === ${n % i}`);
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// function solution(n) {
//   var result = [];
//   for (var i = 0; i < n; i++) {
//     if (isPrime(i)) {
//       result.push(i);
//     }
//   }
//   console.log(result);
// }

// console.log(solution(10));

// 2

function solution(n) {
  var flags = [false, false];

  var until = n - flags.length;
  for (var i = 0; i < until; i++) {
    flags.push(true);
  }

  var count = 0;

  var prime = 2;

  while (prime <= Math.sqrt(n)) {
    crossOff(flags, prime);

    prime = getNextPrime(flags, prime);
  }
  console.log(flags);
}

function crossOff(flags, prime) {
  for (var i = prime * prime; i < flags.length; i += prime) {
    flags[i] = false;
  }
}

function getNextPrime(flags, prime) {
  var next = prime + 1;
  while (next < flags.length && !flags[next]) {
    next++;
  }
  return next;
}

solution(10);
