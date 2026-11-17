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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let ptr1: ListNode | null = list1;
        let ptr2: ListNode | null = list2;
        let head: ListNode | null = null;

        if ((ptr1?.val ?? Infinity) > (ptr2?.val ?? Infinity)) {
            head = ptr2;
            ptr2 = ptr2?.next ?? null;
        } else {
            head = ptr1;
            ptr1 = ptr1?.next ?? null;
        }

        
        if (!head) {
            return head;
        }
        let ptr: ListNode | null = head;

        while (ptr && (ptr1 || ptr2)) {
            if ((ptr1?.val ?? Infinity) > (ptr2?.val ?? Infinity)) {
                ptr.next = ptr2;
                ptr2 = ptr2?.next ?? null;
            } else {
                ptr.next = ptr1;
                ptr1 = ptr1?.next ?? null;
            }
            ptr = ptr.next
        }

        return head;
    }
}
