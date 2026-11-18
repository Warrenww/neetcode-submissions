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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        const array: ListNode[] = [];
        let next = head;
        while (next) {
            array.push(next);
            next = next.next;
        }
        
        if (!array.length) {
            return;
        }
        
        let ptr: ListNode = array.shift();
        let i = 0;
        while (array.length) {
            if (i % 2) {
                ptr.next = array.shift()
            } else {
                ptr.next = array.pop()
            }

            ptr = ptr.next;
            i++;
        }
        
        ptr.next = null;

    }
}
