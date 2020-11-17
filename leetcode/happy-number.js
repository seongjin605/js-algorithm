/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const queue = n.toString().split('');
  let squaredSum = 0;

  const map = new Map();

  while (queue.length > 0) {
    const node = queue.shift();
    if (node) {
      squaredSum += Math.pow(Number(node), 2);
    }
    if (queue.length === 0) {
      if (map.has(squaredSum)) {
        return false;
      }
      if (squaredSum === 1) {
        return true;
      }

      map.set(squaredSum, squaredSum);

      queue.push(...squaredSum.toString().split(''));
      squaredSum = 0;
    }
  }

  return false;
};
