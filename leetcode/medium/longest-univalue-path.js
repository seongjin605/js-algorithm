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
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  let longest = 0;
  const current = { val: 0 };
  function dfs(node, level, current) {
    if (!node) return;

    if (node.val === current.val) {
      longest++;
    }
    current.val = node.val;

    const left = dfs(node.left, level, current);
    const right = dfs(node.right, level, current);
    return longest;
  }
  return dfs(root, 0, current);
};
