/**
 * https://leetcode.com/submissions/detail/631902731/
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];
  const nodes = [root];
  const result = [];
  while (nodes.length > 0) {
    const size = nodes.length;
    const level = [];
    for (let i = 0; i < size; i++) {
      const node = nodes.shift();
      level.push(node.val);
      if (node.left) {
        nodes.push(node.left);
      }
      if (node.right) {
        nodes.push(node.right);
      }
    }
    result.push(Math.max.apply(Math, level));
  }
  return result;
};
