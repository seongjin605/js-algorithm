/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  const nodes = [root];
  while (nodes.length) {
    const node = nodes.shift();
    if (node.val === val) {
      return node;
    }
    if (node.left) nodes.push(node.left);
    if (node.right) nodes.push(node.right);
  }
  return null;
};
