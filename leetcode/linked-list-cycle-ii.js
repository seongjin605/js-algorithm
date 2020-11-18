/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let runner = head;
  let walker = head;

  // linedlist에서 runner와 walker를 각각 두칸 한칸씩 밀고
  // 두 노드의 위치가 동일하면 walker를 초기값으로 세팅해준다.
  // 그리고 walker와 runner를 한칸씩 밀면서 위치가 동일할때까지 반복한다.
  while (runner) {
    runner = runner.next;
    if (runner) {
      runner = runner.next;
      walker = walker.next;
      if (runner === walker) {
        walker = head;
        while (walker !== runner) {
          runner = runner.next;
          walker = walker.next;
        }
        return walker;
      }
    }
  }
  return null;
};
