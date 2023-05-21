/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let max=0;
    let min=Infinity;
    let hasDiff = false;
    for(let i=0; i<nums.length; i++) {
        if(min > nums[i]) {
            min = nums[i];
        } else if(nums[i] - min > max) {
            max = nums[i]- min;
            hasDiff=true;
        }
    }
    if(!hasDiff) {
        return -1;
    }
    
    return max;
};

console.log(maximumDifference([7,1,5,4]));