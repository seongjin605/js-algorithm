/**
 * https://leetcode.com/problems/n-ary-tree-level-order-traversal/
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return;

  const q = [root];
  const levels = [];

  while (q.length > 0) {
    const size = q.length;
    const currentLevel = [];
    for (let i = 0; i < size; i++) {
      const node = q.shift();
      if (node.children) q.push(...node.children);
      currentLevel.push(node.val);
    }
    levels.push(currentLevel);
  }
  return levels;
};
