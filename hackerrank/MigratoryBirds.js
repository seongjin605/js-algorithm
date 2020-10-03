function migratoryBirds(arr) {
  const map = new Map();
  arr.forEach((val, index) => {
    let value = map.get(val);
    if (!map.has(val)) {
      // 초기값 세팅
      if (!value) {
        value = 1;
      }
      map.set(val, value);
    } else {
      // 값이존재시
      map.set(val, ++value);
    }
  });

  console.log(map);

  let max = 0;
  let result = 0;

  Array.from(map.entries()).forEach((item, index) => {
    // console.log('item:', item);
    if (item[1] > max) {
      max = item[0];
    }
  });
  return max;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
