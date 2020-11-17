var getIntersectionNode = function(headA, headB) {
  function traverse(n1, n2) {
    if (n1 === n2) return n1;
    if (!n1) return traverse(headB, n2.next);
    if (!n2) return traverse(n1.next, headA);
    return traverse(n1.next, n2.next);
  }
  return traverse(headA, headB);
};
