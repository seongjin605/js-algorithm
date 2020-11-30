/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return;
  let temp = null;

  let walker = head;
  let runner = head;

  while (runner) {
    runner = runner.next;
    if (runner) {
      runner = runner.next;
      walker = walker.next;
    }
  }

  return head;
};
