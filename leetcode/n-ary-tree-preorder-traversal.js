/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * preorder: self-left-right
 * @param {Node} root
 * @return {number[]}
 */

/**
var preorder = function(root) {
    
    const q = [root];
    const result = [];
    
    while(q.length > 0) {
        const node = q.shift();
        if(node) {
            result.push(node.val);
            for(let i = 0; i < node.children.length; i++) {
                console.log(node.children[i]);
                q.push(node.children[i]);
            }
        }
    }
    return result;
};

*/

const preorder = function (root) {
  if (!root) return [];

  const ret = [];
  traverse(root, ret);
  return ret;
};

function traverse(root, ret) {
  if (!root) return;

  ret.push(root.val);

  for (let key in root.children) {
    traverse(root.children[key], ret);
  }
}
