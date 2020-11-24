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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;

  const queue = [root];
  let leftCount = 0;
  let rightCount = 0;

  const result = [];

  while (queue.length > 0) {
    const qSize = queue.length;
    for (let i = 0; i < qSize; i++) {
      const node = queue.shift();
      console.log('node:', node);
      if (node.left) {
        queue.push(node.left);
        leftCount++;
      }
      if (node.right) {
        queue.push(node.right);
        rightCount++;
      }
      result.push(node.val);
    }
  }
};
