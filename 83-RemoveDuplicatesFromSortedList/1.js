/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let current = head;
  if (head == null) return head;
  while (current.next != null) {
    if (current.val == current.next.val) current.next = current.next.next;
    else current = current.next;
  }
  return head;
};
