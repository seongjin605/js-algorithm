/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if(nums.length === 0 || nums.length === 1 && nums[0] !== 0) return 0;

    nums.sort((a,b)=>a-b);

    if(nums[0] !== 0) return 0;

    for(let i=0; i<nums.length; i++) {
        if(i<nums.length-1 && nums[i] !== nums[i+1] - 1) {
            return nums[i+1] - 1;
        }
    }
    return nums[nums.length-1] + 1;
};