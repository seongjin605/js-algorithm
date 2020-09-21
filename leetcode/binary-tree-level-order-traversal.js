/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/
 * @param {*} root
 */
var levelOrder = function (root) {
  if (!root) return [];

  const q = [root];
  const levels = [];

  while (q.length > 0) {
    const size = q.length;
    const currentLevel = [];
    for (let i = 0; i < size; i++) {
      const node = q.shift();
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
      currentLevel.push(node.val);
    }
    levels.push(currentLevel);
  }
  return levels;
};

levelOrder([3, 9, 20, null, null, 15, 7]);
