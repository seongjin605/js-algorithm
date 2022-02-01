/**
 * https://leetcode.com/submissions/detail/631625966/
 * https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/discuss/1734430/Javascript-faster-than-97

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  const nodes = [root];
  const values = [];
  while (nodes.length > 0) {
    const size = nodes.length;
    for (let i = 0; i < size; i++) {
      const node = nodes.shift();
      values.push(node.val);
      if (node.left) {
        nodes.push(node.left);
      }
      if (node.right) {
        nodes.push(node.right);
      }
    }
  }
  const max = Math.max.apply(Math, values);
  const min = Math.min.apply(Math, values);
  if (min === max) return -1;
  const filteredMinValues = values.filter(v => v !== min);
  return Math.min.apply(Math, filteredMinValues);
};
