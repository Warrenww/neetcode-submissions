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
    merge(l1: ListNode, l2: ListNode): ListNode {
        if (!l1) {
            return l2;
        }

        if (!l2) {
             return l1;
        }

        let ptr1 = l1;
        let ptr2 = l2;
        let result: ListNode = null;
        let ptr = result;

        while (ptr1 && ptr2) {
            if (ptr1.val < ptr2.val) {
                if (!result) {
                    result = ptr1;
                    ptr = result;
                } else {
                    ptr.next = ptr1;
                    ptr = ptr.next;
                }
                ptr1 = ptr1.next;
            } else {
                if (!result) {
                    result = ptr2;
                    ptr = result;
                } else {
                    ptr.next = ptr2;
                    ptr = ptr.next
                }
                ptr2 = ptr2.next;
            }
        }

        while (ptr1) {
            ptr.next = ptr1;
            ptr1 = ptr1.next;
            ptr = ptr.next;
        }

        while (ptr2) {
            ptr.next = ptr2;
            ptr2 = ptr2.next;
            ptr = ptr.next;
        }

        return result;
    }

    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
          if (lists.length <= 1) {
                return lists[0] ?? null;
            }
        
            return this.merge(
                this.mergeKLists(lists.slice(0, lists.length / 2 | 0)),
                this.mergeKLists(lists.slice(lists.length / 2 | 0))
            );

    }
}
