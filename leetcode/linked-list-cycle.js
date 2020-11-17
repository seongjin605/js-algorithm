/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * runner: 두칸씩 이동
 * walker: 한칸씩 이동
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let runner = head;
  let walker = head;

  while (runner !== null) {
    runner = runner.next;
    if (runner !== null) {
      runner = runner.next;
      walker = walker.next;
      if (runner === walker) {
        return true;
      }
    }
  }
  return false;
};
