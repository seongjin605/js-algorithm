/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const list = [head.val];
  while (head && head.next) {
    head = head.next;
    if (head) {
      list.push(head.val);
    }
  }

  while (list.length > 1) {
    if (list.shift() !== list.pop()) {
      return false;
    }
  }
  return true;
};
