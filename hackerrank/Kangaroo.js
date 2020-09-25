function kangaroo(x1, v1, x2, v2) {
  if (x1 < 0 || x1 > 1000 || x2 < 0 || x2 > 1000 || v1 < 1 || v1 > 10000 || v2 < 1 || v2 > 10000)
    return 'NO';

  if ((x1 < x2 && v1 < v2) || (x1 > x2 && v1 > v2)) {
    return 'NO';
  }

  if (v1 > v2 && (x2 - x1) % (v1 - v2) === 0) {
    return 'YES';
  }
  return 'NO';

  // const isFirstKangarooBehind = x1 < x2;

  // let count = 0;
  // while (x1 !== x2) {
  //   x1 = x1 + v1;
  //   x2 = x2 + v2;

  //   if (count > 0 && ((isFirstKangarooBehind && x1 > x2) || (!isFirstKangarooBehind && x2 > x1))) {
  //     return 'NO';
  //   }

  //   count++;
  // }
  // return 'YES';
}

// console.log(kangaroo(0, 3, 4, 2));
// console.log(kangaroo(0, 2, 5, 3));
console.log(kangaroo(1, 3, 4, 2));
console.log(kangaroo(5, 3, 2, 1));
console.log(kangaroo(-1, 3, 0, 1));
