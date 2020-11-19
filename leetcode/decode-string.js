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
      splitedArr.shift(); // 왼쪽 제거
      splitedArr.pop(); // 오른쪽 제거
      console.log('splitedArr:', splitedArr);
    }
  }
};
