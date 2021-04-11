/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/submissions/detail/479309542/
 * @param {TreeNode} root
 * @return {number[]}
 */
 var largestValues = function(root) {
    if(!root) return [];
    const queue = [root];
    const result = [];
    while(queue.length > 0) {
        const currentLevel = [];
        const size = queue.length;
        for(let i = 0; i < size; i++) {
            const node = queue.shift();
            if(node) {
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
                currentLevel.push(node.val)
            }   
        }
        result.push(Math.max(...currentLevel));
    }
    return result;
};