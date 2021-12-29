/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const jewelryTypes = jewels.split('');
  const stoneTargets = stones.split('');
  let count = 0;
  while (jewelryTypes.length > 0) {
    const jweleryType = jewelryTypes.pop();
    count += stoneTargets.filter(s => s === jweleryType).length;
  }
  return count;
};
