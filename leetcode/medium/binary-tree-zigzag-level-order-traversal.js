/**
 * https://leetcode.com/submissions/detail/631595082/
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const nodes = [root];
  const result = [];
  let depth = 1;
  while (nodes.length > 0) {
    const size = nodes.length;
    const level = [];
    for (let i = 0; i < size; i++) {
      const node = nodes.shift();
      if (depth % 2 == 0) {
        level.push(node.val);
      } else {
        level.unshift(node.val);
      }
      if (node.right) {
        nodes.push(node.right);
      }
      if (node.left) {
        nodes.push(node.left);
      }
    }
    depth++;
    result.push(level);
  }
  return result;
};
