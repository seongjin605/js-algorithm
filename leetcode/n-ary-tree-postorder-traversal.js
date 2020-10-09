/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @postorder: left-right-self
 *
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  if (!root) return;

  const queue = [root];
  const result = [];

  console.log('root:', root);

  while (queue.length > 0) {
    const qSize = queue.length;
    const level = [];
    for (let i = 0; i < qSize; i++) {
      const node = queue.shift();
      level.push(node.val);
      // result.unshift(node.val);
      if (node.children) {
        queue.push(...node.children);
      }
    }
    console.log('level:', level);
    result.unshift(...level);
  }
  console.log('result:', result);
  return result;
};
