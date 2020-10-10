/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * postorder: left- right - self
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = function (root) {
  if (!root) return [];

  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    const node = stack.pop();
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
    result.unshift(node.val);
  }
  return result;
};
