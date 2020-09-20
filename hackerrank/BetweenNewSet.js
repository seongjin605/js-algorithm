function gcd(n, m) {
  while (m > 0) {
    let tmp = n;
    n = m;
    m = tmp % m;
  }
  return n;
}

console.log(gcd(2, 4), (4 * 2) / gcd(2, 4));
