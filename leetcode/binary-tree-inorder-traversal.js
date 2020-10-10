/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 1. 분할정복 재귀로 풀어보기

/**
 * inorder: left - self - right
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return [];

  const result = [];
  traverse(root, result);
  return result;
};

function traverse(root, result) {
  if (!root) return;

  if (root.left) traverse(root.left, result);
  result.push(root.val);
  if (root.right) traverse(root.right, result);
}
