/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    const jwelTypes = jewels.split('');
    const stoneStypes = stones.split('');
    let count = 0;
    while(jwelTypes.length > 0) {
        const jwel = jwelTypes.pop();
        const searchedTypes = stoneStypes.filter(s => s === jwel);
        count += searchedTypes.length;
    }
    return count;
};