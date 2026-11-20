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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        let array: ListNode[] = [];

        lists.forEach((list) => {
            while (list) {
                array.push(list);
                list = list.next;
            }
        });

        array = array.sort((a, b) => a.val - b.val);

        if (!array.length) {
            return null;
        }

        array.reduce((ptr, curr) => {
            ptr.next = curr;
            ptr = curr;
            return ptr;
        }, array[0]);

        return array[0];       

    }
}
