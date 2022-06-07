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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const number = [];
  const dfs = node => {
    if (!node) return;
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
    number.push(node.val);
  };

  dfs(root);

  return number;
};
