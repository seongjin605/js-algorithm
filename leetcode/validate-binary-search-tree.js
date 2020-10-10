/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * BST인지 검증하기 위해서 inorder 순회로 left와 right을 검증하여 BST인지 검증해보자.
 *
 * @param {TreeNode} root
 * @return {boolean}
 */

// TODO: recursive call
// var isValidBST = function(root) {
//     if(!root) return false;

//     const result = [];
//     return traverse(root, result);
// };

// function traverse(root, result) {
//     if(!root) return false;

//     if(root.left) traverse(root.left, result);
//     result.push(root.val);
//     if(root.right) traverse(root.right, result);

// }

// TODO: Iteration

var isValidBST = function (root) {
  if (!root) return true;

  const stack = [];
  const result = [];

  // 이진트리를 inorder 순회로 result에 배열로 넣어준다.
  while (root || stack.length > 0) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      result.push(root.val);
      root = root.right;
    }
  }

  // 정렬된 숫자들 중에서 오름차순이 아니면 false를 리턴한다.
  for (let i = 0; i < result.length; i++) {
    if (result[i] >= result[i + 1]) {
      return false;
    }
  }
  return true;
};
