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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head: ListNode | null, k: number): ListNode {
        if (!head) {
            return null;
        }

        let start = head,
            end = head;
        
        let prev: ListNode | null = null,
            next: ListNode | null = null,
            lastPrev: ListNode | null = null,
            result: ListNode | null = null;

        let count = 0;
        while (end) {
            if (count < k) {
                if ((k - count === 1) && lastPrev) {
                    lastPrev.next = end;
                }
                end = end.next;
                count ++;
                continue;
            }

            count = 0;
            lastPrev = start;
            
            let flag = false;
            while (start !== end) {
                next = start.next;

                start.next = flag ? prev : end;
                flag = true;

                prev = start;
                start = next;
            }

            if (count === k) {
                let flag = false;
                while (start !== end) {
                    next = start.next;

                    start.next = flag ? prev : end;
                    flag = true;

                    prev = start;
                    start = next;
                }
            }

            if (!result) {
                result = prev;
            }
        }

        if(count === k) {
            let flag = false;
            while (start !== end) {
                next = start.next;

                start.next = flag ? prev : end;
                flag = true;

                prev = start;
                start = next;
            }

            if (!result) {
                result = prev;
            }
        }

        return result;
    }
}
