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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        if (!head) {
            return false;
        }

        let next: ListNode | null = head;
        const visits: Set<ListNode> = new Set();
        while(next) {
            if (visits.has(next)) {
                return true;
            }

            visits.add(next);
            next = next.next;
        }

        return false;
    }
}
