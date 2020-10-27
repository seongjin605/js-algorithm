/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Input: 1->2->2->1
 * Output: true
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head) return true;
  const queue = [head];
  console.log('queue:', queue);
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.val);
    if (node.next) {
      queue.push(node);
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] !== result[result.length - i - 1]) {
      return false;
    }
  }
  return true;
};
