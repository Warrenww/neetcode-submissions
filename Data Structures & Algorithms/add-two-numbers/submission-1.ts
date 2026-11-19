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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let pt1 = l1;
        let pt2 = l2;
        const result: ListNode = new ListNode(0);
        let pt3 = result;

        while (pt1 || pt2) {
            const a = pt1?.val ?? 0;
            const b = pt2?.val ?? 0;
            const sum = a + b + pt3.val;
            pt3.val = sum > 9 ? sum - 10 : sum;

            pt1 = pt1?.next;
            pt2 = pt2?.next;

            if (!pt1 && !pt2 && sum < 10) {
                break;
            }

            pt3.next = new ListNode(sum > 9 ? 1 : 0);
            pt3 = pt3.next;
        }

        return result;
    }
}
