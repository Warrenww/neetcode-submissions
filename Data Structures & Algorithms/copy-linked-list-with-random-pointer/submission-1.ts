// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        let ptr = head;
        const map: Map<Node, Node> = new Map();

        if (!head) {
            return head;
        }

        while (ptr) {
            const newNode = new Node(ptr.val);
            map.set(ptr, newNode);

            ptr = ptr.next;
        }

        Array.from(map.entries()).map(([org, copy]) => {
            copy.next = org.next ? map.get(org.next) : null;
            copy.random = org.random ? map.get(org.random) : null;
        })

        return map.get(head);
    }
}
