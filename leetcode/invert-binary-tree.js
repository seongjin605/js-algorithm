/**
 * https://leetcode.com/problems/invert-binary-tree/
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (!node) continue;

    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    queue.push(node.left, node.right);
  }
  return root;
};

/**
var invertTree = function(root) {
  if(!root) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};
 */
