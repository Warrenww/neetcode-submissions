/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let current: ListNode | null = head;
        let prev: ListNode | null = null;

        while (current) {
            const next = current.next;
            current.next = prev;

            prev = current;
            current = next;
        }

        return prev;
    }
}
