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
var middleNode = function (head) {
  if (!head) return [];

  let runner = head;
  let walker = head;

  while (runner) {
    runner = runner.next;
    if (runner) {
      runner = runner.next;
      walker = walker.next;
    }
  }

  return walker;
};

// walker runner technique

// walker: 한번에 한칸씩
// runner: 한번에 두칸씩
