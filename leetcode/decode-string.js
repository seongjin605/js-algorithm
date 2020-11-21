/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const splitedArr = s.split('');

  const result = [];

  while (splitedArr.length > 0) {
    const node = splitedArr.shift();

    const isNanNumber = Number.isNaN(Number(node));

    // 숫자타입이면
    if (!isNanNumber) {
      // splitedArr.shift(); // 왼쪽 [ 제거

      while (splitedArr.length > 0) {
        const str = splitedArr.shift();
        if (str !== '[' && str !== ']') {
          for (let i = 0; i < isNanNumber; i++) {
            result.push(str);
          }
          continue;
        }
        console.log('str:', str);
      }
      console.log('splitedArr:', splitedArr);
    }
  }
  console.log('result:', result);
};
