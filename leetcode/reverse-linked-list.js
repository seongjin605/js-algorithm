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

  const slow = head;
  const fast = head;
  // TODO walker && runner task 처리 예정
  while (slow && fast) {
    if (head.next) {
      temp = head.next;
      head.next = head;
      continue;
    }
  }
  return temp;
};
