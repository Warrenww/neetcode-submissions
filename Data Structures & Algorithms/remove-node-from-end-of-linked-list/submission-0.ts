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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let ptr1 = head;
        let ptr2 = head;
        let count = 0;

        while (ptr1) {
            ptr1 = ptr1.next;
            if (count > n) {
                ptr2 = ptr2.next;
            }

            count ++;
        }

        if (count === n) {
            head = head.next;
        } else {
            ptr2.next = ptr2.next.next;
        }

        return head;
    }
}
